import React, { ReactNode, useState } from 'react'
import { Rnd } from 'react-rnd'

import '98.css';

export type WindowOptions = {
    x:number
    y:number
    height: number,
    width: number,
    maxHeight: number,
    minHeight: number,
    maxWidth: number,
    minWidth:number
    
}

export default function Window({child, wOptions, id, handleWindows}: {child:ReactNode, wOptions:WindowOptions, id:string, handleWindows:any }) {
    
    const [focus, setFocus] = useState<boolean>(false);

    return (
    <Rnd
        bounds="window"
        maxHeight={wOptions.maxHeight}
        maxWidth={wOptions.maxWidth}
        minHeight={wOptions.minHeight}
        minWidth={wOptions.minWidth}
        default={{
            width: wOptions.width,
            height: wOptions.height,
            x: wOptions.x,
            y: wOptions.y
        }}
        
    >
        <div className='window window-container' onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)}>
            <div className={`title-bar ${focus ? "" : "inactive"}`}>
                <div className="title-bar-text">Counter</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize" />
                    <button aria-label="Maximize" />
                    <button aria-label="Close" onClick={() => handleWindows(id)} />
                </div>
            </div>
            <div className="window-body">
                {child}
            </div>
        </div>
    </Rnd>
  )
}
