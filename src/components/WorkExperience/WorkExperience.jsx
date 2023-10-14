import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './WorkExperience.css'
import { FcCollapse } from 'react-icons/fc'
import { Fade } from "react-awesome-reveal";

const WorkExperience = () => {
  const data = [
    {
      companyname: 'General Assembly ',
      position: 'React Js Developer',
      description:
        "A 3 month part time course that teaches the fundamentals of React Js. Using web APi's, 3 projects were built, the biggest is the Places Visited app found above in the projects section.",
      year: '2023',
      link: 'https://generalassemb.ly/education/react-development/sydney', // Add the link here
      linkText: "React Course",

      techSkills: [
        {
          techname: 'React',
        },
        {
          techname: 'Javascript',
        },
        {
          techname: 'Tailwind CSS',
        },
        {
          techname: 'Git',
        },
      ],

    },
    {
      companyname: 'Coder Foundry ',
      position: 'Full Stack WebDev (ASP.NET)',
      description:
        'A full stack course teaching web development using a Microsoft stack: C#, MVC, ASP.Net and Bootstrap', 
      year: '2022',
      link: "https://learn.coderfoundry.com/dotnet6_with_MVC",
      linkText: "Coder Foundry Course",
      link2:"https://portfolio2121.netlify.app/#contact",
      link2Text: "Projects Built",

      techSkills: [
        {
          techname: 'C#',
        },
        {
          techname: 'Asp.Net',
        },
        {
          techname: 'MVC',
        },
        {
          techname: 'Postgres',
        },
      ],
    },
    {
      companyname: 'Bachelor in IT ',
      position: 'QUT',
      description:
        'I completed a Bachelor of IT through Queensland University of Technology in 2016 with a major in computer science. In groups using scrum methodology we built out some games, and a patient tracking application.',
      year: '2017',

      techSkills: [
        {
          techname: 'Javascript',
        },
        {
          techname: 'Python',
        },
        {
          techname: 'C#',
        },
        {
          techname: 'HTML & CSS',
        },
      ],
    },
  ]
  const colors = [
    '#FF0000',
    '#179e17',
    '#800080',
    '#00008B',
    '#ADD8E6',
    '#FFFF00',
    '#FF00FF',
    '#FF0000',
    '#FFA500',
    '#800000',
    '#008000',
  ]

  return (
    <Fade direction="left">
    <div className="container work-experience-section" id="work-experience">
      <div className="section-title">
        <h5>Experience / Education</h5>
        <span className="line work-experience-line"></span>
      </div>

      <VerticalTimeline lineColor="red" style={{
          zIndex: "-1000",
        }}>
        {data.map((item, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element"
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
            <p className="vertical-timeline-element-description mt-1">
              {item.description} {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkText}</a> : null}
              {item.link2 ? <a href={item.link2} target="_blank" rel="noopener noreferrer">{", "}{item.link2Text}</a> : null}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      {/* edu */}
    </div>
     </Fade>
  )
}

export default WorkExperience
