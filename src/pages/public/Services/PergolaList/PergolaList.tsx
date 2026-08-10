import './PergolaList.css'; // si quieres agregar estilos aparte
import { DesignTailorCard } from '../../../../componets/DesignTailorCard/DesignTailorCard.jsx';
import { HeroBanner } from '../../../../componets/HeroBanner/HeroBanner.tsx';
import { AnimatedSection } from '../../../../componets/AnimatedSection/AnimatedSection.tsx';
import { AnimatedShowCaseCarousel } from '../../../../componets/AnimatedShowCaseCarousel/AnimatedShowCaseCarousel.tsx';
import { SectionIntro } from '../../../../componets/SectionIntro/SectionIntro.tsx';
import { HeroVideo } from '../../../../componets/HeroVideo/HeroVideo.tsx';
import { FeatureShowcaseCarousel } from '../../../../componets/FeatureShowcaseCarousel/FeatureShowcaseCarousel.tsx';
import { BannerImageHalf } from '../../../../componets/Half-Image-Banner/BannerImageHalf.tsx';

import SEO from "../../../../componets/SEO/SEO.tsx";
import type { SeoData } from "../../../../componets/SEO/types.ts";
import LocalBusinessSchema from "../../../../componets/SEO/LocalBusinessSchema.ts";
import BreadcrumbSchema from '../../../../componets/SEO/BreadcrumbSchema.ts';
import SITE_CONFIG from '../../../../componets/SEO/siteConfig.js';

interface FeaturedPergola {
  id: number;
  name: string;
  imageUrl: string;
  linkTo: string;
}

interface Slide {
  id: number;
  image: string;
}

const featuredPergolas: FeaturedPergola[] = [
  {
    id: 1,
    name: "Steel",
    imageUrl: "/images/originals/Pergolas/Pergola-Steel.webp",
    linkTo: "/pergolas/steel"
  },
  {
    id: 2,
    name: "Aluminum",
    imageUrl: "/images/originals/Pergolas/Pergola-Aluminum.webp",
    linkTo: "/pergolas/aluminum"
  },
  {
    id: 3,
    name: "Wood",
    imageUrl: "/images/originals/Pergolas/Pergola-Wood.webp",
    linkTo: "/pergolas/wood"
  },
  {
    id: 4,
    name: "Insulated",
    imageUrl: "/images/originals/Pergolas/pergola-insulated.webp",
    linkTo: "/pergolas/insulated"
  },
  {
    id: 5,
    name: "LED Light",
    imageUrl: "/images/originals/Pergolas/string-light-pergola.webp",
    linkTo: "/pergolas/ledlight"
  },
  
];

