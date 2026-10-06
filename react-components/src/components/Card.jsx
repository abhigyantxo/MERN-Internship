function Card({ title, description, category }) {
  return (
    <div className="card">
      <span className="card-category">{category}</span>

      <h2>{title}</h2>

      <p>{description}</p>

      <button>View Project</button>
    </div>
  );
}

export default Card;