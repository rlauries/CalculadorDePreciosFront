import { useContext } from 'react'
import './Header.css'
import { AuthContext } from '../../context/AuthContext';



export const Header = () => {

   const {user, logout} = useContext(AuthContext);

    return (
      <header className='container'>
         <img className='logo' src="images/logo.jpg" alt="" />
         <img className='company-name-logo' src="images\Logo\SmallLauriesLogo (para fondo blanco).png" alt="" />
         <nav className='nav-bar'>
            <div className='flex-grow'> </div>
            <a className='nav-btn' href="home"> Home  </a>
            <a className='nav-btn' href="gallery">Gallery</a>

            {/* Services Dropdown */}
            <div className="nav-btn dropdown">
               <span className="dropbtn">Services</span>
               <div className="dropdown-content">
                  <a href="fences">Fence/Gate</a>
                  <a href="pergolas">Pergolas/Trellis</a>
                  <a href="stairs">Stairs</a>
                  <a href="rails">Rails</a>
               </div>
            </div>

            <a className='nav-btn contactus' href="contactus">Contact Us</a>

            

            {user ? (
               <div className="nav-btn logout">
                  <span className='welcome-user'>Welcome, {user.username}</span>
                  <button className='logout-btn' onClick={logout}>Logout</button>
               </div>
            ) : (
               <a href='login' className='nav-btn login'>Login</a>
            )}
         </nav>

         
         

         
         
      </header>
    )
}