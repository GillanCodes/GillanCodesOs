import React from 'react'

export interface ITags {
    name: string
    color: string
}

export interface IProject
{
    id: string
    name: string
    desc: string
    icon: string
    year: number | string
    link?: string | undefined | null
    tags?: ITags[]

}

export default function ProjectCard({data} : {data:IProject}) {
  return (
    <div className='project-card'>
        <div className="project-card-container">
            <div className="project-card-head">
                <img src={data.icon} alt="Icon" className='icon' />
                {data.link ? <a className='project-title clickable' href={data.link} target='_BLANK'>{data.name}</a> : <p className='project-title'>{data.name}</p>}
            </div>
            <div className="project-card-body">
                {data.desc}
            </div>
            <div className="project-card-footer">
                <div className="tags">
                    {data.tags && data.tags.map((tag:ITags) => {
                        return(
                            <p className={`tag ${tag.color}`}>{tag.name}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
