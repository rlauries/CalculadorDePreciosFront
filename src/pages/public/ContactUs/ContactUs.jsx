
import './Contactus.css';
import {ContactUsForm} from '../../../componets/ContactUsForm/ContactUsForm.tsx';
import { HeroVideo } from '../../../componets/HeroVideo/HeroVideo.tsx';

const ContactUs = () => {
    
 

  return (
    <div className='viewport'>
        <section className="video-section">
          <HeroVideo
            src="images/videos/contactus-video.mp4"
            videoId="slow-video"
            className="hero-video"
            pauseTime={4000}
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