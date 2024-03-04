import React, { ReactNode } from 'react'
import { Rnd } from 'react-rnd'

export default function Window({child}: {child:ReactNode}) {
    
    const defaultSize = {x: 200, y: 200};

    return (
    <Rnd
        bounds="window"
        maxHeight={400}
        maxWidth={400}
        minHeight={defaultSize.y}
        minWidth={defaultSize.x}
        
    >
        <div 
            className='window-container'
            style={{
                height: "100%",
                width: "100%",
                minHeight:defaultSize.y,
                minWidth: defaultSize.x,
                backgroundColor: "red"
            }}
        >
            {child}
        </div>
    </Rnd>
  )
}
