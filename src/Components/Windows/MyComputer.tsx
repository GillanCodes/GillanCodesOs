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

export default function MyComputer() {
  return (
    <div className='window-body'>
        <menu role='tablist'>
            <li role='tab'><a href='#'>General</a></li>
            <li role='tab'><a href='#'>Devices</a></li>
            <li role='tab'><a href='#'>Hardware</a></li>
        </menu>
        <div className="window" role='tabpanel'>
            <div className="window-body">
                <p>{age}</p>
            </div>
        </div>
    </div>
  )
}
