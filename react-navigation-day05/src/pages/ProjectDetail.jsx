import { useParams, Link } from "react-router-dom";

const projectData = {
  project1: {
    title: "Employee Management System",
    body: "A Java-based application for managing employees, including CRUD operations and reporting."
  },
  project2: {
    title: "Cup Cake Mobile App",
    body: "A Java mobile app for a bakery to manage orders and customers."
  },
  project3: {
    title: "Cineplex Movie Theater WebSite",
    body: "Built with HTML, CSS, and JavaScript; includes movie listings, showtimes, and booking."
  },
  project4: {
    title: "Rent A Car System",
    body: "Java application with REST API for managing car rentals, customers, and reservations."
  },
  project5: {
    title: "Debra Event Management System",
    body: "C# Windows Forms application to manage events, tickets, customers, and partners."
  },
  project6: {
    title: "Super Car Price Prediction",
    body: "AI model training project predicting supercar prices using machine learning techniques."
  },
  project7: {
    title: "Used Vehicle Price Prediction & Recommendation System",
    body: "AI model training + Flask web app with HTML, CSS, and JS for used vehicle price prediction and recommendations."
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div>
        <h2>Project not found</h2>
        <Link to="/portfolio">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.body}</p>
      <Link to="/portfolio">Back to Portfolio</Link>
    </div>
  );
}
