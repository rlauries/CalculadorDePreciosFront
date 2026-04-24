import { FrequentlyAskQuestion } from '../../../componets/FrequentlyAskQuestion/FrequentlyAskQuestion';
import './Home.css';
import { PergolaSlider } from '../../../componets/PergolaSlider/PergolaSlider';
import { FenceSlider } from '../../../componets/FenceSlider/FenceSlider';
import { BannerImageHalf } from '../../../componets/Half-Image-Banner/BannerImageHalf';
import { HeroVideo } from '../../../componets/HeroVideo/HeroVideo';
import { AnimatedSection } from '../../../componets/AnimatedSection/AnimatedSection.tsx';
import { ContactUsButton } from '../../../componets/ContactUsButton/ContactUsButton.tsx';
import { SectionIntro } from '../../../componets/SectionIntro/SectionIntro.tsx';
import { PromoTicker } from '../../../componets/PromoTicker/PromoTicker.tsx';
import About  from '../../../componets/About/About.tsx';

const Home = () => {
    


  return (
    <div className='home-container'
          style={{
                    backgroundImage: "url(/images/originals/backgroundMyth.avif)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
    >
        <section className="video-section">
            <HeroVideo
                src="images/videos/product-promo.mp4"
                videoId="slow-video"
                className="hero-video"
                pauseTime={4000}
            />
        </section>
        <PromoTicker/>
        <SectionIntro
            title="DESIGNED TO LAST"
            description="We are a fabrication-driven company dedicated to building durable, functional, and visually striking outdoor structures. From custom fences and gates to pergolas, stairs, and exterior cladding systems, every project is engineered with precision and built to perform. Our commitment is simple: quality craftsmanship, honest work, and structures designed to last."
        />

        {/* ----Hero Down Banner ---- */}
        <section>
          <AnimatedSection>   
            <div className="hero-down-banner">
                <a href="/claddings" className="hero-down-container-link">
                    <div class="feature-card">
                        <div class="feature-card-bg"></div>

                        <div class="feature-card-image-wrapper">
                            <img
                            src="images/originals/Claddings/Capture-1.png"
                            alt="Pivot 6 XL"
                            class="feature-card-image"
                            />
                        </div>

                        <div class="feature-card-content">
                            <h3>CLADDING SERVICES</h3>
                        </div>
                    </div>
                </a>
                <div className="hero-down-text">
                    <h2>
                        TRANSFORM YOUR OUTDOOR<strong> | </strong>
                    </h2>
                    <h4>
                        <em>Discover structures built to endure and impress.</em>
                    </h4>
                    <p>
                    Our collection blends innovation, thoughtful design, and expert craftsmanship—ranging from modern aluminum systems to the natural beauty of wood. Each model is engineered for durability, comfort, and year-round usability, turning any outdoor space into a personalized sanctuary.
                    </p>
                <ContactUsButton/>
              </div>
              <div className="gray-gradient-bottom" />
            </div>
          </AnimatedSection>  
        </section>
        
        {/* -------- About ---------*/}
        <section>
          <AnimatedSection>      
            <About/>
          </AnimatedSection>
        </section>
        
        <section className='home-services-sliders'>
            <AnimatedSection>
                <PergolaSlider/>
            </AnimatedSection>
        
            <AnimatedSection>
                <FenceSlider/>
            </AnimatedSection>
        </section>
       
   
        <section>
            <div className='myths-info' 
               
            >
                <div className="myth-info-bg"></div>
                <AnimatedSection>
                    <BannerImageHalf 
                        image="images/originals/Pergolas/IMG_7746.jpg" 
                        title=" WOOD PERGOLA MYTH" 
                        subtitle="Discover the truth behind wood pergolas and why they're a durable, timeless choice for your outdoor space. Don't let misconceptions hold you back!"
                        reversed={false}
                        link="/pergolas"

                    />
                </AnimatedSection>
                <AnimatedSection>
                    <BannerImageHalf
                        image="images/originals/Fences/design-an-aluminum-decorative-fence-for-the-front-yard-of-modern-houses.jpg" 
                        title=" OUTDOOR LIGHTING MYTH" 
                        subtitle="Learn how outdoor string LED lights are not only energy-efficient and long-lasting but also weather-resistant, providing a vibrant and cozy atmosphere year-round. Say goodbye to concerns about durability and maintenance, and illuminate your outdoor spaces with ease and style."
                        reversed={true} // Esto invierte el orden de imagen y texto
                        link="/fences"
                    /> 
                </AnimatedSection>
                <AnimatedSection>    
                    <BannerImageHalf
                        image="images/originals/Claddings/wood-cladding-myth.png" 
                        title="PVC Cladding Myth" 
                        subtitle="Modern exterior-grade PVC is engineered to resist moisture, UV exposure, warping, and rot — making it a reliable and long-lasting solution for pergolas. It delivers a clean architectural finish with minimal maintenance."
                        reversed={false}
                        link="/claddings"

                    />
                </AnimatedSection>    
            </div>
        </section>
        <section className="gray-gradient-section">
            <div className="gray-gradient-bottom" />
        </section>
        <section>
            <div className='forth-banner'>
                <AnimatedSection>
                    <span className='info'>
                        <div className="info-subtitle">
                            <h2>Personalized Service <strong>|</strong></h2>
                        </div>
                        <p>
                            From concept to completion, we deliver top-quality fabrication and structural solutions that stand the test of time. Our team is committed to excellence in every weld, every project, every time.
                        </p>
                    </span>
                    
                    <img src="images/workers-banner.jpg" alt="" />
                 </AnimatedSection>   
            </div>
            
        </section>
        <section>
          
            <AnimatedSection>
                <FrequentlyAskQuestion/>
            </AnimatedSection>
        </section>
        
                
      
    </div>
  )
}
export default Home;