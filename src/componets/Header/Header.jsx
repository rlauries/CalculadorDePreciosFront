import { useContext, useState} from 'react'
import './Header.css'
import { AuthContext } from '../../context/AuthContext';



export const Header = () => {

   const {user, logout} = useContext(AuthContext);
   
   const [menuOpen, setMenuOpen] = useState(false);
   const toggleMenu = () => setMenuOpen((prev) => !prev);
   
   const [servicesOpen, setServicesOpen] = useState(false);
   const toggleServices = () => setServicesOpen(prev => !prev);
   
   
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
               <span className="dropbtn">Services</span>
               <div className="dropdown-content">
                  <a href="/fences" onClick={closeMenu}>Fence/Gate</a>
                  <a href="/pergolas" onClick={closeMenu}>Pergolas/Trellis</a>
                  <a href="/stairs" onClick={closeMenu}>Stairs</a>
                  <a href="/rails" onClick={closeMenu}>Rails</a>
               </div>
            </div>

            <a className="nav-btn contactus" href="/contactus" onClick={closeMenu}>
               Contact Us
            </a>

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
                           onClick={() => { window.location.href = "/rails"; closeMenu(); }}
                        >
                           Rails
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