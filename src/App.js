import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://api.vomo.org/v1/projects", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer e21e5c8ee857a73a42b4ca6221b3a7f6f009873a"
      }
    })
      .then(el => el.json())
      .then(res => {
        console.log("rs", res);
        setProjects(res?.data || []);
      });
  }, []);

  return (
    <div className="projects-container">
      <h1>First Church of Springfield Projects</h1>
      <ul>
        {projects.map(el => (
          <li>
            <div className="image-container">
              <div className="overlay" />
              <img src={el.images[0]} />
            </div>
            <div className="title">{el.project_name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
