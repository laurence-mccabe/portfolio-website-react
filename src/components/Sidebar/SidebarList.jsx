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

import { FiSlack } from 'react-icons/fi'

const SidebarList = ({ expandSidebar }) => {
  return (
    <>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilePic} alt="profile-pic" />
          </div>
          <ul>
            <li className="nav-item">
              {' '}
              <FcHome size={25}  /> Home
            </li>
            <li className="nav-item">
              {' '}
              <FcNightPortrait size={25} /> About
            </li>
            <li className="nav-item me">
              {' '}
              <FcFactory size={25} color='yellow' /> Work Experience
            </li>
            <li className="nav-item">
              {' '}
              <MdBiotech size={25} /> Tech Stack
            </li>
            <li className="nav-item">
              {' '}
              <MdCastForEducation size={25}  /> Education
            </li>
            <li className="nav-item">
              {' '}
              <FcTodoList size={25}  /> Projects
            </li>
            <li className="nav-item">
              {' '}
              <FcSalesPerformance size={25} /> Testimonial
            </li>
            <li className="nav-item">
              {' '}
              <FcContacts size={25} /> Contact
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons navbar-items">
          <ul>
            <li className="nav-item">
              {' '}
              <FcHome size={25} />
            </li>
            <li className="nav-item">
              {' '}
              <FcNightPortrait size={25} />
            </li>
            <li className="nav-item me">
              {' '}
              <FcFactory size={25} />
            </li>
            <li className="nav-item">
              {' '}
              <MdBiotech size={25} />
            </li>
            <li className="nav-item">
              {' '}
              <MdCastForEducation size={25} />
            </li>
            <li className="nav-item">
              {' '}
              <FcTodoList size={25} />
            </li>
            <li className="nav-item">
              {' '}
              <FcSalesPerformance size={25} />
            </li>
            <li className="nav-item">
              {' '}
              <FcContacts size={25} />
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default SidebarList
