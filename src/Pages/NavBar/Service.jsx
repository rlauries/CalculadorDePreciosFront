import React from 'react'
import { Header } from '../Layouts/Header';
import { Footer } from '../Layouts/Footer';
import { FenceList } from '../../ServicesToAPI/FenceList';

export const Service = () => {
  return (
    <div className='viewport'>
        <Header/>
        <FenceList/>
        <Footer/>
        
    </div>
  )
}
