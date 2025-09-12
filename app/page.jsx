import Navigation from '../components/Navigation';
import Section from '../components/Section';
import WorkMap from '../components/WorkMap';

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
          <p>A dynamic software engineer with experience in web development and back-end systems, skilled in a range of technologies such as WordPress, React, Node.js, and PostgreSQL. Possesses a strong foundation in creating and managing websites, implementing order management systems, and ensuring seamless integration of front-end and back-end components.</p>
          <WorkMap />
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
