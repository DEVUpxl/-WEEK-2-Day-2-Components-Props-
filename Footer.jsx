import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} MyReact. All Rights Reserved.
    </footer>
  );
}

export default Footer;
