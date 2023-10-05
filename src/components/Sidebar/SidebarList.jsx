import profilePic from '../../Image/cat.avif'
import './SidebarList.css'
import {
  FcHome,
  FcNightPortrait,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
} from 'react-icons/fc'
import { MdCastForEducation, MdBiotech } from 'react-icons/md'
import { Link } from 'react-scroll'
// 12:30
import { useState } from 'react'

const SidebarList = ({ expandSidebar }) => {

  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  const linkData = [
    { id: 'home', text: 'Home', icon: <FcHome size={25} /> },
    { id: 'about', text: 'About', icon: <FcNightPortrait size={25} /> },
    { id: 'techstack', text: 'Tech Stack', icon: <MdBiotech size={25} /> },
    { id: 'projects', text: 'Projects', icon: <FcTodoList size={25} /> },
    { id: 'work-experience', text: 'Work Experience', icon: <FcFactory size={25} color="yellow" /> },
    { id: 'education', text: 'Education', icon: <MdCastForEducation size={25} /> },
    { id: 'testimonial', text: 'Testimonial', icon: <FcSalesPerformance size={25} /> },
    { id: 'contact', text: 'Contact', icon: <FcContacts size={25} /> },
  ];
  
  return (
    <>
      {expandSidebar  ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilePic} alt="profile-pic" />
          </div>
          <ul>
        {linkData.map(({ id, text, icon }) => (
          <li className="nav-item" key={id}>
            <Link
              to={id}
              smooth={true}
              duration={100}
              className={activeLink === id ? 'active' : ''}
              onClick={() => handleLinkClick(id)}
            >
              {icon} {text}
            </Link>
          </li>
        ))}
      </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons navbar-items">
           <ul>
        {linkData.map(({ id, icon }) => (
          <li className="nav-item" key={id}>
            <Link
              to={id}
              smooth={true}
              duration={100}
              className={activeLink === id ? 'active' : ''}
              onClick={() => handleLinkClick(id)}
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
        </div>
      )}
    </>
  )
}

export default SidebarList
