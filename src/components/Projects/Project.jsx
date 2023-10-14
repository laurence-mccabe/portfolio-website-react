import './Project.css'
import ProjectList from './ProjectList'
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

const Project = () => {
  const data = [
    {
      name: 'The Retreat Lodge ',
      des: 'A website to manage bookings for a lodge in the Mountains. Built using React, Supabase (with React Query) and Styled Components. This is the largest project I have built so far in React.',
      projectlink: 'https://react-retreat-lodge.netlify.app/dashboard',
      techused: [
        {
          techname: 'React',
        },
        {
          techname: 'Javascript',
        },
        {
          techname: 'Supabase',
        },
        {
          techname: 'Styled Components',
        },
      ],
    },
    {
      name: 'Places Visited',
      des: "A website to manage places a user has visited. Utilises several map related API's (Leaflet, GeoLocation) to allow a user to interact with a map, recording cities with notes about each of them. Hit the 'Start Tracking Now' button and log straight in to try it out.",
      projectlink: 'https://places-visited.netlify.app',
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
      name: 'React-Pizza',
      des: 'I built this project to learn React. It is a simple pizza ordering website. It uses React Router to navigate between pages and React Query to fetch data from a fake API. It also uses Styled Components for styling.',
      projectlink: 'https://react-pizza2.netlify.app/',
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
      name: "C# Projects: 'The Bug Tracker'.",
      des: 'Click on the Demo button below to see the projects (in the projects section) I have built out in C# and MVC. The Bug Tracker is a project management tool that allows users to create projects, add developers to projects, and create tickets for bugs that need to be fixed. The Bug Tracker also allows users to assign tickets to developers and track the progress of the ticket.',
      projectlink: 'https://react-pizza2.netlify.app/',
      techused: [
        {
          techname: 'C#',
        },
        {
          techname: 'MVC',
        },
        {
          techname: 'ASP.NET',
        },
        {
          techname: 'Identity Framework',
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
