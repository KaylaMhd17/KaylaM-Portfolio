import React, { useState } from "react";
import Menu from "./Menu"; // Data project
import "./portfolio.css";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  // Fungsi filter berdasarkan kategori
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter(
      (curElem) => curElem.category === categoryItem
    );
    setItems(updatedItems);
  };

  // Tampilkan semua project
  const showAll = () => {
    setItems(Menu);
  };

  return (
    <section className="portfolio container section" id="portfolio">
      <h2 className="section_title">My Project</h2>

      {/* Filter Menu */}
      <div className="work_filters">
        <span className="work_item" onClick={showAll}>Everything</span>
        <span className="work_item" onClick={() => filterItem("Laravel")}>Laravel</span>
        <span className="work_item" onClick={() => filterItem("ReactJS")}>React JS</span>
        <span className="work_item" onClick={() => filterItem("JavaScript")}>JavaScript</span>
        <span className="work_item" onClick={() => filterItem("Figma")}>Figma</span>
      </div>


      {/* Container Project */}
      <div className="work_container grid">
        {items.length > 0 ? (
          items.map(({ id, image, title, category }) => (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt={title} className="work_img" />
                <div className="work_mask"></div>
              </div>
              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a href="#" className="work_button">
                <i className="icon-link work_button-icon"></i>
              </a>
            </div>
          ))
        ) : (
          <p className="no_projects">No projects found</p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
