import { useState } from "react";
import { Link } from "react-router-dom";

import "./sidebar.scss";

const Sidebar = () => {
  
  const [toggled, setToggled] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <a className="sidebar-link">
          <span>Selector y descargas</span>
        </a>
      </div>
      <div className="sidebar-item">
        <a className="sidebar-link">
          <span>Selector Mapa</span>
        </a>
      </div>
      <div className="sidebar-item">
        <a className="sidebar-link">
          <span>Vision General</span>
        </a>
      </div>
      <div className="sidebar-item">
        <a className="sidebar-link">
          <span>Mapa de Calor</span>
        </a>
      </div>      
      <div className="sidebar-item">
        <a className="sidebar-link">
          <span>Mapa Provincial de Burbujas</span>
        </a>
      </div>  
    </div>
  );
};

export default Sidebar;
