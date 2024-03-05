import React, { useState } from 'react'

export type TDI = {
  title:string,
  icon:string,
  id:string
}

export default function DesktopIcon({options, focused, setFocused}: {options:TDI, focused:any, setFocused:any}) {

  return (
    <div className={`desktop-icon ${focused == options.id ? "focused" : ""}`} draggable="true" onClick={() => setFocused(options.id)}>
        <img src={options.icon} alt="d-icon" className='d-icon' />
        <p className="title">{options.title}</p>
    </div>
  )
}
