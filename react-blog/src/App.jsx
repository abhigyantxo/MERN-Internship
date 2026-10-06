import { useState } from "react";
import "./App.css";

import BlogCard from "./components/BlogCard";
import posts from "./data/posts.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(posts.map((post) => post.category)),
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">

      <header className="blog-header">
        <h1>Abhigyan's Blog</h1>

        <p>
          Thoughts, tutorials and ideas about technology.
        </p>
      </header>

      <main className="blog-container">

        <section className="controls">

          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <select
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(event.target.value)
            }
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

        </section>

        <section className="posts-section">

          <div className="posts-header">
            <h2>Latest Posts</h2>

            <span>
              {filteredPosts.length} posts found
            </span>
          </div>

          <div className="blog-grid">

            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                />
              ))
            ) : (
              <p className="no-results">
                No blog posts found.
              </p>
            )}

          </div>

        </section>

      </main>

      <footer className="blog-footer">
        <p>©️ 2026 Abhigyan Singh. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;