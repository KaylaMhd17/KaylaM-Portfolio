import React from "react";
import { 
  TiHomeOutline, 
  TiUserOutline , 
  TiMortarBoard, 
  TiMessage
} from "react-icons/ti";
import { FiSettings } from "react-icons/fi"; // ⬅️ Import icon settings (baut/obeng)
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="aside">
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav_item">
            <a href="#home" className="nav_link">
              <TiHomeOutline />
            </a>
          </li>
          <li className="nav_item">
            <a href="#about" className="nav_link">
             <TiUserOutline />
            </a>
          </li>
          
          {/* Services pakai icon settings */}
          <li className="nav_item">
            <a href="#services" className="nav_link">
              <FiSettings />
            </a>
          </li>

          <li className="nav_item">
            <a href="#portfolio" className="nav_link">
              <TiMortarBoard />
            </a>
          </li>
       
          <li className="nav_item">
            <a href="#contact" className="nav_link">
              <TiMessage />
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav_footer">
        <span className="copyright">&copy; 2025</span>
      </div>
    </aside>
  );
};

export default Sidebar;
