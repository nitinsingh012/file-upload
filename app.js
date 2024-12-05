// const express = require("express")
// require("dotenv").config()
// const app = express()
// const cors = require("cors")
// const imageRoutes = require("../server/routes/image")





// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({extended : true , limit : '50mb'}))
// app.use("/image", imageRoutes)

// app.use((error , req,res,next)=>{
//     const message = error.message || 'server error'
//     const statusCode = error.statusCode || 500
//     res.status(statusCode).json({message : message})
// })

// app.listen(process.env.PORT, ()=>{
//     console.log(`server listen at ${process.env.PORT}`)
// })
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose"); // Import mongoose
const cors = require("cors");
const imageRoutes = require("../server/routes/image");

const app = express();

// Connect to MongoDB
const connectedDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB is connected");
    } catch (err) {
        console.error("DB connection error:", err);
    }
};

// Call the connectedDb function to connect to MongoDB
connectedDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use("/image", imageRoutes);

app.use((error, req, res, next) => {
    const message = error.message || "Server error";
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({ message: message });
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening at ${process.env.PORT}`);
});