// const PergolasDB = [
//   {
//     id: 1,
//     name: "Steel Pergola",
//     overview: "A steel pergola is known for its strength and durability. It is ideal for modern designs that require a sleek, industrial look. Steel pergolas can withstand harsh weather conditions, including heavy winds and snow, due to their robust structure. However, they may require periodic maintenance to prevent rust and corrosion unless they are made of galvanized or powder-coated steel.",
//     durability: "Extremely durable, highly resistant to wind, rust-resistant if treated properly; very strong against heavy loads.",
//     maintenance: "Low to medium maintenance; occasional repainting or anti-rust treatment required depending on climate.",
//     appearance: "Industrial, strong, and modern aesthetic; can look very sleek or very heavy depending on design.",
//     cost: "Medium to High; steel material + installation can be expensive but long-lasting.",
//     imageUrl: "images/originals/Pergolas/Pergola-Steel.webp"
//   },
//   {
//     id: 2,
//     name: "Aluminum Pergola",
//     overview: "Aluminum pergolas are lightweight, rust-resistant, and low maintenance, making them perfect for coastal areas or locations with high humidity. They offer a modern appearance and can be powder-coated in various colors to match your outdoor decor. Aluminum is not as strong as steel but provides excellent resistance to weather elements, including UV radiation.",
//     durability: "Very durable, naturally corrosion-resistant, lightweight but strong; excellent for most climates.",
//     maintenance: "Very low maintenance; occasional cleaning is enough. Does not rust.",
//     appearance: "Sleek, clean, and modern; available in many colors and finishes.",
//     cost: "Medium; cheaper than steel, but higher than wood if premium coatings are used.",
//     imageUrl: "images/originals/Pergolas/Pergola-Aluminum.webp"
//   },
//   {
//     id: 3,
//     name: "Wood Pergola",
//     overview: "Wood pergolas offer a natural and classic look that blends seamlessly into gardens and outdoor spaces. Made from materials such as cedar, pine, or redwood, they can be customized with various stains and finishes. While wood pergolas provide a warm, organic aesthetic, they require regular maintenance, including sealing and staining, to protect against weathering, pests, and rot.",
//     durability: "Moderate durability; needs regular maintenance (staining, sealing) to resist rot, insects, and weather damage.",
//     maintenance: "High maintenance; needs frequent treatment to avoid rotting, cracking, or pest damage.",
//     appearance: "Natural, warm, classic look; easily customizable but varies based on wood type.",
//     cost: "Low to Medium; materials can be affordable, but high labor costs for custom work and high long-term maintenance costs.",
//     imageUrl: "images/originals/Pergolas/Pergola-Wood.webp"
//   },
//   {
//     id: 4,
//     name: "Insulated Pergola",
//     overview: "Insulated pergolas come with a roofing system that includes a layer of insulation, providing better temperature control. They are designed to keep the area beneath cool in the summer and warm in the winter, making them perfect for year-round use. These pergolas often come with additional features like integrated lighting, fans, or heating systems.",
//     durability: "Very high durability; roof provides strong weather protection and insulation preserves materials from extreme temperatures.",
//     maintenance: "Very low maintenance; insulated roof panels are designed to last decades with minimal upkeep.",
//     appearance: "Modern and luxurious appearance; solid roof gives a finished, \"indoor-outdoor room\" feel.",
//     cost: "High; insulated panels and extra engineering make it one of the most expensive options upfront.",
//     imageUrl: "images/originals/Pergolas/pergola-insulated.webp"
//   },
//   {
//     id: 5,
//     name: "Retractable Roof Pergola",
//     overview: "Retractable roof pergolas provide flexible outdoor coverage with the ability to open or close the roof as needed. Perfect for year-round use, they adapt to sun, shade, and rain with ease.",
//     durability: "Built with high-grade aluminum or composite materials, offering excellent resistance to wind, rain, and UV rays.",
//     maintenance: "Low to medium maintenance; motorized systems may require occasional servicing, but the frame itself is highly resistant.",
//     appearance: "Modern and elegant, offering clean lines and a high-tech appearance that blends function with architectural beauty.",
//     cost: "High cost; includes mechanical or motorized systems and premium materials, but offers exceptional comfort and flexibility.",
//     imageUrl: "images/originals/Pergolas/smart-retractable-roof-pergola.webp"
//   },
//   {
//     id: 6,
//     name: "LED Light Pergola",
//     overview: "LED light pergolas elevate outdoor living by integrating ambient lighting directly into the structure. Ideal for evening gatherings, romantic dinners, or showcasing garden features at night.",
//     durability: "Structure typically made from aluminum or PVC, offering high durability and weather resistance. LEDs are long-lasting and designed for outdoor use.",
//     maintenance: "Very low maintenance; LED systems are energy-efficient and require minimal attention. Occasional cleaning of light fixtures recommended.",
//     appearance: "Stylish and modern, creating a sophisticated nighttime atmosphere. Lighting can be warm, cool, or color-adjustable depending on the system.",
//     cost: "Medium to high cost depending on lighting system complexity and material, but adds significant ambiance and value.",
//     imageUrl: "images/originals/Pergolas/string-light-pergola.webp"
//   }
// ];
const slides: Slide[] = [
  { id: 1, image: "/images/originals/Pergolas/Targa-Large-main.webp" },
  { id: 2, image: "/images/originals/Pergolas/Smart-Technology-Customization-for-Ultimate-Control.webp" },
  { id: 3, image: "/images/originals/Pergolas/beauty.webp" },
  { id: 4, image: "/images/originals/Pergolas/big-britgt-pergola.webp" },
  { id: 5, image: "/images/originals/Pergolas/Pergola-moderna.webp" },
  
];

const seo: SeoData = {
    title: "Custom Pergolas | Aluminum, Wood, Steel & Insulated Roof Systems",

    description:
        "Discover custom aluminum, wood, steel, insulated roof, and LED pergola systems designed to transform outdoor living spaces throughout South Florida.",

    canonical: "/pergolas",

    image:
        "/images/originals/Pergolas/aluminum-modern-pergola.webp"
};

