import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    { id: "project1", title: "Employee Management System", tech: "Java project" },
    { id: "project2", title: "Cup Cake Mobile App", tech: "Java" },
    { id: "project3", title: "Cineplex Movie Theater WebSite", tech: "HTML, CSS, JS" },
    { id: "project4", title: "Rent A Car System", tech: "Java with REST API" },
    { id: "project5", title: "Debra Event Management System", tech: "C#" },
    { id: "project6", title: "Super Car Price Prediction", tech: "AI model training" },
    { id: "project7", title: "Used Vehicle Price Prediction & Recommendation System", tech: "AI model training + Flask, HTML, CSS, JS" },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((p, index) => (
          <li key={index}>
            <Link to={`/portfolio/${p.id || index}`}>{p.title}</Link> — {p.tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
