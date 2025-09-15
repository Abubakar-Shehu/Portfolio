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

      {/* Separate section for Proxy Server */}
      <div className="server-section">
        <h3 className="server-title">Infrastructure & Tools</h3>
        <div className="server-card">
          <div className="server-icon">
            <span>🖥️</span>
          </div>
          <div className="server-content">
            <h4 className="server-name">Proxy Server</h4>
            <p className="server-description">
              Custom proxy server built to support and run various projects. 
              Handles routing, load balancing, and provides a centralized infrastructure solution.
            </p>
            <div className="server-links">
              <a 
                href="https://github.com/Abubakar-Shehu/Server" 
                target="_blank" 
                rel="noopener noreferrer"
                className="server-link"
              >
                <span>📁</span>
                View on GitHub
              </a>
              <a 
                href="https://server-abu.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="server-link"
              >
                <span>🌐</span>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
