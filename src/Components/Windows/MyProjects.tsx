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

const sg:IProject = {
  id: "sg",
  name: "Stardew Generator",
  desc: "A small website that generates \"Stardew Valley\" player name, farm's name and favorite thing !",
  icon: "sg.png",
  year: "2024",
  tags: [
    {
      'name': "NextJs",
      "color" : "purple",
    },
    {
      'name': "Typescript",
      "color": "blue"
    }
  ]
}

const RTB:IProject = {
  id: "RTB",
  name: "Rev'TonBac",
  desc: "A site and an application that helps students in thier daily lives, with the possibility of creating revision sheets or quizzes. The main purpose is to reduce exam stress.",
  icon: "rtb.png",
  year: "2020 - 2022",
  tags: [
    {
      'name': "Typescript",
      "color" : "blue",
    },
    {
      'name': "ReactJs",
      "color": "purple"
    },
    {
      "name": "MongoDB",
      "color" : "green"
    }
  ]
}

const waldes:IProject = {
  id: "Waldes",
  name: "Wokipédia",
  desc: "Volunteer developper for a GTARP server called \"GLife\". Waldes is a discord bot with the aim of taking request for help / business and recruitment.",
  icon: "waldes.png",
  year: "2020",
  tags: [
    {
      'name': "Typescript",
      "color" : "blue",
    },
    {
      'name': "NodeJS",
      "color": "green"
    }
  ]
}

const docs:IProject = {
  id: "docs",
  name: "Docs Maker",
  desc: "A tool for developpers that you can self-host. The site allows you to create documentation for your APIs / Application to avoid wasting time.",
  icon: "",
  year: "2019",
  tags: [
    {
      'name': "Typescript",
      "color" : "blue",
    },
    {
      "name": 'ExpressJS',
      "color": "yellow"
    },
    {
      "name": "MongoDB",
      "color": "green"
    }
  ]
}


const wokipedia:IProject = {
  id: "wokipedia",
  name: "Wokipédia",
  desc: "Discord bot which integrates moderation tools: Logs Channel / Management of Bans & Kicks with the possibility of mentioning a reason / etc ... But also a way to manage this community thanks to the website",
  icon: "wokipedia.png",
  year: "2017",
  tags: [
    {
      'name': "Javascript",
      "color" : "yellow",
    },
    {
      'name': "NodeJS",
      "color": "green"
    },
    {
      "name": "expressJs",
      "color": "yellow"
    }
  ]
}


const arkasia:IProject = {
  id: "arksia",
  name: "Arkasia",
  desc: "I started out in programming and became a JAVA developer on a volunteer basis on a Minecraft server.",
  icon: "arkasia.png",
  year: "2016",
  tags: [
    {
      'name': "Java",
      "color" : "red",
    },
    {
      'name': "Graddle",
      "color": "green"
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
            <ProjectCard data={sg} />
            <ProjectCard data={RTB} />
            <ProjectCard data={waldes} />
            <ProjectCard data={docs} />
            <ProjectCard data={wokipedia} />
            <ProjectCard data={arkasia} />
          </div>
        </div>
      </div>
    </div>
  )
}
