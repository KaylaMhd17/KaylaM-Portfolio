import React from 'react'
import "./service.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-4.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX Design",
    description:
      "Designing intuitive, user-friendly, and visually appealing interfaces that enhance user experience.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Building responsive, scalable, and high-performance websites with modern technologies.",
  },
  {
    id: 3,
    image: Image3,
    title: "Mobile App Development",
    description:
      "Developing efficient and user-friendly mobile applications for Android and iOS platforms.",
  },
];

const Service = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section_title">Services</h2>
      <div className="services_container grid">
        {data.map(({ id, image, title, description }) => (
          <div className="services_card" key={id}>
            <img src={image} alt={title} className="services_img" />
            <h3 className="services_title">{title}</h3>
            <p className="services_description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service;
