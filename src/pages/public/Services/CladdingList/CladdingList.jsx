
import { HeroBanner } from "../../../../componets/HeroBanner/HeroBanner";
// Usa el MISMO import de DesignTailorCard que en FenceList
import { DesignTailorCard } from "../../../../componets/DesignTailorCard/DesignTailorCard";
import { AnimatedSection } from "../../../../componets/AnimatedSection/AnimatedSection.tsx";
import { SectionIntro } from "../../../../componets/SectionIntro/SectionIntro.tsx";
import { AnimatedShowCaseCarousel } from "../../../../componets/AnimatedShowCaseCarousel/AnimatedShowCaseCarousel.tsx";
import { HeroVideo } from "../../../../componets/HeroVideo/HeroVideo.jsx";
import { FeatureShowcaseCarousel } from "../../../../componets/FeatureShowcaseCarousel/FeatureShowcaseCarousel.tsx";
import { BannerImageHalf } from "../../../../componets/Half-Image-Banner/BannerImageHalf.jsx";


const featuredCladdings = [
  {
    id: 1,
    name: "Composite",
    imageUrl: "images/originals/Claddings/composite-nili.jpeg",
    linkTo: "/cladding/composite",
  },
  {
    id: 2,
    name: "Wood",
    imageUrl: "images/originals/Claddings/wood-planks.jpg",
    linkTo: "/cladding/wood",
  },
  {
    id: 3,
    name: "PVC",
    imageUrl: "images/originals/Claddings/pvc-cladding.jpg",
    linkTo: "/cladding/pvc",
  },
];

// const CladdingServicesDB = [
//   {
//     id: 101,
//     name: "Composite Cladding",
//     overview:
//       "Composite cladding is a modern exterior and interior solution made from a blend of recycled wood fibers and plastic polymers. It provides a sleek, contemporary appearance while offering superior durability and environmental resistance. Perfect for ceilings, walls, facades, and pergola coverings, composite cladding enhances both aesthetics and performance.",
//     durability:
//       "Highly durable and engineered to resist moisture, fading, warping, and insects. Composite panels maintain structural integrity even under intense sunlight and humidity.",
//     versatility:
//       "Ideal for residential and commercial applications including exterior facades, interior feature walls, pergolas, patio ceilings, entrance columns, and accent architectural elements.",
//     maintenance:
//       "Very low maintenance; requires only occasional cleaning. No sanding, sealing, or repainting needed over time.",
//     aestheticOptions:
//       "Available in a wide range of modern colors and wood-grain textures. Offers a uniform, high-end appearance suitable for luxury outdoor living spaces.",
//     imageUrl: "images/originals/Claddings/composite-nili.jpeg",
//   },
//   {
//     id: 102,
//     name: "Wood Cladding",
//     overview:
//       "Wood cladding delivers a natural, warm, and timeless look ideal for both modern and traditional architectural designs. It is commonly used for exterior facades, ceilings, and pergola structures to create an inviting organic atmosphere.",
//     durability:
//       "Durable when properly sealed and maintained. Resistant to reasonable wear, but requires protection against moisture, UV exposure, and insects depending on the wood species.",
//     versatility:
//       "Perfect for accent walls, ceilings, pergolas, exterior facades, porch coverings, and decorative columns. Suitable for both interior and exterior applications.",
//     maintenance:
//       "Medium maintenance; wood requires periodic sealing, staining, or oiling to preserve color and prevent weather-related deterioration.",
//     aestheticOptions:
//       "Offers rich natural textures and customizable finishes. Available in various species such as cedar, pine, redwood, and exotic hardwoods for premium elegance.",
//     imageUrl: "images/originals/Claddings/wood-planks.jpg",
//   },
//   {
//     id: 103,
//     name: "PVC Cladding",
//     overview:
//       "PVC cladding is a lightweight, waterproof, and cost-effective solution ideal for ceilings, walls, and exterior structures. It provides a clean, elegant finish that resists moisture and requires minimal upkeep, making it excellent for high-humidity areas and outdoor installations.",
//     durability:
//       "Extremely resistant to moisture, mold, insects, and rot. PVC panels do not warp or crack, even in extreme temperature fluctuations.",
//     versatility:
//       "Commonly used for soffits, porch ceilings, outdoor kitchens, pergola coverings, wall accents, and interior wet areas such as bathrooms or laundry rooms.",
//     maintenance:
//       "Very low maintenance; simple washing is enough. No sanding, painting, or sealing required.",
//     aestheticOptions:
//       "Available in smooth, matte, glossy, or wood-grain finishes. Offers a clean modern look with optional hidden-fastener systems for seamless installation.",
//     imageUrl: "images/originals/Claddings/pvc-cladding.jpg",
//   },
// ];
const slides = [
  { id: 1, image: "/images/originals/Claddings/joseph-front.jpeg" },
  { id: 2, image: "/images/originals/Claddings/mine.jpeg" },
  { id: 3, image: "/images/originals/Claddings/front-building.png" },
  { id: 4, image: "/images/originals/Claddings/other-front.png" },
  { id: 5, image: "/images/originals/Claddings/wall-composite.png" },
  { id: 6, image: "/images/originals/Claddings/cladding-post.jpg" },
  { id: 7, image: "/images/originals/Claddings/pvc-cladding.jpg" }
];


