import React from 'react'
import "../../Style-components/FrequentlyAskQuestion.css";
export const FrequentlyAskQuestion = () => {

    

  return (
    <div className='faqs'>
        <legend><h2>Frequently Asked Questions</h2></legend>

        <details className='items'>
            <summary>Installation time after deposit</summary>
            <p>Usually, the fence is ready to be installed one month after 
                the starting day.
            </p>
        </details>
        <details className='items'>
            <summary>Who handle the permitting process? </summary>
            <p>If you need to get a permit to install your fence, 
                ask to find out whether that responsibility falls
                to you or whether it’s something the contractor handles.
                If a contractor asks you to pull the permit, buyer beware. 
                This may be because they are not licensed, insured, and 
                approved by the municipality.
            </p>
        </details>
        <details className='items'>
            <summary>Are you insured and licensed?</summary>
            <p>We have the appropriate license and 
                insurance and we will be able to provide proof of 
                both. Using a contractor that is not licensed or 
                insured can leave you open to liability if they 
                cause damage or get hurt.
            </p>
        </details>
        
    </div>
  )
}
