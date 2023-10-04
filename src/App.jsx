import Sidebar from "./components/Sidebar/Sidebar"
import About from "./components/About/About"
import TechStack from "./components/TechStack/TechStack"
import ScrollToTop from "react-scroll-to-top";
import {FaArrowUpLong} from "react-icons/fa6";
import './App.css'
import NavbarMobileView from "./components/Sidebar/NavbarMobileView";

 const App = () => {
  return (
    <>
      <Sidebar />
      <NavbarMobileView />
      <About />
      <TechStack />
      <ScrollToTop
        style={{
          backgroundColor: "red",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
        }}
        top={500}
        component={
          <FaArrowUpLong
            size={30}
            color="white"
          />
        }
        smooth
        color="white"
      ></ScrollToTop>

    </>
  )
}

export default App