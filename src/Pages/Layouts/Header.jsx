import '../../Style-components/Header.css'


export const Header = () => {
    return (
      <header className='container'>
         <div>
            <img src="images/logo.jpg" className='logo'  alt="" />
         </div>
         <div>
            <nav className='nav-bar'>
               <a href="home"> Home  </a>
               <a href="gallery">Gallery</a>
               <a href="service">Fence/Gate</a>
               <a className='contactus' href="contactus"> Contact Us </a>
               <a href='SignUp' className='login'>Login</a> 
                     
            </nav>
         </div>
         

         
         
      </header>
    )
}