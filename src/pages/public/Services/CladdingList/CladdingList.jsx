import React from 'react'
import { HeroBanner } from '../../../../componets/HeroBanner/HeroBanner'

export const CladdingList = () => {
  return (
    <div>
        <HeroBanner
            title="Claddings"
            subtitle='Enhance your home’s beauty and protection with our premium exterior claddings. Explore a variety of styles and materials designed to withstand the elements while elevating your curb appeal.'
            onButtonClick={()=>window.location.href="/contactus"}
            imageUrl="/images/originals/Claddings/hero-cladding.jpeg"
        />


    </div>
  )
}
