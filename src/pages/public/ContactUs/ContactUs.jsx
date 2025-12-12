
import './Contactus.css';
import {ContactUsForm} from '../../../componets/ContactUsForm/ContactUsForm.jsx';
import { HeroBanner } from '../../../componets/HeroBanner/HeroBanner.jsx';

const ContactUs = () => {
    
  

  return (
    <div className='viewport'>
        <HeroBanner
                  title="Why? "
                  subtitle="Filling out the Contact Form allows us to understand your project in greater detail, ensuring that we can provide you with the best possible design solution about your needs, preferences, and vision"
                  onButtonClick={()=>window.location.href="/contactus"}
                  imageUrl="/images/4-people-in-table.png"
                />
        {/* <div>
          <img className='hero-image' src="images/Contact-Us-Banner.png" alt="HeroBanner" />
        </div> */}
        <div className='contactu-info'>
          <h1><strong>&nbsp; | </strong>At Welding Group</h1>
          <p>
             Your project matters. We commit to contacting you within 24 hours of receiving your information. For immediate questions, call us at (786)-486-8465.
          </p>
           
        </div>
        <ContactUsForm/>
             
    </div>
  )
}
export default ContactUs;