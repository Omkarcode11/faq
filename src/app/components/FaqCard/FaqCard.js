import React from 'react'
import Faq from '../faq/Faq'
import './faqCard.css'
import star from '/public/icons/icon-star.svg'
import Image from 'next/image'
import { allFaqs } from '@/utils/faqs'

function FaqCard() {

  return (
    <div className='faq-innerContainer'>
        <div className='faq-header'>
        <div className='faq-logo'><Image src={star} height={40} width={40}/></div>
        <div className='faq-title'>FAQs</div>
        </div>

        <div className='all-faqs'>
          {allFaqs.length?
           allFaqs.map(
            (ele,key)=>
            <Faq key={key} ques={ele.ques} ans={ele.ans}/>
           ) 
           :''
          }

        </div>

    </div>
  )
}

export default FaqCard