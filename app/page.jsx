import Navigation from '../components/Navigation';
import Section from '../components/Section';
import WorkMap from '../components/WorkMap';
import SplashScreen from '../components/SplashScreen';
import SocialLinks from '../components/SocialLinks';
import Projects from '../components/Projects';
import Hobbies from '../components/Hobbies';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Section id="home" className="hero">
          <SplashScreen />
        </Section>

        <Section id="journey" className="journey">
          <h2>My Journey</h2>
          <p>
            Places, roles, and seasons that shaped how I work — from accounting
            roots to software engineering across continents.
          </p>
          <WorkMap />
        </Section>

        <Section id="hobbies" className="hobbies">
          <h2>Hobbies</h2>
          <p>Football on the weekends, games when I need a reset, curiosity always on.</p>
          <Hobbies />
        </Section>

        <Section id="gallery" className="gallery">
          <h2>Favourites</h2>
          <p>A few frames from travels and everyday life that I keep coming back to.</p>
          <Gallery />
        </Section>

        <Section id="projects" className="projects">
          <h2>My Projects</h2>
          <p>Explore my portfolio of web applications and development projects.</p>
          <Projects />
        </Section>

        <Section id="contact" className="contact">
          <h2>Connect With Me</h2>
          <p>Let&apos;s connect and stay in touch! Follow me on social media.</p>
          <SocialLinks />
        </Section>
      </main>
    </div>
  );
}
