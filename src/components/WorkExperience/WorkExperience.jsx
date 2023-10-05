import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './WorkExperience.css'
import { FcCollapse } from 'react-icons/fc'
import Education from '../Education/Education'

const WorkExperience = () => {
  const data = [
    {
      companyname: 'Full Stack Web ',
      position: 'Front end Web Developer',
      description:
        'I am a Front end Web Developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.',
      year: '2023',
      techSkills: [
        {
          techname: 'Node Js',
        },
        {
          techname: 'Express Js',
        },
        {
          techname: 'css Js',
        },
        {
          techname: 'html Js',
        },
      ],
    },
    {
      companyname: 'Full Stack Web ',
      position: 'Front end Web Developer',
      description:
        'I am a Front end Web Developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.',
      year: '2020 - 2021',

      techSkills: [
        {
          techname: 'Node Js',
        },
        {
          techname: 'Express Js',
        },
        {
          techname: 'css Js',
        },
        {
          techname: 'html Js',
        },
      ],
    },
    {
      companyname: 'Full Stack Web ',
      position: 'Front end Web Developer',
      description:
        'I am a Front end Web Developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.',
      year: '2024',

      techSkills: [
        {
          techname: 'Node Js',
        },
        {
          techname: 'Express Js',
        },
        {
          techname: 'css Js',
        },
        {
          techname: 'html Js',
        },
      ],
    },
  ]
  const colors = [
    '#FF0000',
    '#0000FF',
    '#800080',
    '#00008B',
    '#ADD8E6',
    '#FFFF00',
    '#00FF00',
    '#FF00FF',
    '#FF0000',
    '#FFA500',
    '#800000',
    '#008000',
  ]

  return (
    <div className="container workExperience" id="work-experience">
      <div className="section-title">
        <h5>Work Experience</h5>
        <span className="line work-experience-line"></span>
      </div>

      <VerticalTimeline lineColor="red" style={{
          zIndex: "-1000",
        }}>
        {data.map((item, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            key={index}
            contentStyle={{ background: colors[index], color: '#fff' }}
            contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}
            date={item.year}
            dateClassName="date-class"
            iconStyle={{ background: colors[index], color: '#fff' }}
            icon={<FcCollapse />}
          >
            <h3 className="vertical-timeline-element-title">
              {item.companyname}
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              {item.position}
            </h5>
            <p>
              <div className="row">
                {item.techSkills.map((tech, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-3 col-sm-6"
                    key={index}
                  >
                    <div className="tech-skills ">
                      <p>{tech.techname}</p>
                    </div>
                  </div>
                ))}
              </div>
            </p>
            <p className="vertical-timeline-element-subtitle mt-1">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <Education />
    </div>
  )
}

export default WorkExperience
