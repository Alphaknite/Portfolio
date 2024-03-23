import SocialItems from './SocialItems.ts';
import Pfp from '/Pfp2.png'
import "./Hero.css"

const Hero = () => {

  return (
    <>
      <section id="main">
        <div className='pfp-container'>
          <img className='pfp-img' src={Pfp} alt="Profile Picture" />
        </div>  

        <div className="hero-text"> 
          <p>Hello, I'm&nbsp;<span style={{ color: '#BFFF00' }}>Rudra Patel</span></p>
          <p>I am passionate about web development and currently learning ReactJS and NextJS with Typescript</p>
        </div> 
        <div className='socials'>
          {SocialItems.map((item, index) => {
            return (
              <a key={index} target={item.tar} href={item.url} className={item.cName}>
                <img src={item.src} alt=''/>
              </a>
            );
          })}
        </div>
      </section>
     </>
  )
}

export default Hero