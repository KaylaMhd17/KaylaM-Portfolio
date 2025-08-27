import React from 'react';
import "./home.css";
import Me from "../../assets/rs.jpeg";
import HeaderSocials from './HeaderSocial';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="Avatar" className="home_img" />
        <h1 className="home_name">Kayla Mashudini</h1>
        <span className="home_education">I'm Web Developer</span>
        <HeaderSocials/>
        
        <a href="#contact" className="btn">Hire Me</a>
        <ScrollDown/>
      </div>
      <Shapes />
    </section>
  );
};

export default Home;