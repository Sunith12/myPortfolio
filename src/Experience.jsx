const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-year">2022 – 2023</span>
            <h3>Software Engineer Intern</h3>
            <p><strong>Digital Lync Technologies, Hyderabad, India</strong></p>
            <p>
              Developed and optimized Salesforce Cloud solutions, improving customer engagement by 20% and data retrieval by 30%.<br />
              Implemented CI/CD pipelines and Agile methodologies (Kanban, Sprint Reviews), reducing deployment lead time by 25% and increasing sprint throughput by 15%.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-year">2020</span>
            <h3>Summer Intern</h3>
            <p><strong>Indian Servers, Vijayawada, India</strong></p>
            <p>
              Collaborated on web application security assessments by identifying vulnerabilities and contributing to weekly security reports and mitigation strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
