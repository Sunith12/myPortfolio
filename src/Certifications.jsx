import salesforceadminIcon from './icons/salesforceadmin.png';
import salesforcePD1Icon from './icons/salesforcepd1.png';

const certificationsData = [
  {
    name: 'Salesforce Administrator',
    image: salesforceadminIcon
  },
  {
    name: 'Salesforce Platform Developer I',
    image: salesforcePD1Icon
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certificationsData.map((cert, index) => (
          <div className="certification-card" key={index}>
            <img src={cert.image} alt={cert.name} />
            <h3>{cert.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
