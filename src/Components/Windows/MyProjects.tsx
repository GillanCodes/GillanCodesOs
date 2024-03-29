import React from 'react'
import { WindowOptions } from '../Window'
import ProjectCard from '../Parts/ProjectCard'

export const MpOp:WindowOptions = {
    height: 500,
    width: 800,
    maxHeight: 850,
    maxWidth: 1500,
    minHeight: 400,
    minWidth: 400,
    x: 300,
    y: 320
}

export default function MyProjects() {
  return (
    <div className='window-body'>
      <div className="projects-container">
      <h2 className='title'>My Projects</h2>
        <div className="projects">
          <div className="cards">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  )
}
