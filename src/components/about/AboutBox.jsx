import React from 'react'
import "./about.css"
import { FaHeart,FaFire,FaMugHot,FaMedal } from "react-icons/fa6";
const AboutBox = () => {
  return (
    <div className="about_boxes grid">
      <div className="about box">
      <FaFire />
        <div>
          <h3 className="about_title">10+</h3>
          <span className="about_subtitle">Project completed</span>
        </div>
      </div>

      <div className="about box">
       <FaHeart />
        <div>
          <h3 className="about_title">10+</h3>
          <span className="about_subtitle">Likes my project</span>
        </div>
      </div>

      <div className="about box">
       <FaMugHot />
        <div>
          <h3 className="about_title">2th</h3>
          <span className="about_subtitle">experience</span>
        </div>
      </div>

      <div className="about box">
      <FaMedal />
        <div>
          <h3 className="about_title">2</h3>
          <span className="about_subtitle">Training</span>
        </div>
      </div>
    </div>
  )
}

export default AboutBox
