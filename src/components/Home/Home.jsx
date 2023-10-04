import './Home.css'

import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <>
      <div className="container-fluid home" id='home'>
        <div className="container home-content">
          <h1>Hi, I am a ...</h1>
          <h3 className="typewriter">
            <Typewriter
              options={{
                strings: ['Front end', 'Web developer'],
                autoStart: true,
                loop: false,
                delay: 5,
              }}
            />
          </h3>

          <div className="button-for-action">
            <div className="hire-me-button">Hire Me</div>

            <div className="get-resume-button">Get Resume</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
