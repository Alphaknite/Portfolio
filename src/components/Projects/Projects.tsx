import './Projects.css'
import CardInfo from './CardInfo';
import Card from './Card';

const Projects = () => {
  return (
    <>
      <section id="projects">
        <h1 className="projects-h1">Projects</h1>
        <div className="cards-container">
        {CardInfo.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
      </section>
    </>
  )
}

export default Projects