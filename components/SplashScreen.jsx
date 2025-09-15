import React from "react";
import "../styles/SplashScreen.css";

const hobbies = [
  { icon: "🎸", label: "Guitar" },
  { icon: "♟️", label: "Chess" },
  { icon: "🎮", label: "Gaming" },
  { icon: "📚", label: "Reading" },
  { icon: "💻", label: "Coding" },
  { icon: "🎧", label: "Music" }
];

export default function SplashScreen() {
  return (
    <div className="splash-bg">
      {/* Floating Bits & Bobs */}
      {hobbies.map((hobby, idx) => (
        <span
          className={`floating-icon icon-${idx}`}
          key={hobby.label}
          aria-label={hobby.label}
        >
          {hobby.icon}
        </span>
      ))}

      <div className="splash-hero">
        <img
          src="/personal-pics/faces/IMG_0359.jpg"
          alt="Abubakar Shehu"
          className="profile-img"
        />
        <h1>HELLO, I'M ABUBAKAR.</h1>
        <p>WELCOME TO MY DIGITAL<br/>SPACE.</p>
        <p>EXPLORE MY WORLD OF CREATION AND CURIOSITY</p>
        {/* <button className="enter-btn">Enter Portfolio</button> */}
      </div>
    </div>
  );
}
