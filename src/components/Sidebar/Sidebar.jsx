import './Sidebar.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import SidebarList from './SidebarList'
import { useSidebar } from '../Contexts/SidebarContext '

const Sidebar = () => {
  const { expandSidebar, setExpandSidebar } = useSidebar() // Use the context hook

  // Remove the local state and handleExpandClick function

  const handleExpandClick = () => {
    setExpandSidebar(!expandSidebar)
  }

  return (
    <>
      <div className={expandSidebar ? 'sidebar-expand sidebar' : 'sidebar'}>
        <div className="icon-for-sidebar-expand-and-collapse">
          <p onClick={handleExpandClick}>
            {expandSidebar ? (
              <BsChevronLeft size={30} />
            ) : (
              <BsChevronRight size={30} />
            )}
          </p>
        </div>
        <SidebarList expandSidebar={expandSidebar} />
      </div>

      <div
        className={
          expandSidebar
            ? 'container-fluid container-fluid-reduced'
            : 'container-fluid '
        }
      ></div>
    </>
  )
}

export default Sidebar
