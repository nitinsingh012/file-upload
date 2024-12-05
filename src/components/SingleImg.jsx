// import React from 'react'
// import '../index.css';
// import { MdOutlineCancel } from "react-icons/md";
// const SingleImg = ({item, index , prevfile , setPrevFile}) => {

//     const deleteHandler = ()=>{
//         const copy = [...prevfile]
//         copy.splice(index,1)
//         setPrevFile(copy)
//     //   console.log(index)
//     }
//   return (
//     <div className='single-img'>
      
//         {item !== 'placeholder' &&   <MdOutlineCancel onClick={deleteHandler} /> }
//         {item === 'placeholder' ? <span style={{fontSize : '10px' , display : "inline-block", padding : '0.6rem'}}>loading....</span> : <img src = {item} alt="" /> }
       
//     </div>
//   )
// }

// export default SingleImg
import React from 'react';
import { MdOutlineCancel } from "react-icons/md";
import '../index.css';

const SingleImg = ({ item, index, prevfile, setPrevFile }) => {

    const deleteHandler = () => {
        const copy = [...prevfile];
        copy.splice(index, 1);
        setPrevFile(copy);
    };

    return (
        <div className='single-img'>
            {item !== 'placeholder' && <MdOutlineCancel onClick={deleteHandler} />}
            {item === 'placeholder' 
                ? <span style={{ fontSize: '10px', display: "inline-block", padding: '0.6rem' }}>loading....</span>
                : <img src={item} alt={`Uploaded image ${index}`} />
            }
        </div>
    );
};

export default SingleImg;
