import { useState } from 'react'
import './TechStack.css'
import { Fade } from "react-awesome-reveal";


const TechStack = () => {
  const data = [
    {
      name: 'Full Stack Web Development',
    },
    {
      name: 'HTML',
    },
    {
      name: 'CSS',
    },
    {
      name: 'JavsScript',
    },
    {
      name: 'React',
    },
    {
      name: 'UI/UX Design',
    },
    {
      name: 'Git & GitHub',
    },
    {
      name: "Web API's",
    },
    {
      name: 'React Query',
    },
    {
      name: 'React Router',
    },
    {
      name: 'TailWind CSS',
    },
    {
      name: 'Asp.Net',
    },
    
  ]

  const colors = [
    '#FF0000',
    '#0000FF',
    '#00008B',
    '#ADD8E6',
    '#800080',
    '#FFFF00',
    '#00FF00',
    '#FF00FF',
    '#FF0000',
    '#FFA500',
    '#800000',
    '#008000',
  ]

  const [showMoreTechStack, setShowMoreTechStack] = useState(6)
  const [isActive, setActive] = useState(0)

  const loadMore = () => {
    setShowMoreTechStack((prevValue) => prevValue + 3)
  }

  const loadLess = () => {
    setShowMoreTechStack(6)
  }

  console.log(data.length)
  console.log(showMoreTechStack)

  return (
    <div className="container techstack-section" id="techstack">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>

      <div className="row tech-row">

        {data.slice(0, showMoreTechStack).map((item, index) => {

          return (
            <>

            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={index}>
              <Fade top>

              <div
                className={
                  index === isActive ? 'tech-content tech-content-marked' : ' tech-content'
                }
                onClick={() => setActive(index)}
              >
                <span
                  className="tech-num"
                  style={{ backgroundColor: colors[index] }}
                >
                  {index + 1}
                </span>

                <p className="">{item.name}</p>
              </div>
              </Fade>

            </div>
            </>
          )

        })}
      </div>

      {showMoreTechStack === data.length ? (
        <div>
        <span className="load-more-tech-stack" onClick={loadLess}>
          Show Less
        </span>
        </div>
      ) : (
        <div>
        <span className="load-more-tech-stack" onClick={loadMore}>
          Load More
        </span>
        </div>
      )}
      
    </div>
    
  )
}

export default TechStack
