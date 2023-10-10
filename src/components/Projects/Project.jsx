import './Project.css'
import ProjectList from './ProjectList'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

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
    <Fade left>
    <div className="container project-section">
      <div className="section-title projects">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row project-row">
        {data.map((item, index) => (
          <div className="col-12" key={index}>
             <Zoom>
            <ProjectList {...item} />
            </Zoom>
          </div>
        ))}
      </div>
      <div>
       {/* wor */}
      </div>
    </div>
    </Fade>
  )
}

export default Project
