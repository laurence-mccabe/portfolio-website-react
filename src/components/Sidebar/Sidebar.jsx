import './Sidebar.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import SidebarList from './SidebarList'
import { useSidebar } from '../Contexts/SidebarContext '

const Sidebar = () => {
  const { expandSidebar, setExpandSidebar } = useSidebar()

  return (
    <>
      <div className={expandSidebar ? 'sidebar-expand sidebar' : 'sidebar'}>
        <div className="icon-for-sidebar-expand-and-collapse">
          <p onClick={() => setExpandSidebar(!expandSidebar)}>
            {expandSidebar ? (
              <BsChevronLeft size={30} />
            ) : (
              <BsChevronRight size={30} />
            )}
          </p>
        </div>
        <SidebarList expandSidebar={expandSidebar} />
      </div>

      <div className={expandSidebar ? 'sidebar-width-increase' : ''}></div>
    </>
  )
}

export default Sidebar
