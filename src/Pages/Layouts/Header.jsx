import '../../Style-components/Header.css'


export const Header = () => {
    return (
      <header>
         <div>
            <img src="images/logo.jpg" className='logo'  alt="" />
         </div>
         <div>
            <nav className='nav-bar'>
               <a href="home"> Home  </a>
               <a href="gallery">Gallery</a>
               <a href="service">Fence/Gate</a>
               <a href="contactus"> Contact Us </a>
               <div className='flex-grow'></div>
               
               <a href='SignUp' className='login'>Login</a> 
                     
            </nav>
         </div>
         

         
         
      </header>
    )
}