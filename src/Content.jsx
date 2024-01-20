import About from './components/About/About'
import TechStack from './components/TechStack/TechStack'
import ScrollToTop from 'react-scroll-to-top'
import NavbarMobileView from './components/Sidebar/NavbarMobileView'
import { FaArrowUpLong } from 'react-icons/fa6'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Project from './components/Projects/Project'
import WorkExperience from './components/WorkExperience/WorkExperience'
import { useSidebar } from './components/Contexts/SidebarContext '
import './Content.css'

const Content = () => {
    const { expandSidebar } = useSidebar();
  
    return (
      <>
            <div className={expandSidebar ? 'increase-margin main-content-container' : 'normal-margin main-content-container'}>
              {/* ... */}
              <Home />
              <NavbarMobileView />
              <About />
              <TechStack />
              <Project />
              <WorkExperience />
              <Contact />
              <ScrollToTop
                style={{
                  backgroundColor: 'red',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center', 
                  justifyContent: 'center', 
                }}
                top={500}
                component={<FaArrowUpLong size={30} color="white" />}
                smooth
                color="white"
              ></ScrollToTop>
            </div>
      </>
    )
  }

  export default Content