// src/components/CourseMaterials.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CourseMaterial.css'; 
import { MdSlowMotionVideo } from "react-icons/md";
import { MdLibraryBooks, MdVideoLibrary, MdSlideshow, MdWeb } from 'react-icons/md';

const CourseMaterials = ({ courseId }) => {
  const navigate = useNavigate();

  const navigateToMaterial = (materialType) => {
    navigate(`/course/${courseId}/${materialType}`);
  };

  return (
    <div className="course-materials-container">
      <h2>Course Materials</h2>
      <div className="buttons-container">
        <button className="material-button" onClick={() => navigateToMaterial('Recorded Lecture')}><MdVideoLibrary/>Recorded Lecture</button>
        <button className="material-button" onClick={() => navigateToMaterial('Recorded Lab')}><MdVideoLibrary/>Recorded Lab</button>
        <button className="material-button" onClick={() => navigateToMaterial('Lecture Slides')}><MdLibraryBooks/>Lecture Slides</button>
        <button className="material-button" onClick={() => navigateToMaterial('Lab Slides')}><MdLibraryBooks/>Lab Slides</button>
      </div>
    </div>
  );
};

export default CourseMaterials;
