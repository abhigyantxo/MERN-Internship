import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const projects = [
    {
      title: "Veda",
      description: "An AI-powered web platform project.",
      category: "AI Project",
    },
    {
      title: "Fake News Detection",
      description: "A research project based on detecting fake news using AI.",
      category: "Machine Learning",
    },
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website built using HTML and CSS.",
      category: "Web Development",
    },
  ];

  function handleButtonClick() {
    setShowMessage(!showMessage);
  }

  return (
    <div>
      <Header />

      <main className="main-content">

        <section id="home" className="hero">
          <h1>React Components Practice</h1>

          <p>
            Learning reusable React components, props, state and events.
          </p>

          <Button
            text={showMessage ? "Hide Message" : "Show Message"}
            onClick={handleButtonClick}
          />

          {showMessage && (
            <p className="message">
              React state and events are working successfully!
            </p>
          )}
        </section>

        <section id="components" className="projects-section">
          <h2>Reusable Card Components</h2>

          <div className="card-container">
            {projects.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                category={project.category}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="form-section">
          <Form />
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;