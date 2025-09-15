export default function SocialLinks() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Abubakar-Shehu',
      icon: '🐙',
      color: '#333'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/Lanre_Abu',
      icon: '🐦',
      color: '#1DA1F2'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lanre.shehu/',
      icon: '📷',
      color: '#E4405F'
    },
    {
      name: 'Email',
      url: 'mailto:Shehu.lanre.a@gmail.com',
      icon: '📧',
      color: '#EA4335'
    }
  ];

  return (
    <div className="social-links-container">
      <div className="social-links-grid">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            style={{ '--social-color': social.color }}
          >
            <span className="social-icon">{social.icon}</span>
            <span className="social-name">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
