import React, { ReactNode } from 'react'
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

export default function Window({child, wOptions}: {child:ReactNode, wOptions:WindowOptions }) {
    
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
        <div className='window window-container'>
            <div className="title-bar">
                <div className="title-bar-text">Counter</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize" />
                    <button aria-label="Maximize" />
                    <button aria-label="Close" />
                </div>
            </div>
            <div className="window-body">
                {child}
            </div>
        </div>
    </Rnd>
  )
}
