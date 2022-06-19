// /* eslint-disable react/jsx-no-undef */
// import axios from 'axios';
// import React from 'react';
// import { useState, useEffect } from 'react';
// import { Image } from 'cloudinary-react';
// import { useDispatch } from 'react-redux';

// const UploadImage = () => {
//   const [selectedImages, setSelectedImages] = useState('');
//   const [imageData, setImageData] = useState<[]>([]);

//   const uploadImage = () => {
//     const formData = new FormData();
//     formData.append('file', selectedImages);
//     formData.append('upload_preset', 'myrobe');

//     const postImage = async () => {
//       try {
//         const response = await axios.post(
//           'https://api.cloudinary.com/v1_1/djmh8vlgx/image/upload',
//           formData,
//         );
//         //  console.log('response', response);
//         //@ts-ignore
//         //   const pushData = imageData.push(response);

//         setImageData(imageData.push(response.data));
//         localStorage.setItem(
//           'image',
//           //@ts-ignore

//           JSON.stringify(imageData),
//         );
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     postImage();
//   };

//   const handleUpload = event => {
//     if (event.target.files && event.target.files[0]) {
//       setSelectedImages(event.target.files[0]);
//     }
//   };

//   return (
//     <>
//       <>
//         <input
//           type="file"
//           className="input-file"
//           name="file"
//           id="file"
//           required={true}
//           onChange={e => handleUpload(e)}
//           //   onClick={uploadImage}
//         />

//         <input onClick={uploadImage} type="submit" value="Envoyer" />
//         {/* <input type=s onClick={uploadImage}> Télecharger une image</input> */}
//       </>
//     </>
//   );
// };

// export default UploadImage;
export default {};
