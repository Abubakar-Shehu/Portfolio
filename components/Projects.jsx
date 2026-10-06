export default function Projects() {
  const projects = [
    {
      name: "Premier League Statistics 2025/2026",
      url: "https://prem-stats.vercel.app",
      description: "A personal project that tracks Premier League 2025/2026 season statistics. Built as a football fan who wanted a clearer view of the game.",
      image: "/project_pics/prem-stats.jpg"
    },
    {
      name: "Tinyapp",
      url: "https://tinyapp-mu.vercel.app",
      description: "A simple URL shortener that lets you create and manage tiny links for longer URLs.",
      image: "/project_pics/tinyapp.jpg"
    },
    {
      name: "Wiki-map",
      url: "https://wiki-map-bam.vercel.app",
      description: "An interactive map app for creating markers on major cities around the world.",
      image: "/project_pics/wiki-maps.jpg"
    },
    {
      name: "Tweeter",
      url: "#",
      description: "A simple Twitter clone for composing tweets and browsing a feed. Coming soon.",
      image: "/project_pics/tweeter.jpg"
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
                {project.url === "#" ? (
                  <span className="project-link project-link-disabled">Coming Soon</span>
                ) : (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                )}
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