const PergolaList = () => {


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
                      name: "Pergolas",
                      url: `${SITE_CONFIG.siteUrl}/pergolas`
                  }
              ])
          ]}
      />

      <main
        style={{
                      backgroundImage: "url(/images/originals/backgroundMyth.avif)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                  }}
      >
        <section>
          <section className="video-section">
              <HeroVideo
                  src="/images/videos/pergola-hero.mp4"
                  videoId="slow-video"
                  className="hero-video"
                  pauseTime={4000}
                  poster="/images/videos/product-promo-poster.webp"
                    ariaLabel="Custom welding, pergolas, stairs and cladding projects"
              />
          </section> 
          
          <AnimatedSection>
            <SectionIntro 
                title="Explore Our Pergola Styles" 
                description='Discover the perfect pergola that suits your lifestyle — from modern aluminum designs to classic wooden structures. Compare features and find your ideal match.'
            />
          </AnimatedSection>  
          
            
          {/* <AnimatedSection>
            <div className="pergola-list-grid">
              {pergolas.map((item) => (
                <div className="pergola-card" key={item.id}>
                  <div className="pergola-image" onClick={() => openModal(item)}>
                    {item.imageUrl ? (
                      <div className="image-wrapper">
                        <img src={item.imageUrl} alt={item.name} />
                        <div className="image-label">{item.name}</div>
                      </div>
                    ) : (
                      <div className="no-image">No Image</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>  
          {showModal && selectedPergola && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={closeModal}>×</button>
                <h2>{selectedPergola.name}<strong class="hero-strong"> | </strong></h2>
                <img src={selectedPergola.imageUrl} alt={selectedPergola.name} />
                <p><strong>Overview:</strong> {selectedPergola.overview}</p>
                <p><strong>Durability:</strong> {selectedPergola.durability}</p>
                <p><strong>Maintenance:</strong> {selectedPergola.maintenance}</p>
                <p><strong>Appearance:</strong> {selectedPergola.appearance}</p>
                <p><strong>Cost:</strong> {selectedPergola.cost}</p>
              </div>
            </div>
          )} */}
          <AnimatedSection>
            <FeatureShowcaseCarousel
              title='OUR SYSTEMS'
              subtitle='Project Showcase'
              mainImage="/images/originals/Fences/rail-view.webp"
              items={featuredPergolas}
            />
          </AnimatedSection>
          <AnimatedSection>
            <HeroBanner
              title="Pergola Styles"
              subtitle='From sleek aluminum to timeless wood, explore the perfect pergola that elevates your outdoor space. Discover styles that blend beauty, shade, and functionality'
              onButtonClick={()=>window.location.href="/contactus"}
              imageUrl="/images/originals/Pergolas/aluminum-modern-pergola.webp"
            />     
          </AnimatedSection>
        
          <section>
                    <div className='myths-info' 
                        
              >
                  <div className="myth-info-bg"></div>

                    <AnimatedSection>
                      <BannerImageHalf 
                        image="/images/originals/Pergolas/led-myth.webp" 
                        title="LED PERGOLA LIGHTING MYTH" 
                        subtitle="Many people believe LED lighting for pergolas is too harsh or unreliable outdoors. In reality, modern exterior-grade LED systems are designed to withstand weather, humidity, and temperature changes while providing soft, energy-efficient illumination that enhances the ambiance of your outdoor space."
                        reversed={false}
                      />
                    </AnimatedSection>

                    <AnimatedSection>
                      <BannerImageHalf
                        image="/images/originals/Pergolas/wood-myth.webp" 
                        title="WOOD PERGOLA MYTH" 
                        subtitle="A common misconception is that wood pergolas quickly rot or require constant maintenance. When properly sealed and built with quality materials, wood pergolas can last for decades while offering a timeless natural look that blends beautifully with outdoor environments."
                        reversed={true}
                      /> 
                    </AnimatedSection>

                    <AnimatedSection>    
                      <BannerImageHalf
                        image="/images/originals/Pergolas/pergola-insulated-panels-myth.webp" 
                        title="INSULATED PANEL PERGOLA MYTH" 
                        subtitle="Some believe insulated roof panels make pergolas look bulky or overly industrial. In reality, modern insulated panels provide excellent thermal protection, reduce heat under the structure, and create a clean architectural finish that enhances comfort and usability year-round."
                        reversed={false}
                      />
                    </AnimatedSection>  
                  </div>
          </section>
          
          <AnimatedSection>
              <AnimatedShowCaseCarousel 
                slides={slides}
                eyebrow="Next-Generation Materials"
                headline="CREATE LUXURY OUTDOOR SPACES"
                subheadline="Smart comfort solutions designed to complement your pergola and outdoor living space."
                buttonLabel="Explore Fans"
                onButtonClick={() => (window.location.href = "/fans")}
              />
          </AnimatedSection>
          <AnimatedSection>
            <DesignTailorCard/>
          </AnimatedSection>
        </section>
        
      </main>
    </>
  );
};
export default PergolaList;