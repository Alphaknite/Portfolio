import React from 'react';
import GithubLogo from '/GithubLogo2.png'

interface Project {
    title: string;
    description: string;
    languages: string;
    gitLink: string;
    link:string;
  }

  const Card: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="card">
            <h2 className="card-title">{project.title}</h2>
            <p className="card-description">{project.description}</p>
            <p className="card-languages">Languages: {project.languages}</p>
            <a className="card-link" href={project.gitLink} target="_blank" rel="noopener noreferrer">
                <img src={GithubLogo} alt="GitHub Logo" className="github-logo" />
            </a>
            <a className="projects-link" href={project.link} target="_blank">Link</a>
        </div>
  );
};

export default Card;