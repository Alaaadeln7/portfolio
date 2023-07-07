import './sidebar.scss';
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaAddressCard, FaProjectDiagram, FaHome, FaPhone } from "react-icons/fa";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside className={isOpen ? "miny-side-bar" : null}>
      <div className="container">
        <div className="logo" style={{ display: "flex" }}>
          {!isOpen && (<h2><Link to={"/"}>Alaa Portfolio</Link></h2>)}
          <span className={isOpen ? "back back-in" : "back back-out"}
            onClick={() => setIsOpen(!isOpen)}><FaBars /></span>
        </div>
        <nav>
          <ul>
            <li><Link to={'/'}><FaHome />{!isOpen && (<p>Home</p>)}</Link></li>
            <li><Link to={'/About'}><FaAddressCard />{!isOpen && (<p>About Me</p>)}</Link></li>
            <li><Link to={'/Projects'}><FaProjectDiagram />{!isOpen && (<p>Projects</p>)}</Link></li>
            <li><Link to={'/Contact'}><FaPhone />{!isOpen && (<p>Contact Me</p>)}</Link></li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}
