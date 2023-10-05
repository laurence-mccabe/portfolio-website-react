import './NavMobSideList.css'
import { FcHome, FcNightPortrait, FcTodoList, FcContacts, FcFactory, FcSalesPerformance } from 'react-icons/fc'
import { MdCastForEducation, MdBiotech } from 'react-icons/md'
import { Link } from 'react-scroll'
import { useState } from 'react'

const NavMobSideList = ({ expandMobileSidebar }) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  const linkData = [
    { id: 'home', text: 'Home', icon: <FcHome size={15} /> },
    { id: 'about', text: 'About', icon: <FcNightPortrait size={15} /> },
    { id: 'techstack', text: 'Tech Stack', icon: <MdBiotech size={15} /> },
    { id: 'projects', text: 'Projects', icon: <FcTodoList size={15} /> },
    { id: 'work-experience', text: 'Work Experience', icon: <FcFactory size={15} color="yellow" /> },
    { id: 'education', text: 'Education', icon: <MdCastForEducation size={15} /> },
    { id: 'testimonial', text: 'Testimonial', icon: <FcSalesPerformance size={15} /> },
    { id: 'contact', text: 'Contact', icon: <FcContacts size={15} /> },
  ];

  return (
    <>
      {expandMobileSidebar && (
        <div className="mobile-navbar-items">
          <ul>
            {linkData.map(({ id, text, icon }) => (
              <li className="mobile-nav-item" key={id}>
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
      )}
    </>
  )
}

export default NavMobSideList;
