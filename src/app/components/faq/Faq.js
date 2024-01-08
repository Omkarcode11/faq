'use client'
import React, { useState } from 'react'
import Plus from '/public/icons/icon-plus.svg'
import Minus from '/public/icons/icon-minus.svg'
import './faq.css'
import Image from 'next/image'

function Faq({ans,ques}) {
    let [toggle,setToggle] = useState(true)
  return (
    <div className='faq1-container'>
        <div onClick={()=>setToggle(!toggle)} className='faq-question-btn'>
            <div className='faq-question'>{ques}</div>
            <div className='faq-btn'>
                <div >{toggle?<Image src={Plus}/>:<Image src={Minus}/>}</div>
            </div>
        </div>
        <div className='faq-answer' style={{display:toggle?'none':''}}>
       {ans}
        </div>
    </div>
  )
}

export default Faq