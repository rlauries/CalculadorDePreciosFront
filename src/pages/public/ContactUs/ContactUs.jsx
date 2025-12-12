
import './Contactus.css';
import {ContactUsForm} from '../../../componets/ContactUsForm/ContactUsForm.jsx';
import { HeroBanner } from '../../../componets/HeroBanner/HeroBanner.jsx';

const ContactUs = () => {
    
  const handlePlayOnClick = () => {
        const video = document.getElementById("slow-video");
        if (video) video.play();
    };
    const handleLoop = () => {
        setTimeout(() => {
            const video = document.getElementById("slow-video");
            if (video) video.play();
        }, 4000); // Pausa de 4s
    };

  return (
    <div className='viewport'>
         <section className="video-section">
            <video
                className="hero-video"
                id="slow-video"
                src="images/videos/contactus-video.mp4"
                muted
                playsInline
                onEnded={handleLoop}
                onClick={handlePlayOnClick}
            />
        </section>
        <div className='contactu-info'>
          <h1>At Lauries Welding Group<strong>&nbsp; | </strong></h1>
          <p>
             Your project matters. We commit to contacting you within 24 hours of receiving your information. For immediate questions, call us at (786)-486-8465.
          </p>
          
           
        </div>
        <ContactUsForm/>
             
    </div>
  )
}
export default ContactUs;