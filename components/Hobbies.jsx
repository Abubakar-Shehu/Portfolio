export default function Hobbies() {
  const games = [
    {
      name: 'EA Sports FC',
      note: 'Career mode, Ultimate Team, and matchday sessions when City are kicking off.',
      tag: 'Football'
    },
    {
      name: 'Call of Duty',
      note: 'Competitive matches with friends after a long coding stretch.',
      tag: 'FPS'
    },
    {
      name: 'Rocket League',
      note: 'Quick games when I want something chaotic and fun between commits.',
      tag: 'Arcade'
    }
  ];

  return (
    <div className="hobbies-container">
      <div className="hobby-block football-block">
        <div className="hobby-copy">
          <p className="hobby-kicker">Favourite football team</p>
          <h3>Manchester City</h3>
          <p>
            Sky blue through and through. I follow the Premier League closely —
            enough that I even built my own season stats dashboard for fun.
          </p>
          <ul className="hobby-highlights">
            <li>Premier League obsessive</li>
            <li>Matchday rituals &amp; late kick-offs</li>
            <li>Built Prem Stats to track the season</li>
          </ul>
        </div>
        <figure className="hobby-photo">
          <img
            src="/personal-pics/travel/IMG_2318.jpg"
            alt="Abubakar wearing a Manchester City jersey at a mountain lake"
          />
          <figcaption>Representing City on the road</figcaption>
        </figure>
      </div>

      <div className="games-block">
        <div className="games-intro">
          <p className="hobby-kicker">Favourite games</p>
          <h3>What I play when I&apos;m offline</h3>
          <p>Football sims, competitive shooters, and anything that feels like a good reset.</p>
        </div>
        <div className="games-grid">
          {games.map((game) => (
            <article key={game.name} className="game-card">
              <span className="game-tag">{game.tag}</span>
              <h4>{game.name}</h4>
              <p>{game.note}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
