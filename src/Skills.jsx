import awsIcon from './icons/aws.png';
import azureIcon from './icons/azure.png';
import dockerIcon from './icons/docker.png';
import excelIcon from './icons/excel.png';
import gitIcon from './icons/git.png';
import gitlabIcon from './icons/gitlab.png';
import javascriptIcon from './icons/javascript.png';
import kubernetesIcon from './icons/kubernetes.png';
import linuxIcon from './icons/linux.png';
import postgresqlIcon from './icons/postgresql.png';
import pythonIcon from './icons/python.png';
import salesforceIcon from './icons/salesforce.png';
import grafanaIcon from './icons/grafana.png';
import terraformIcon from './icons/terraform.png';
import prometheusIcon from './icons/prometheus.png';
import jiraIcon from './icons/jira.png';
import ansibleIcon from './icons/ansible.png';
import numpyIcon from './icons/numpy.png';
import windowsIcon from './icons/windows.png';
import cIcon from './icons/c.png';
import cppIcon from './icons/cpp.png';

const skillsData = [
  { name: 'C', image: cIcon },
  { name: 'C++', image: cppIcon },
  { name: 'Python', image: pythonIcon },
  { name: 'JavaScript', image: javascriptIcon },
  { name: 'NumPy', image: numpyIcon },
  { name: 'PostgreSQL', image: postgresqlIcon },
  { name: 'Git', image: gitIcon },
  { name: 'GitLab', image: gitlabIcon },
  { name: 'Jira', image: jiraIcon },
  { name: 'AWS', image: awsIcon },
  { name: 'Azure', image: azureIcon },
  { name: 'Linux', image: linuxIcon },
  { name: 'Windows', image: windowsIcon },
  { name: 'Kubernetes', image: kubernetesIcon },
  { name: 'Docker', image: dockerIcon },
  { name: 'Terraform', image: terraformIcon },
  { name: 'Prometheus', image: prometheusIcon },
  { name: 'Grafana', image: grafanaIcon },
  { name: 'Ansible', image: ansibleIcon },
  { name: 'Salesforce', image: salesforceIcon },
  { name: 'Excel', image: excelIcon },
];


const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
