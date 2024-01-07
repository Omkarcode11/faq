'use client'
import React, { useState } from 'react'

function Faq() {
    let [toggle,setToggle] = useState(true)
  return (
    <div className='faq-container'>
        <div className='faq-question-btn'>
            <div className='faq-question'>working ?</div>
            <div className='faq-btn'>
                <button onClick={()=>setToggle(!toggle)}>{toggle?"+":"-"}</button>
            </div>
        </div>
        <div className='faq-answer' style={{display:toggle?'none':''}}>
        this is my code is it working or not 
        </div>
    </div>
  )
}

export default Faq