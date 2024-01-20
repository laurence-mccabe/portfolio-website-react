import { useState } from 'react'
import './NavbarMobileView.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavMobSideList from './NavMobSideList'

const NavbarMobileView = () => {
  const [expandMobileSidebar, setExpandMobileSidebar] = useState(false)

  return (
    <div className="mobile-view-navbar">
      <p onClick={() => setExpandMobileSidebar(!expandMobileSidebar)}>
        {' '}
        <GiHamburgerMenu size={25} />{' '}
      </p>

      <NavMobSideList expandMobileSidebar={expandMobileSidebar} />
    </div>
  )
}

export default NavbarMobileView
