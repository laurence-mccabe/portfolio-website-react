import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import './Education.css'
import { FaGraduationCap } from 'react-icons/fa'
import { Fade } from "react-awesome-reveal";

const Education = () => {
const data =[
    {
        name: 'QUT',
        degree: 'Bachelor of IT (major in computer science)',
        year: '2019-2021',
        description: "never seen before"
    },
    {
        name: 'QUT',
        degree: 'Bachelor of IT (major in computer science)',
        year: '2019-2021',
        description: "never seen before"
    },
    {
        name: 'QUT',
        degree: 'Bachelor of IT (major in computer science)',
        year: '2019-2021',
        description: "never seen before"
    },
]
const colors = [
    '#FF0000',
    '#FFA500',
    '#800000',
    '#008000',
    '#FF0000',
    '#0000FF',
    '#800080',
    '#00008B',
    '#ADD8E6',
    '#FFFF00',
    '#00FF00',
    '#FF00FF',
    
  ]

  return (
    <>
    <Fade direction="right">
    <div className="container education-section" id="education">
      <div className="section-title">
        <h5>Education</h5>
        <span className="line education-line"></span>
      </div>

      <VerticalTimeline lineColor="red">
        {data.map((item, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            key={index}
            contentStyle={{ background: colors[index], color: '#fff' }}
            contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}
            date={item.year}
            dateClassName="date-class"
            iconStyle={{ background: colors[index], color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              {item.name}
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              {item.degree}
            </h5>
            
            <p className="vertical-timeline-element-subtitle mt-1">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
    </Fade>
    </>
  )
}

export default Education
