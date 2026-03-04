import { useContext, useState,useEffect, useRef} from 'react'
import './Header.css'
import { AuthContext } from '../../context/AuthContext.jsx';
import { ContactUsButton } from '../ContactUsButton/ContactUsButton.tsx';

import { Link } from 'react-router-dom-v5-compat';


export const Header = () => {

   const {user, logout} = useContext(AuthContext);
   const megaMenuRef = useRef<HTMLDivElement | null>(null);

   const [menuOpen, setMenuOpen] = useState(false);
   const toggleMenu = () => setMenuOpen((prev) => !prev);
   
   const [servicesOpen, setServicesOpen] = useState(false);
   const toggleServices = () => setServicesOpen(prev => !prev);

   //---- Cierra el mega menú al hacer clic fuera de él ------
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            megaMenuRef.current &&
            !megaMenuRef.current.contains(event.target as Node)
         ) {
            setServicesOpen(false);
         }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);




   
   const closeMenu = () => setMenuOpen(false);

    return (
      <header className='main-header'>
         <div className="image-container">
            <img className='company-name-logo' 
                 src="images\Logo\SmallLauriesLogo (para fondo blanco).png" 
                 alt="Lauries Welding Group" />
         </div>

          {/* Botón hamburguesa (solo se ve en mobile) */}

         <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            >
              
            <span />
            <span />
            <span />
         </button>

         {/* NAV */}

         {/* NAV */}
         <nav className={`nav-bar ${menuOpen ? "open" : ""}`}>
            <div className="flex-grow" />

            <a className="nav-btn" href="/home" onClick={closeMenu}>
               Home
            </a>
            <a className="nav-btn" href="/gallery" onClick={closeMenu}>
               Gallery
            </a>

            <div className="nav-btn dropdown">
               <button
                  className="dropbtn"
                  onClick={() => setServicesOpen(prev => !prev)}
               >
                  Services ▾
               </button>
               </div>

               
               <div ref={megaMenuRef}
                    className={`mega-menu ${servicesOpen ? "open" : ""}`}
                    
               >
                  <div className="mega-menu-container"
                       
                  >

                     {/* LEFT SIDE IMAGE */}
                     <div className="mega-menu-image"
                          style={{
                             backgroundImage: `url(/images/originals/Pergolas/IMG_7746.jpg)`
                          }}                     >
                        {/* <img src="//imagesoriginals/Pergolas/IMG_7746.jpg" alt="Services" /> */}
                        <div className="mega-menu-image-overlay">
                           <h3>OUR SERVICES</h3>
                           <p>Inspired by your needs</p>
                           <a href="/gallery">View All Services</a>
                        </div>
                     </div>

                     {/* RIGHT SIDE LINKS */}
                     <div className="mega-menu-links">
                        <h3>RESIDENTIAL & COMMERCIAL</h3>
                        <a href="/fences">Fence / Gate</a>
                        <a href="/pergolas">Pergolas / Trellis</a>
                        <a href="/stairs">Stairs</a>
                        <a href="/claddings">Exterior Claddings</a>
                        <button className="mega-menu-links-button" onClick={() => { window.location.href = "/contactus"; closeMenu(); }}>
                           CONTACT US
                        </button>
                     </div>

                  </div>
               </div>
               


            <ContactUsButton />
            
            {user ? (
               <div className="nav-btn logout">
                  <span className="welcome-user">Welcome, {user.username}</span>
                  <button className="logout-btn" onClick={() => { logout(); closeMenu(); }}>
                  Logout
                  </button>
               </div>
            ) : (
               <a href="/login" className="nav-btn login" onClick={closeMenu}>
                  Login
               </a>
            )}
         </nav>

         {/* OVERLAY MOBILE */}
         {menuOpen && (
            <div className="mobile-menu-overlay">
               <div className="mobile-menu-header">
                  <button
                     className="mobile-menu-close"
                     onClick={closeMenu}
                     aria-label="Close menu"
                     >
                        ✕
                  </button>
               </div>

               <button className="mobile-menu-cta" onClick={() => { window.location.href = "/contactus"; closeMenu(); }}>
                  CONTACT US
               </button>

               <nav className="mobile-menu-list">
                  <button className="mobile-menu-item" onClick={() => { window.location.href = "/home"; closeMenu(); }}>
                     Home
                  </button>
                  <button className="mobile-menu-item" onClick={() => { window.location.href = "/gallery"; closeMenu(); }}>
                     Gallery
                  </button>
                  
                  {/* SERVICES DROPDOWN EN FLUJO NORMAL */}
                  <div className="dropdown-mobile">
                     <button
                        type="button"
                        className="dropdown-mobile-header"
                        onClick={toggleServices}   // 👉 abre/cierra
                     >
                        <span>Services</span>
                        <span className={`chevron ${servicesOpen ? "rotate" : ""}`}>▾</span>
                     </button>

                     {servicesOpen && (
                        <div className="dropdown-mobile-content">
                        <button
                           className="dropdown-link"
                           onClick={() => { window.location.href = "/fences"; closeMenu(); }}
                        >
                           Fence/Gate
                        </button>
                        <button
                           className="dropdown-link"
                           onClick={() => { window.location.href = "/pergolas"; closeMenu(); }}
                        >
                           Pergolas/Trellis
                        </button>
                        <button
                           className="dropdown-link"
                           onClick={() => { window.location.href = "/stairs"; closeMenu(); }}
                        >
                           Stairs
                        </button>
                        <button
                           className="dropdown-link"
                           onClick={() => { window.location.href = "/claddings"; closeMenu(); }}
                        >
                           Exterior Claddings
                        </button>
                        </div>
                     )}
                  </div>

                  <button className="mobile-menu-item" onClick={() => { window.location.href = "/contactus"; closeMenu(); }}>
                     Contact Us
                  </button>
                 
                  {user ? (
                  <button
                     className="mobile-menu-item"
                     onClick={() => { logout(); closeMenu(); }}
                  >
                     Logout
                  </button>
                  ) : (
                  <button
                     className="mobile-menu-item"
                     onClick={() => { window.location.href = "/login"; closeMenu(); }}
                  >
                     Login
                  </button>
                  )}
               </nav>
            </div>
         )}   
         
         

         
         
      </header>
    )
}