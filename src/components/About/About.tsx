import "./About.css"
import SkillsLogo from "./SkillsLogo"

const About = () => {
  return (
    <>
        <section id="about">
          <h1 className="about-h1">About</h1>
          <div className="about-text">
            <p>Hi, I'm Rudra Patel - a passionate college student on a mission 
              to becomea full-stack web developer. 
              Currently learning ReactJS, NodeJS, and everything in between.
            </p>
          </div>
          <div className="about-skills">
            <h1 className="skills-h1">Skills</h1>
            <div className="skills-icons">
              {SkillsLogo.map((items) => {
                return (
                  <img key={items.id} 
                       src={items.src}
                       alt={items.alt}></img>
                );
              })}
            </div>
          </div>
        </section>
    </>
  )
}

export default About