import { useState } from 'react'
import './Project.css'
import { FcExpand, FcCollapse } from 'react-icons/fc'

const ProjectList = ({ name, des, projectlink, techused }) => {
  const [show, setShow] = useState(true)

  const handleShowandCollpase = () => {
    setShow(!show)
  }

  const colors = [
    '#FFA500',
    '#008000',
    '#800080',
    '#ADD8E6',
    '#FFFF00',
    '#00FF00',
    '#FF0000',
    '#FFA500',
  ]

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
            <p className="tech-Paragraph">
              {des}
            </p>
          </>
        )}
        <div className="row live-demo-button-row">
          <div className="live-demo-button">
            <a href={projectlink} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        </div>
        

        {techused.map((tech, index) => (
          <div className="col-xl-3 col-lg- col-md-6 col-sm-12" key={index}>
            <div className="tech-used-in-project">
              <p style={{ backgroundColor: colors[index] }}>{tech.techname}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