export const CladdingList = () => {
  

  return (
    <div style={{
                    backgroundImage: "url(/images/originals/backgroundMyth.avif)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}>
      <section className="video-section">
          <HeroVideo
              src="images/videos/fence-hero.mp4"
              videoId="slow-video"
              className="hero-video"
              pauseTime={4000}
          />
      </section>      
      
      <AnimatedSection>
        <SectionIntro 
            title="Explore Our Cladding Options" 
            description="From warm wood textures to low-maintenance composite and PVC, discover cladding solutions that elevate your ceilings, walls, pergolas, and outdoor structures with lasting style and protection."
        />
      </AnimatedSection> 
        
      {/* {showModal && selectedCladding && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <h2>
              {selectedCladding.name}
              <strong className="hero-strong"> | </strong>
            </h2>
            <img
              src={selectedCladding.imageUrl}
              alt={selectedCladding.name}
            />
            <p>
              <strong>Overview:</strong> {selectedCladding.overview}
            </p>
            <p>
              <strong>Durability:</strong> {selectedCladding.durability}
            </p>
            <p>
              <strong>Versatility:</strong> {selectedCladding.versatility}
            </p>
            <p>
              <strong>Maintenance:</strong> {selectedCladding.maintenance}
            </p>
            <p>
              <strong>Aesthetic Options:</strong>{" "}
              {selectedCladding.aestheticOptions}
            </p>
          </div>
        </div>
      )} */}
      <AnimatedSection>
          <FeatureShowcaseCarousel
            title="CLADDING SYSTEMS"
            subtitle="Project Showcase"
            mainImage="/images/originals/Claddings/cladding-pergolas-render.png"
            items={featuredCladdings}
          />

      </AnimatedSection>  
      <AnimatedSection>
        <section>
          <HeroBanner
            title="Cladding Service"
            subtitle="Transform ceilings, walls, and outdoor structures with premium cladding solutions in composite, wood, and PVC — designed to protect, enhance, and modernize your spaces."
            onButtonClick={() => (window.location.href = "/contactus")}
            imageUrl="/images/originals/Claddings/hero-cladding.jpeg"
          />
        </section>
      </AnimatedSection>
      <section className='myths-info'>
        <div className="myth-info-bg"></div>

        <AnimatedSection>
          <BannerImageHalf 
            image="images/originals/Claddings/wood-cladding-myth.png" 
            title="CLADDING WOOD MYTH" 
            subtitle="Many people believe wood cladding quickly deteriorates outdoors and requires constant maintenance. In reality, properly treated and sealed exterior wood cladding can withstand weather, moisture, and sun exposure for many years while delivering a warm, natural architectural look that synthetic materials often try to imitate."
            reversed={false}
          />
        </AnimatedSection>

        <AnimatedSection>
          <BannerImageHalf
            image="images/originals/Claddings/MyLogHouse.jpg" 
            title="CLADDING PVC MYTH" 
            subtitle="A common misconception is that PVC cladding looks artificial and lacks durability. Modern exterior-grade PVC systems are engineered to resist moisture, UV exposure, warping, and rot while maintaining a clean architectural finish. They provide a long-lasting solution with very little maintenance."
            reversed={true}
          /> 
        </AnimatedSection>

        <AnimatedSection>    
          <BannerImageHalf
            image="images/originals/Claddings/garage-composite.png" 
            title="CLADDING COMPOSITE MYTH" 
            subtitle="Some assume composite cladding fades quickly or cannot replicate the beauty of natural materials. In reality, modern composite systems are designed with advanced textures and color stability that resist fading, moisture, and insects while maintaining a consistent, elegant appearance for years."
            reversed={false}
          />
        </AnimatedSection>
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
    </div>
  );
};
