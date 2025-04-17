import { useContext } from 'react'
import '../../Style-components/Header.css'
import { AuthContext } from '../../context/AuthContext'
import { Grow } from '@mui/material';



export const Header = () => {

   const {user, logout} = useContext(AuthContext);

    return (
      <header className='container'>
         <div>
            <img src="images/logo.jpg" className='logo'  alt="" />
         </div>
         <div>
            <nav className='nav-bar'>
               <a className='nav-btn' href="home"> Home  </a>
               <a className='nav-btn'href="gallery">Gallery</a>
               <a className='nav-btn'href="fences">Fence/Gate</a>
               <a className='nav-btn pergolas' href="pergolas">Pergolas/Trellis</a>
               <a className='nav-btn contactus' href="contactus"> Contact Us </a>
               <div className='flex-grow'> </div>
               {user ? (
                  <div className="nav-btn logout">
                     <span className=''>Welcome, {user.username}</span>
                     <button className='logout-btn' onClick={logout}>Logout</button>
                  </div>
               ) : (
                  <a href='login' className='nav-btn login'>Login</a>
               )}
                     
            </nav>
         </div>
         

         
         
      </header>
    )
}