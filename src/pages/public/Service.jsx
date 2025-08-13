import React from 'react'
import { Header } from '../../componets/Header/Header';
import { FenceList } from '../../servicesToAPI/FenceList';

const Service = () => {
  return (
    <div className='viewport'>
        <Header/>
        <FenceList/>
        
        
    </div>
  )
}
export default Service;