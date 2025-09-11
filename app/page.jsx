import Navigation from '../components/Navigation';
import Section from '../components/Section';

export default function Home() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Section id="home" className="hero">
          <h1>Welcome to My Portfolio</h1>
          <p>This is your clean portfolio template. Start building your amazing portfolio!</p>
        </Section>

        <Section id="about" className="about">
          <h2>About Me</h2>
          <p>Add your personal information, skills, and background here.</p>
        </Section>

        <Section id="projects" className="projects">
          <h2>My Projects</h2>
          <p>Showcase your work and projects here.</p>
        </Section>

        <Section id="contact" className="contact">
          <h2>Get In Touch</h2>
          <p>Add your contact information and social links here.</p>
        </Section>
      </main>
    </div>
  );
}
