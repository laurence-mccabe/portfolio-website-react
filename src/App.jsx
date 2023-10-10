import Sidebar from './components/Sidebar/Sidebar'
import About from './components/About/About'
import TechStack from './components/TechStack/TechStack'
import ScrollToTop from 'react-scroll-to-top'
import './App.css'
import NavbarMobileView from './components/Sidebar/NavbarMobileView'
import { FaArrowUpLong } from 'react-icons/fa6'
import { DarkModeProvider } from './components/Contexts/DarkModeProvider'
import Home from './components/Home/Home'
import { SidebarProvider } from './components/Contexts/SidebarContext '
import Contact from './components/Contact/Contact'
import Project from './components/Projects/Project'
import WorkExperience from './components/WorkExperience/WorkExperience'
import Education from './components/Education/Education'
import Testimonial from './components/Testimonial/Testimonial'

const App = () => {

  return (
    <>
        <SidebarProvider>
        <DarkModeProvider>
        {/* <div id={theme}> </div> */}
        
        <Sidebar />
        <Home />
        <NavbarMobileView />
        <About />
        <TechStack />
        <Project />
        <WorkExperience />
        <Education  />
        <Testimonial  />
        <Contact />
        <ScrollToTop
          style={{
            backgroundColor: 'red',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center', // Center vertically
            justifyContent: 'center', // Center horizontally
          }}
          top={500}
          component={<FaArrowUpLong size={30} color="white" />}
          smooth
          color="white"
        ></ScrollToTop>
        
      </DarkModeProvider>
      </SidebarProvider>
    </>
  )
}

export default App
