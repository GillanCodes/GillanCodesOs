import React from 'react'
import { WindowOptions } from '../Window'
import ProjectCard, { IProject } from '../Parts/ProjectCard'

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

const data:IProject = {
  id: "test",
  desc: "This a a test",
  icon: "https://cdn.buymeacoffee.com/uploads/profile_pictures/2023/11/uiAClRMyEt5sAt2e.png@300w_0e.webp",
  name: "Test",
  year: "2028",
  tags: [
    {
      'name': "test",
      "color" : "red",
    },
    {
      'name': "test2",
      "color": "yellow"
    }
  ]
}

const data1:IProject = {
  id: "test",
  desc: "This a a test",
  icon: "https://cdn.buymeacoffee.com/uploads/profile_pictures/2023/11/uiAClRMyEt5sAt2e.png@300w_0e.webp",
  name: "Test",
  link: "http://google.com/",
  year: "2028",
  tags: [
      {
        'name': "test",
        "color" : "purple",
      },
      {
        'name': "test2",
        "color": "green"
      },
      {
        "name": "test3",
        'color': "blue"
      }
  ]
}

export default function MyProjects() {
  return (
    <div className='window-body'>
      <div className="projects-container">
      <h2 className='title'>My Projects</h2>
        <div className="projects">
          <div className="cards">
            <ProjectCard data={data} />
            <ProjectCard data={data1} />
            <ProjectCard data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}
