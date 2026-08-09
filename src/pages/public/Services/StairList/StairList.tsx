import { HeroBanner } from '../../../../componets/HeroBanner/HeroBanner'
import { DesignTailorCard } from '../../../../componets/DesignTailorCard/DesignTailorCard';
import { AnimatedSection } from '../../../../componets/AnimatedSection/AnimatedSection.tsx';
import { SectionIntro } from '../../../../componets/SectionIntro/SectionIntro.tsx';
import { HeroVideo } from '../../../../componets/HeroVideo/HeroVideo.tsx';
import { FeatureShowcaseCarousel } from '../../../../componets/FeatureShowcaseCarousel/FeatureShowcaseCarousel.tsx';
import { BannerImageHalf } from '../../../../componets/Half-Image-Banner/BannerImageHalf.tsx';
import { StairTreadsSection } from '../../../../componets/StairTreadsSection/StairTreadsSection.tsx';
import { AnimatedShowCaseCarousel } from '../../../../componets/AnimatedShowCaseCarousel/AnimatedShowCaseCarousel.tsx';

import SEO from "../../../../componets/SEO/SEO.tsx";
import type { SeoData } from "../../../../componets/SEO/types.ts";
import LocalBusinessSchema from "../../../../componets/SEO/LocalBusinessSchema.ts";
import BreadcrumbSchema from '../../../../componets/SEO/BreadcrumbSchema.ts';
import SITE_CONFIG from '../../../../componets/SEO/siteConfig.js';

interface FeaturedStair  {
  id: number;
  name: string;
  imageUrl: string;
  linkTo: string;
}

interface Slide {
  id: number;
  image: string;
  projectUrl?: string;
}

const featuredStairs: FeaturedStair[] = [
  {
    id: 1,
    name: 'Wood ',
    imageUrl: '/images/originals/Stairs/Stairs.webp',
    linkTo: '/stairs/downtown-miami'
  },
  {
    id: 2,
    name: 'Floating',
    imageUrl: '/images/originals/Stairs/floating01.webp',
    linkTo: '/stairs/floating-staircase'
  },
  {
    id: 3,
    name: 'Composite',
    imageUrl: '/images/originals/Stairs/PHOTO-2022-06-30-18-13-59.webp',
    linkTo: '/stairs/aluminum-composite'
  },
];
const slides : Slide[] = [
  {
    id: 1,
    image: "/images/originals/Stairs/UpperFloor.webp",
    projectUrl: "/projects/downtown-miami-floating-staircase"
  },
  {
    id: 2,
    image: "/images/originals/Stairs/after.webp",
    projectUrl: "/stairs/downtown-miami"
  },
  {
    id: 3,
    image: "/images/originals/Stairs/nick-stair.webp",
    projectUrl: "/stairs/nick-custom-staircase"
  }
];

// const StairDB = [
//   {
//     id: 1,
//     name: 'Aluminum - Wood ',
//     overview: "A central staircase with an aluminum and wood combination creates a warm yet contemporary architectural statement. The aluminum frame provides clean modern lines and structural strength, while the wood treads add natural beauty and visual contrast. This hybrid design works exceptionally well in open-concept spaces, turning the staircase into a functional centerpiece.",
//     durability: "Highly durable; the aluminum structure resists corrosion, warping, and wear, while properly sealed hardwood treads maintain long-term strength and stability. Designed to handle heavy daily use without compromising aesthetics.",
//     maintenance: "Low to medium maintenance; aluminum requires minimal care, while wood may need occasional cleaning or refinishing to preserve its appearance and texture.",
//     appearance: "Modern, elegant, and visually balanced. The contrast between metal and wood enhances the staircase’s sculptural presence, creating a centerpiece that feels both warm and contemporary.",
//     cost: "Medium to High; the combination of premium hardwood and custom aluminum fabrication increases material and installation costs but delivers long-lasting style and structural performance.",
//     imageUrl: '/images/originals/Stairs/wooden-stair.webp'

