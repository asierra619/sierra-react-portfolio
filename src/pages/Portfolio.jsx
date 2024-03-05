import React from "react";
import reactLogo from '../assets/react.svg'
import ProjectCard from "../components/ProjectCard";
export default function Portfolio() {
  const projects = [
    {
      //title, image, link to deployed, link to git
      title: 'title',
      description: 'descrip',
      image: reactLogo,
      repoLink: '',
      deployedLink: '',
    },
    {
      //title, image, link to deployed, link to git
      title: 'title',
      description: 'descrip',
      image: reactLogo,
      repoLink: '',
      deployedLink: '',
    },
  ]
  return (
    <>
    <h1>Portfolio</h1>
    <div className='row'>
    {projects.map(project => (
      <div className='col-sm-12 col-md-6' key={project.title}>
        <ProjectCard title={project.title} description={project.description} image={project.image} repoLink={project.repoLink} deployedLink={project.deployedLink} />
      </div>
    ))}
    </div>
    </>
  )
}

// map through array, create array within export default