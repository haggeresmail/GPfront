// // src/components/UploadMaterial.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const UploadMaterial = ({ courseId }) => {
//   const [file, setFile] = useState(null);
//   const [materialType, setMaterialType] = useState('Recorded Lecture');

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleTypeChange = (event) => {
//     setMaterialType(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('material', file);
//     formData.append('type', materialType);
//     formData.append('courseId', courseId);

//     try {
//       const response = await axios.post('/api/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log(response.data);
//       // Handle successful upload (e.g., show a success message)
//     } catch (error) {
//       console.error(error);
//       // Handle error (e.g., show an error message)
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Material</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Material Type:</label>
//           <select value={materialType} onChange={handleTypeChange}>
//             <option value="Recorded Lecture">Recorded Lecture</option>
//             <option value="Recorded Lab">Recorded Lab</option>
//             <option value="Lecture Slides">Lecture Slides</option>
//             <option value="Lab Slides">Lab Slides</option>
//           </select>
//         </div>
//         <div>
//           <label>File:</label>
//           <input type="file" onChange={handleFileChange} />
//         </div>
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// };
// export default UploadMaterial;