//   },
//   {
//     id: 2,
//     name: 'Floating Staircase',
//     overview: "A floating wood staircase offers a clean, minimalist aesthetic that creates the illusion of suspended steps. Designed to bring lightness and openness to any space, this style blends natural warmth with contemporary architecture. Its sleek profile enhances both modern homes and commercial interiors, transforming the staircase into a striking design feature.",
//     durability: "Strong and reliable when engineered properly; hardwood treads and concealed steel brackets provide excellent structural stability. Built to withstand daily foot traffic without compromising its floating appearance.",
//     maintenance: "Medium maintenance; wood requires periodic cleaning and occasional refinishing to preserve its color and protect against wear. The hidden support structure typically requires minimal upkeep.",
//     appearance: "Minimalist, elegant, and visually dramatic. The floating effect, paired with the natural beauty of wood, creates a centerpiece that feels light, modern, and architecturally refined.",
//     cost: "Medium to High; floating staircases require precise engineering, high-quality hardwood, and specialized installation, which can increase overall project cost but deliver a premium aesthetic.",
//     imageUrl: '/images/originals/Stairs/floating01.webp'
//   },
//   {
//     id: 3,
//     name: 'Aluminum Composite',
//     overview: "An aluminum composite outdoor staircase offers exceptional weather resistance and structural stability, making it ideal for exterior applications. The aluminum framework provides strength and corrosion resistance, while composite treads mimic the look of natural wood without the maintenance. This combination delivers a clean, modern appearance that performs exceptionally well in harsh climates.",
//     durability: "Extremely durable. Aluminum resists rust, moisture, UV exposure, and temperature fluctuations. Composite treads are resistant to fading, cracking, insects, and rot, ensuring long-term performance even in demanding outdoor conditions.",
//     maintenance: "Low maintenance. Composite steps require only occasional cleaning to remove dirt or debris, and aluminum structures typically need minimal upkeep beyond periodic rinsing. No sealing, staining, or repainting is required.",
//     appearance: "Sleek, modern, and highly consistent in color and texture. Composite materials offer the aesthetic of wood but maintain a uniform finish that does not degrade over time. Perfect for contemporary homes, patios, terraces, and commercial outdoor spaces.",
//     cost: "Medium to High; while composite materials and aluminum fabrication may have a higher initial cost than traditional wood, the long-term savings in maintenance and longevity make it a cost-effective investment.",
//     imageUrl: '/images/originals/Stairs/composite.webp'
//   },

