import React from 'react'
import { WindowOptions } from '../Window'

export const MpOp:WindowOptions = {
    height: 500,
    width: 800,
    maxHeight: 850,
    maxWidth: 1500,
    minHeight: 400,
    minWidth: 400,
    x: 100,
    y: 100
}

export default function MyProjects() {
  return (
    <div className='window'>
        Projects
    </div>
  )
}
