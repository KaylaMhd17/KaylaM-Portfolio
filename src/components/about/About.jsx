import React from 'react'
import "./about.css";
import ProfileImage from "../../assets/rs.jpeg"
import CvImage from "../../assets/dffff.jpg"   // ganti nama variabelnya
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">About Me</h2>
      
      <div className="about_container grid">
        <img src={ProfileImage} alt="Profile" className="about_img" />
        
        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
             I’m Kayla Mashudini, a Web Developer from Indonesia.
I specialize in designing, developing, and customizing modern websites to create clean, responsive, and user-friendly digital experiences.
            </p>

            {/* Gunakan link CV dengan gambar yg kamu import */}
            <a 
              href={CvImage}
              download="Kayla_Mashudini_CV.jpg" 
              className="btn"
            >
              Download CV
            </a>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">HTML & CSS</h3>
                <span className="skills_number">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage htmlcss"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">JavaScript</h3>
                <span className="skills_number">80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage javascript"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">React JS</h3>
                <span className="skills_number">85%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage reactjs"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AboutBox tetap di dalam <section> */}
      <AboutBox />  
    </section>
  )
}

export default About
