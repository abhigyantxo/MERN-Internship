function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <span className="category">{post.category}</span>

      <h2>{post.title}</h2>

      <p className="excerpt">{post.excerpt}</p>

      <div className="post-info">
        <span>{post.author}</span>
        <span>{post.date}</span>
      </div>

      <button className="read-button">
        Read More
      </button>
    </article>
  );
}

export default BlogCard;