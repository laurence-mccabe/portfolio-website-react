import { useState } from 'react'
import './NavbarMobileView.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavMobSideList from './NavMobSideList'

const NavbarMobileView = () => {
  const [expandMobileSidebar, setExpandMobileSidebar] = useState(false)

  const handleExpandClick = () => {
    setExpandMobileSidebar(!expandMobileSidebar)
  }

  return (
     
      <div
        className={
          expandMobileSidebar
            ? 'container-fluid mobile-view-navbar'
            : 'container-fluid mobile-view-navbar mobile-sidebar-expand' 
        }
      >  
          <p onClick={handleExpandClick}>
          {expandMobileSidebar ? (
              <GiHamburgerMenu size={25} />
            ) : (
              <GiHamburgerMenu size={25} />
            )}
          </p>
         
        <NavMobSideList expandMobileSidebar={expandMobileSidebar} />

      </div>
  )
}

export default NavbarMobileView
