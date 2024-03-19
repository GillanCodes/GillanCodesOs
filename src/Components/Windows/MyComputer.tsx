import React from 'react'
import { WindowOptions } from '../Window'

export const McOp:WindowOptions = {
    height: 500,
    width: 500,
    maxHeight: 600,
    maxWidth: 600,
    minHeight: 400,
    minWidth: 400,
    x: 200,
    y: 50
}

var age = new Date(Date.now()).getFullYear() - 2003;
var progy = new Date(Date.now()).getFullYear() - 2017;

export default function MyComputer() {
  return (
    <div className='window-body' id="mycomputer">
        <menu role='tablist'>
            <li role='tab'><a href='#'>General</a></li>
            <li role='tab'><a href='#'>Devices</a></li>
            <li role='tab'><a href='#'>Hardware</a></li>
        </menu>
        <div className="window" role='tabpanel'>
            <div className="window-body">
                <p className='pres'>Hi ! I am GillanCodes a {age} years old developper !</p>
                <p>I started programming {progy} years ago in Java and shortly after in PHP.</p>
                <p>In 2017 I come upon NodeJs and I discorver some framework like "expressJs" or "socketIO" ...</p>
                <p>Nowadays I work on diffrents type of projects, like WEB, software, games ...</p>
            </div>
        </div>
    </div>
  )
}
