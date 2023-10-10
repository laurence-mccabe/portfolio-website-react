import './About.css'
import profilePic from '../../Image/cat2.jpg'
import Fade from 'react-reveal/Fade';


const About = () => {
  return (
    <Fade>
    <div className="container about-section mt-2" id="about">
      
      <div className="row about-row">

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div className="about-image">
            <img src={profilePic} alt="Profile Photo"/>
        </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>About Me</h5>
              <span className="line"></span>
            </div>
            <p>
              I am a Front end Web Developer. I can provide clean code and pixel perfect design. 
              I also make website more & more interactive with web animations.
              I am a Front end Web Developer. I can provide clean code and pixel perfect design. 
              I also make website more & more interactive with web animations.
            </p>
          </div>
        </div>

      </div>

    </div>
    </Fade>
  )
}

export default About