// ];
const seo: SeoData = {
  title:
    "Custom Staircases | Floating, Aluminum & Wood Stairs in South Florida",

  description:
    "Explore custom floating staircases, aluminum stairs, wood treads, and modern architectural stair systems designed and fabricated by Lauries Welding Group throughout South Florida.",

  canonical: "/stairs",

  image:
    "/images/originals/Stairs/Nilis-house.webp"
};
export const StairList = () => {

  return (
    <>
        <SEO
            title={seo.title}
            description={seo.description}
            canonical={seo.canonical}
            image={seo.image}
            type="website"
            schemas={[
                LocalBusinessSchema(),
                BreadcrumbSchema([
                    {
                        name: "Home",
                        url: `${SITE_CONFIG.siteUrl}/`
                    },
                    {
                        name: "Stairs",
                        url: `${SITE_CONFIG.siteUrl}/stairs`
                    }
                ])
            ]}
        />
        <main style={{
                        backgroundImage: "url(/images/originals/backgroundMyth.avif)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}>
            <section className="video-section">
                <HeroVideo
                    src="images/videos/stair-hero.mp4"
                    videoId="slow-video"
                    className="hero-video"
                    pauseTime={4000}
                    poster="/images/videos/product-promo-poster.webp"
                    ariaLabel="Custom welding, pergolas, stairs and cladding projects"
                />
            </section>  
            <AnimatedSection>
              <SectionIntro 
                  title="Explore Our Stair Design" 
                  description="Discover the perfect modern stair design that elevates your space — from sleek floating steps to bold architectural structures. Explore styles that blend function, safety, and contemporary elegance."
              />
            </AnimatedSection>
            {/* {showModal && selectedStair && (
              <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <button className="close-button" onClick={closeModal}>×</button>
                  <h2>{selectedStair.name}<strong class="hero-strong"> | </strong></h2>
                  <img src={selectedStair.imageUrl} alt={selectedStair.name} />
                  <p><strong>Overview:</strong> {selectedStair.overview}</p>
                  <p><strong>Durability:</strong> {selectedStair.durability}</p>
                  <p><strong>Maintenance:</strong> {selectedStair.maintenance}</p>
                  <p><strong>Appearance:</strong> {selectedStair.appearance}</p>
                  <p><strong>Cost:</strong> {selectedStair.cost}</p>
                </div>
              </div>
            )} */}
            <AnimatedSection>
              <FeatureShowcaseCarousel
                title='STAIR SYSTEM'
                subtitle='Project Showcase'
                mainImage="/images/originals/Claddings/cladding-pergolas-render.webp"
                items={featuredStairs}
              />  
            </AnimatedSection>
            <AnimatedSection>
              <section>
                <HeroBanner
                  title="Stair Services"
                  subtitle='Enhance your space with our expert stair solutions. From elegant designs to sturdy constructions, we provide stairs that combine safety and style for every home and business.'
                  onButtonClick={()=>window.location.href="/contactus"}
                  imageUrl="/images/originals/Stairs/Nilis-house.webp"
                />
              </section>
            </AnimatedSection>
            <AnimatedSection>
              <StairTreadsSection />
            </AnimatedSection>
            
            <section className='myths-info'>
              <div className="myth-info-bg"></div>
              <AnimatedSection>
                <BannerImageHalf 
                  image="images/originals/Stairs/wood-stair-indoor.webp" 
                  title="ALUMINUM & WOOD STAIRS MYTH" 
                  subtitle="Some people believe aluminum and wood stair systems are not strong enough for outdoor use. In reality, when engineered correctly, aluminum structures combined with hardwood treads provide excellent structural strength, weather resistance, and a refined architectural appearance that lasts for years with minimal maintenance."
                  reversed={false}
                />
              </AnimatedSection>

              <AnimatedSection>
                <BannerImageHalf
                  image="images/originals/Stairs/floating-indoors.webp" 
                  title="FLOATING STAIRCASE MYTH" 
                  subtitle="Many assume floating staircases are unsafe or unstable because they appear to 'float' without visible support. Modern floating stair systems are designed with hidden steel or aluminum structures that provide exceptional strength while delivering a clean, contemporary design that enhances open spaces and architectural aesthetics."
                  reversed={true}
                /> 
              </AnimatedSection>

              <AnimatedSection>    
                <BannerImageHalf
                  image="images/originals/Stairs/composite-stair-outdoor.webp" 
                  title="ALUMINUM COMPOSITE STAIRS MYTH" 
                  subtitle="A common misconception is that composite stair systems look artificial and lack durability. In reality, modern composite stair materials are engineered to resist moisture, UV exposure, insects, and warping while maintaining a consistent color and texture, providing a long-lasting and low-maintenance solution for exterior staircases."
                  reversed={false}
                />
              </AnimatedSection>
            </section>  
            <AnimatedSection>
                <AnimatedShowCaseCarousel 
                  slides={slides}
                  eyebrow="Completed Projects"
                  headline="DESIGNED TO IMPRESS. "
                  subheadline="Explore our completed staircase projects across South Florida. See materials, fabrication details, and finished installations."
                  buttonLabel="VIEW PROJECT"
                  onButtonClick={() => (window.location.href = "/contactus")}
                />
            </AnimatedSection>  
            <AnimatedSection>
              <DesignTailorCard/>
            </AnimatedSection>
        </main>
    </>          
  )
}
