import { NavLink } from "react-router-dom";
import "./nav.css"; 

export default function Nav() {
  const activeStyle = { fontWeight: "700", color: "#0b64d4" };
  return (
    <nav className="site-nav">
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)} end>
        Home
      </NavLink>
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        About
      </NavLink>
      <NavLink to="/portfolio" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Portfolio
      </NavLink>
      <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Contact
      </NavLink>
    </nav>
  );
}
