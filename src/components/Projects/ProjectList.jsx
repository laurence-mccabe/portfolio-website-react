import { useState } from 'react'
import './Project.css'
import { FcExpand, FcCollapse } from 'react-icons/fc'
import WorkExperience from '../WorkExperience/WorkExperience'

const ProjectList = ({ name, des, projectlink, techused }) => {
  const [show, setShow] = useState(true)

  const handleShowandCollpase = () => {
    setShow(!show)
  }

  return (
    
    <div className="project-list">
    
      <div className="title-and-collapse-option">
        <h5>{name}</h5>
        <p
          onClick={handleShowandCollpase}
          className="project-list-expand-arrow"
        >
          {!show ? <FcExpand size={20} /> : <FcCollapse size={20} />}
        </p>
      </div>

      
          <div className="row">
          {show && (
        <>
          {/* can use des.substring to limit the number of characters */}
          <p onClick={handleShowandCollpase} className="tech-Paragraph">{des}</p>
        </>
      )}
            {techused.map((tech, index) => (
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}>
                <div className="tech-used-in-project">
                  <p>{tech.techname}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="live-demo-button">
            <a href={projectlink} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
          
    </div>
  )
}

export default ProjectList
