import './NavbarMobileView.css'
import {GiHamburgerMenu} from 'react-icons/gi'

const NavbarMobileView = () => {
  return (
    <div className='container-fluid mobile-view-navbar' >NavbarMobileView
        <div className='navbar-header'>
            <p><GiHamburgerMenu /></p>
        </div>
    </div>
  )
}

export default NavbarMobileView