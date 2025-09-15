import Navigation from '../components/Navigation';
import Section from '../components/Section';
import WorkMap from '../components/WorkMap';
import SplashScreen from '../components/SplashScreen';
import SocialLinks from '../components/SocialLinks';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Section id="home" className="hero">
          <SplashScreen />
        </Section>

        <Section id="about" className="about">
          <h2>About Me</h2>
          <p>A dynamic software engineer with experience in web development and back-end systems, skilled in a range of technologies such as Express, React, Node.js, MSSQL and PostgreSQL. Possesses a strong foundation in creating and managing websites, implementing order management systems, and ensuring seamless integration of front-end and back-end components.</p>
          <WorkMap />
        </Section>

        <Section id="projects" className="projects">
          <h2>My Projects</h2>
          <p>Explore my portfolio of web applications and development projects.</p>
          <Projects />
        </Section>

        <Section id="contact" className="contact">
          <h2>Connect With Me</h2>
          <p>Let's connect and stay in touch! Follow me on social media.</p>
          <SocialLinks />
        </Section>
      </main>
    </div>
  );
}
