export default function Projects() {
  const projects = [
    {
      name: "Premier League Statistics 2025/2025",
      url: "https://prem-stats.vercel.app",
      description: "This is a personal project that I built to track the statistics of the Premier League 2025/2026 season. I am a big football fan so this was a fun & personal project to build.",
      image: "/project_pics/prem-stats.jpg" // Placeholder for image
    },
    {
      name: "Tinyapp",
      url: "https://tinyapp-mu.vercel.app",
      description: "This is an app that allows you to create a tiny URL for your links. It is a simple and easy to use app that allows you to create a tiny URL for your links.",
      image: "/project_pics/tinyapp.jpg" // Placeholder for image
    },
    {
      name: "Wiki-map",
      url: "https://wiki-map-bam.vercel.app",
      description: "This is an app that allows you to create markers on maps of major cities in the world.",
      image: "/project_pics/wiki-maps.jpg" // Placeholder for image
    },
    {
      name: "Tweeter",
      url: "#", // No URL provided, you can add it later
      description: "This is a simple Twitter clone that allows you to create tweets and view them. It is a simple and easy to use app that allows you to create tweets and view them.",
      image: "/project_pics/tweeter.jpg" // Placeholder for image
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.name} 
                className="project-image"
              />
              <div className="image-placeholder" style={{ display: 'none' }}>
                <span>📸</span>
                <p>Image not found</p>
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-links">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  disabled={project.url === "#"}
                >
                  {project.url === "#" ? "Coming Soon" : "View Project"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills and Technologies Section */}
      <div className="skills-section">
        <h3 className="skills-title">Skills & Technologies</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4 className="category-title">Frontend</h4>
            <div className="skill-items">
              <span className="skill-item">HTML</span>
              <span className="skill-item">CSS</span>
              <span className="skill-item">JavaScript</span>
              <span className="skill-item">React</span>
              <span className="skill-item">Next.js</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4 className="category-title">Backend</h4>
            <div className="skill-items">
              <span className="skill-item">Express</span>
              <span className="skill-item">EJS</span>
              <span className="skill-item">C#</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4 className="category-title">Database</h4>
            <div className="skill-items">
              <span className="skill-item">PostgreSQL</span>
              <span className="skill-item">MSSQL</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4 className="category-title">Tools</h4>
            <div className="skill-items">
              <span className="skill-item">Git</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
