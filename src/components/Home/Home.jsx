import { useDarkMode } from '../Contexts/DarkModeProvider'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'
import './Home.css'

import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'

const Home = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <>
      <div className="container-fluid home " id="home">
        <div className="theme-change" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <HiOutlineMoon size={35} className="dark-mode-icon" />
          ) : (
            <HiOutlineSun size={35} className="light-mode-icon" />
          )}
        </div>

        <div className="container home-content">
          <h1>Hi, I'm Laurence McCabe</h1>

          <h3 className="typewriter">
            <Typewriter
              options={{
                strings: ['A front end', 'Web developer'],
                autoStart: true,
                loop: false,
                delay: 5,
              }}
            />
          </h3>

          <div className="button-for-action">
            <Link to="contact" smooth={true} duration={100}>
              <div className="hire-me-button">Hire Me</div>
            </Link>
            <Link to="contact" smooth={true} duration={100}>
              <div className="get-resume-button">Get Resume</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
