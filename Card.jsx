import "./Card.css";

function Card({ title, category, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <span className="category">{category}</span>
      <p>{description}</p>
    </div>
  );
}

export default Card;
