import React, { useState } from 'react'

export type TDI = {
  title:string,
  icon:string,
  id:string
}

export default function DesktopIcon({options}: {options:TDI}) {

  const [focused, setFocused] = useState(false);

  const test = (e:any) => {
   
    console.log(e)

    // const els = document.getElementsByClassName('focused');
    // for (let index = 0; index < els.length; index++) {
    //   els[index].classList.remove('focused');
    //   if (focused) setFocused(false);
    // }
    
    
    // if (!focused) setFocused(true)
    
    // console.log(focused)
  }

  return (
    <div className={`desktop-icon ${focused ? "focused" : ""}`} draggable="true" id={options.id}>
        <img src={options.icon} alt="d-icon" className='d-icon' />
        <p className="title">{options.title}</p>
    </div>
  )
}
