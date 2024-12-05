// import React, { useRef, useState } from 'react'
// import { FaCloudUploadAlt } from "react-icons/fa";
// import { FaImage } from "react-icons/fa";
// import SingleImg from './SingleImg';


// const Upload = () => {
//     const inputRef = useRef(null)
//     const [prevfile,setPrevFile] = useState([])

//     const clickHandler = ()=>{
//         if(inputRef.current){
//             inputRef.current.click()
//         }
//     }
//     // const fileChange = async (event)=>{
//     //     const files = Array.from(event.target.files)
//     //     const slicefile = files.slice( 0,6 - prevfile.length)
//     //     for (let img of slicefile){
//     //         await upload(img)
//     //     }

//     //     async function upload(file){
//     //         const formData = new FormData()
//     //         formData.append('image' , file)
//     //         const response = await fetch("http://localhost:3000/image/upload" , {
//     //             method : 'POST',
//     //             body : formData,
//     //             // body cannot send with stringfyer form data send data on image 
//     //         })
//     //         const result = await response.json()
//     //         console.log(result)

//     //     }
//     //     // slicefile.map((file)=>{
//     //     //     const fileReader = new FileReader()

//     //     //     fileReader.onload = (event)=>{
//     //     //         converter(event.target.result)

//     //     //     }
//     //     //     fileReader.readAsDataURL(file)
//     //     // })
//     //     // function converter(file){
//     //     //     setPrevFile(prevfile => [...prevfile ,file])
//     //     // }
//     // }
// //  const fileChange = async (event) => {
// //     const files = Array.from(event.target.files);
// //     const slicefile = files.slice(0, 6 - prevfile.length); // Restrict to max 6 files

// //     for (let img of slicefile) {
// //         setPrevFile(prevfile => [...prevfile , 'placeholder'])
// //         await upload(img); // Upload each file
// //     }

// //     async function upload(file) {
// //         const formData = new FormData();
// //         formData.append('image', file);

// //         try {
// //             const response = await fetch("http://localhost:3000/image/upload", {
// //                 method: 'POST',
// //                 body: formData,
// //             });

// //             if (!response.ok) {
// //                 console.error('Error uploading image:', response.statusText);
// //                 return;
// //             }

// //             const result = await response.json();
// //             console.log(result); // Log the response to verify its structure

// //             // Check if the response contains the expected keys
// //             if (result?.message === 'sucess' && result?.image) {
// //                 // setPrevFile((prevfile) => [...prevfile, result.image]); // Update state with new image URL
// //                 setPrevFile(prevfile => {
// //                     const updatedFiles = [...prevfile];
// //                     updatedFiles[prevfile.length - 1] = result?.image;
// //                     return updatedFiles;
// //                 });
// //             } else {
// //                 console.error('Unexpected response format:', result);
// //             }
// //         } catch (error) {
// //             console.error('Error during upload:', error);
// //         }
// //     }
// // };
// const fileChange = async (event) => {
//     const files = Array.from(event.target.files);
//     const slicefile = files.slice(0, 6 - prevfile.length); // Restrict to max 6 files

//     for (let img of slicefile) {
//         // Validate file type
//         if (!['image/jpeg', 'image/png'].includes(img.type)) {
//             alert('Invalid file type. Only JPEG and PNG are allowed.');
//             continue;
//         }

//         // Validate file size (limit to 5MB)
//         if (img.size > 5 * 1024 * 1024) {
//             alert('File is too large. Maximum allowed size is 5MB.');
//             continue;
//         }

//         setPrevFile(prevfile => [...prevfile , 'placeholder']); // Add placeholder
//         await upload(img); // Upload each valid file
//     }

//     async function upload(file) {
//         const formData = new FormData();
//         formData.append('image', file);

//         try {
//             const response = await fetch("http://localhost:3000/image/upload", {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (!response.ok) {
//                 console.error('Error uploading image:', response.statusText);
//                 return;
//             }

//             const result = await response.json();
//             console.log(result); // Log the response to verify its structure

