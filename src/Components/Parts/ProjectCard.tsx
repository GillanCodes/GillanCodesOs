import React from 'react'

export interface IProject
{
    id: string
    name: string
    desc: string
    icon: string
    year: number | string
    link: string

}

export default function ProjectCard({}) {
  return (
    <div className='project-card'>
        <div className="project-card-container">
            <div className="project-card-head">

            </div>
            <div className="project-card-body">

            </div>
            <div className="project-card-footer">
                
            </div>
        </div>
    </div>
  )
}
