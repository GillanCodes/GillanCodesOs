import React, { ReactNode } from 'react'
import { Rnd } from 'react-rnd'

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
        <div 
            className='window-container'
            style={{
                height: "100%",
                width: "100%",
                backgroundColor: "red"
            }}
        >
            {child}
        </div>
    </Rnd>
  )
}
