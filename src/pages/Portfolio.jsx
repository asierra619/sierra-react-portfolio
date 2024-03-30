import React from "react";
import reactLogo from '../assets/react.svg'
import ProjectCard from "../components/ProjectCard";
import FlowerMoonTea from '../assets/flower-moon-tea.png';
import Chowtube from '../assets/chowtube.png';
import TimeForcePizzeria from '../assets/time-force-pizzeria.png';
import BackendEcomm from '../assets/back-end-ecomm.png';
import WorkdayScheduler from '../assets/workday-scheduler.png';
import SocialNetworkAPI from '../assets/social-network-api.png';
export default function Portfolio() {
  const projects = [
    {
      //title, image, link to deployed, link to git
      title: 'Flower Moon Tea',
      description: 'descrip',
      image: FlowerMoonTea,
      repoLink: '',
      deployedLink: '',
    },
    {
      //title, image, link to deployed, link to git
      title: 'Chowtube',
      description: 'descrip',
      image: Chowtube,
      repoLink: '',
      deployedLink: '',
    },
    {
      //title, image, link to deployed, link to git
      title: 'Time Force Pizza',
      description: 'descrip',
      image: TimeForcePizzeria,
      repoLink: '',
      deployedLink: '',
    },
    {
      //title, image, link to deployed, link to git
      title: 'Back-End Ecomm',
      description: 'descrip',
      image: BackendEcomm,
      repoLink: '',
      deployedLink: '',
    },
    {
      //title, image, link to deployed, link to git
      title: 'Social Network API',
      description: 'descrip',
      image: SocialNetworkAPI,
      repoLink: '',
      deployedLink: '',
    },
    {
      //title, image, link to deployed, link to git
      title: 'Workday Scheduler',
      description: 'descrip',
      image: WorkdayScheduler,
      repoLink: '',
      deployedLink: '',
    }
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