import './About.css'
import profilePic from '../../Image/ProfilePicture.png'
import { Fade } from 'react-awesome-reveal'

const About = () => {
  return (
    <Fade>
      <div className="container about-section mt-2" id="about">
        <div className="row about-row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="about-image">
              <img src={profilePic} alt="Profile Photo" />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="about-details">
              <div className="about-title">
                <h5>About Me</h5>
                <span className="line"></span>
              </div>
              <div className='about-paragraph'>
              <p>
                I enjoy making things that live on the internet, whether that be
                websites, applications, or anything in between. My goal is to
                always build products that provide a great user experience. All
                the code for the projects found below can be found on my
                <a
                  href="https://github.com/Lm768184?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}GitHub 
                </a>
                {' '}page.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default About
