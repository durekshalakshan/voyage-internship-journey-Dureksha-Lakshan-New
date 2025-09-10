export default function Projects(){
  const projects = [
    { title: "Employee Management System"},
    { title: "Cup Cake Mobile App" },
    { title: "Cineplex Move Theater WebSite" },
    { title: "Rent A Car System" },
    { title: "Debra Event Managment System" },
    { title: "Super car Price Prediction" },
    { title: "Used Vehicle Price Prediction & Recommendation System" }
  ];

  const hasProjects = projects.length > 0;

  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      {hasProjects ? (
        <ul>
          {projects.map((p, i) => (
            <li key={i}>
              <strong>{p.title}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects yet 😢</p>
      )}
    </section>
  );
}
