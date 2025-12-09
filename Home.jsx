import Card from "./Card";
import "./Home.css";

function Home() {
  return (
    <div className="home-main">

      {/* Hero Section */}
      <section className="hero">
        <h1>Build Amazing Components</h1>
        <p>Create reusable, dynamic & beautiful UI with React.</p>
        <button className="hero-btn">Explore More</button>
      </section>

      {/* Cards Section */}
      <h2 className="section-title">Featured Cards</h2>

      <div className="cards-wrapper">
        <Card
          title="React UI"
          category="Frontend"
          description="A modern UI component created using props."
        />
        <Card
          title="Express API"
          category="Backend"
          description="API built with Node.js and Express framework."
        />
        <Card
          title="Design System"
          category="Design"
          description="Clean and consistent UI built with Figma."
        />
        <Card
          title="Analytics Tool"
          category="Dashboard"
          description="Track your data with dynamic charts & insights."
        />
      </div>
    </div>
  );
}

export default Home;
