import linkedin from './icons/linkedin.png'
import github from './icons/github.png'
import mail from './icons/mail.png'

const socialsData = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sunith-appasani/',
    icon: linkedin
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Sunith12',
    icon: github
  },
  {
    name: 'Email',
    url: 'mailto:sunith.appasani9@outlook.com',
    icon: mail
  }
];

const Socials = () => {
  return (
    <section id="socials" className="socials-section">
      <h2>Connect with me</h2>
      <div className="socials-grid">
        {socialsData.map((social, index) => (
          <a
            href={social.url}
            className="social-item"
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <img
              src={social.icon}
              alt={social.name}
              className={social.name === 'LinkedIn' ? '' : 'invert-icon'}
            />
            <span>{social.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

<a href="/resume.pdf" download className="resume-button">
  <DownloadIcon /> Download Resume
export default Socials;
