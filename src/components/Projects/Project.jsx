import WorkExperience from '../WorkExperience/WorkExperience'
import './Project.css'
import ProjectList from './ProjectList'

const Project = () => {
  const data = [
    {
      name: 'Full Stack Web ',
      des: 'I am a Front end Web Developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.',
      projectlink: 'http://jjjjggg.com',
      techused: [
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
      name: 'Full Stack Web',
      des: 'I am a Front end Web Developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.',
      projectlink: 'http://jjjjggg.com',
      techused: [
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
      name: 'Full Stack Web',
      des: 'I am a Front end Web Developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.',
      projectlink: 'http://jjjjggg.com',
      techused: [
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

  return (

    <div className="container">
      <div className="section-title projects">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

<div className="row mt-4">
    {data.map((item, index) => (
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={index}>
            <ProjectList {...item} />
        {/* <div className='project-content' > 
            <div className='project-name'>
                <h5>{item.name}</h5>
            </div>
            <div className='project-des'>
                <p>{item.des}</p>
            </div>
            <div className='project-link'>
                <a href={item.projectlink} target='_blank' rel='noreferrer'>
                    <span className='project-link-text'>Project Link</span>
                </a>
            </div>
            <div className='project-tech'>
                {item.techused.map((tech, index) => (
                    <span className='project-tech-name' key={index}>{tech.techname}{" "}</span>
                ))}
            </div>
        </div> */}
         
    </div>

    ))}
    </div>
    <div><WorkExperience /></div>
    
    </div>
    
  )
}

export default Project
