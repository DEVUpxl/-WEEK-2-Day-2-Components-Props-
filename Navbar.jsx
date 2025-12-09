import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">MyReact</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
