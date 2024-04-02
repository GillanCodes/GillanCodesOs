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
  desc: "A small website to generate stardew valley name, farm name and favorite thing !",
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
  desc: "Un site et une application qui aide les étudiant(e)s dans leur quotidient, avec la possiblité de créer des fiches ou quizz de révisions. Le but est de réduire le stress des examens !",
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
  desc: "Developpeur bénévole pour le serveur GTARP \"GLife\". Un bot discord dans le but de prendre des demandes d'aide/commerces/recrutements.",
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
  desc: "Un outils pour les developpeurs que vous pouvez self-host. Ce site permet de créer des documentations de ses APIs / Applications pour éviter de perdre du temps.",
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
  desc: "Bot discord qui intègre des outils de modérations : Channel de Logs / Gestions des Bans & Kicks avec possiblité de mentionné une raison / etc ... Mais également un moyen de gérer ça communauté grace au site web",
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
  desc: "Je fais mes débuts dans la programmation et je deviens de façon bénévol, au sein d'un serveur minecraft, développeur JAVA",
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
