import React from 'react'
import { Header } from '../../componets/Header';
import { FenceList } from '../../servicesToAPI/FenceList';

export const Service = () => {
  return (
    <div className='viewport'>
        <Header/>
        <FenceList/>
        
        
    </div>
  )
}
