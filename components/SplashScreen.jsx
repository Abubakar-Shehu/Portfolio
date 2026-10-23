import React from "react";
import "../styles/SplashScreen.css";

export default function SplashScreen() {
  return (
    <div className="splash-bg">
      <div className="splash-hero about-hero">
        <img
          src="/personal-pics/travel/IMG_2318.jpg"
          alt="Abubakar Shehu in a Manchester City jersey"
          className="profile-img"
        />
        <p className="hero-eyebrow">Software Engineer</p>
        <h1>Abubakar Shehu</h1>
        <p className="hero-brief">
          I build web apps and back-end systems with React, Node.js, Express,
          and PostgreSQL — and I bring a bit of accounting grit to everything I ship.
        </p>
        <p className="hero-brief secondary">
          From Lagos to Nottingham, Leeds, and Edmonton — always learning, building, and exploring.
        </p>
      </div>
    </div>
  );
}
