import React from 'react'
import Faq from '../faq/Faq'

function FaqCard() {
  return (
    <div>
        <div className='faq-header'>
        <div className='faq-logo'>star logo</div>
        <div className='faq-title'>FAQs</div>
        </div>

        <div className='all-faqs'>
            <Faq/>

        </div>

    </div>
  )
}

export default FaqCard