import heroimg from './hero.jpg';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-image-wrapper">
          <div className="circle-container">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <img src={heroimg} alt="Profile" />
        </div>
        <h1>Naga Sunith Appasani</h1>
        <p className="typewriter-text">
        <Typewriter
            words={[
            'Software Engineer',
            'Cloud Engineer',
            'DevOps Engineer',
            'Salesforce Developer / Salesforce Consultant',
            ]}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
        />
        </p>
        </div>
    </section>
  );
};

export default Hero;