//             // Check if the response contains the expected keys
//             if (result?.message === 'sucess' && result?.image) {
//                 // Update state with new image URL
//                 setPrevFile(prevfile => {
//                     const updatedFiles = [...prevfile];
//                     updatedFiles[prevfile.length - 1] = result?.image;
//                     return updatedFiles;
//                 });
//             } else {
//                 console.error('Unexpected response format:', result);
//             }
//         } catch (error) {
//             console.error('Error during upload:', error);
//         }
//     }
// };

// const saveHandler = ()=>{
//     console.log(prevfile)
// }

    
//   return (
//     <>
//      <div className="upload-main">
//         <div className="upload-section">
//            <div className="upload-header">
//            <span>Media</span>
//            <FaImage />
//            </div>
//            <div onClick={clickHandler} className="uploader">
//             <input
//             onChange={fileChange}
//             ref={inputRef}
//              style={{display: 'none'}} 
//             type="file" multiple accept='image/png.image/jpeg,image/jpg' />
//            <FaCloudUploadAlt />
//            <span>upload files</span>
//            </div>
//            <div className="preview">
//             {
//                 prevfile.map((img,index)=>{
//                     return <SingleImg  prevfile = {prevfile} setPrevFile = {setPrevFile} index = {index} key={index} item={img}/>
//                 })
//             }
//            </div>
//            <button onClick={saveHandler}>Save</button>
//         </div>
//      </div>
//     </>
 
//   )
// }


// export default Upload
import React, { useRef, useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import SingleImg from './SingleImg';

const Upload = () => {
  const inputRef = useRef(null);
  const [prevfile, setPrevFile] = useState([]); // State to store image URLs

  const clickHandler = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const fileChange = async (event) => {
    const files = Array.from(event.target.files);
    const slicefile = files.slice(0, 6 - prevfile.length); // Restrict to max 6 files

    for (let img of slicefile) {
      // Validate file type
      if (!['image/jpeg', 'image/png'].includes(img.type)) {
        alert('Invalid file type. Only JPEG and PNG are allowed.');
        continue;
      }

      // Validate file size (limit to 5MB)
      if (img.size > 5 * 1024 * 1024) {
        alert('File is too large. Maximum allowed size is 5MB.');
        continue;
      }

      // Placeholder until the image is uploaded
      setPrevFile((prevfile) => [...prevfile, 'placeholder']);
      await upload(img);
    }
  };

  const upload = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch("http://localhost:3000/image/upload", {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        console.error('Error uploading image:', response.statusText);
        return;
      }

      const result = await response.json();
      console.log(result); // Log the result to check the image URL

      // If the response contains the expected keys
      if (result?.message === 'Success' && result?.image) {
        setPrevFile((prevfile) => {
          const updatedFiles = [...prevfile];
          updatedFiles[prevfile.length - 1] = result?.image; // Replace placeholder with image URL
          return updatedFiles;
        });
      } else {
        console.error('Unexpected response format:', result);
      }
    } catch (error) {
      console.error('Error during upload:', error);
    }
  };

  const saveHandler = () => {
    console.log(prevfile); // You can save the image URLs or send them to the backend
  };

  return (
    <>
      <div className="upload-main">
        <div className="upload-section">
          <div className="upload-header">
            <span>Media</span>
            <FaImage />
          </div>
          <div onClick={clickHandler} className="uploader">
            <input
              onChange={fileChange}
              ref={inputRef}
              style={{ display: 'none' }}
              type="file"
              multiple
              accept="image/png,image/jpeg"
            />
            <FaCloudUploadAlt />
            <span>Upload files</span>
          </div>
          <div className="preview">
            {prevfile.map((img, index) => {
              return <SingleImg prevfile={prevfile} setPrevFile={setPrevFile} index={index} key={index} item={img} />;
            })}
          </div>
          <button onClick={saveHandler}>Save</button>
        </div>
      </div>
    </>
  );
};

export default Upload;
