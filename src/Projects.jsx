const projectsData = [
  {
    year: 'Feb 2025 – Mar 2025',
    title: 'LASSO Regression using Homotopy Method',
    description: [
      'Engineered a LASSO regression model from scratch using Python, SciPy, and NumPy.',
      'Integrated unit testing and reproducibility standards via PyTest and Git workflows.'
    ]
  },
  {
    year: 'Aug 2024 – Dec 2024',
    title: 'AI-Powered Student Task Management Bot',
    description: [
      'Developed a scalable Salesforce + AWS system utilizing NLP for intelligent task handling and recommendation.',
      'Boosted student productivity by 35% through automation and task prioritization.'
    ]
  },
  {
    year: 'Jun 2024 – Aug 2024',
    title: 'Amazon Product Review Sentiment System',
    description: [
      'Built a sentiment analysis system for e-commerce review mining using NLP, enhancing product discovery and seller feedback.'
    ]
  },
  {
    year: 'Feb 2024 – May 2024',
    title: 'Dynamic Web Crawler with Flask',
    description: [
      'Developed a real-time keyword search feature across crawled web pages using Flask.',
      'Improved crawl efficiency by 40% with optimized data access and extraction.'
    ]
  },
  {
    year: 'Jan 2023 – Apr 2023',
    title: 'Learning Management System (Salesforce)',
    description: [
      'Automated complex workflows and custom Apex components to streamline academic operations.',
      'Reduced manual efforts by 60% through Salesforce custom solutions.'
    ]
  },
  {
    year: 'Jun 2022 – Jan 2023',
    title: 'CRM with Salesforce Marketing/Sales/Service Cloud',
    description: [
      'Implemented full-scale CRM customizations, automation, and test-driven Apex development.',
      'Achieved 90%+ test coverage and boosted efficiency by 40%.'
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="experience-section">
      <h2>Projects</h2>
      <div className="timeline">
        {projectsData.map((project, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">{project.year}</span>
              <h3>{project.title}</h3>
              {project.description.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
