import './FenceList.css';
import { DesignTailorCard } from '../../../../componets/DesignTailorCard/DesignTailorCard.jsx';
import { HeroBanner } from '../../../../componets/HeroBanner/HeroBanner.jsx';
import { AnimatedSection } from '../../../../componets/AnimatedSection/AnimatedSection.tsx';
import { AnimatedShowCaseCarousel } from '../../../../componets/AnimatedShowCaseCarousel/AnimatedShowCaseCarousel.tsx';
import { SectionIntro } from '../../../../componets/SectionIntro/SectionIntro.tsx';
import { HeroVideo } from '../../../../componets/HeroVideo/HeroVideo.jsx';
import { FeatureShowcaseCarousel } from '../../../../componets/FeatureShowcaseCarousel/FeatureShowcaseCarousel.tsx';
import { BannerImageHalf } from '../../../../componets/Half-Image-Banner/BannerImageHalf.jsx';


const featureFences = [
  {
    id: 1,
    name: "Chain Link",
    imageUrl: "images/originals/Fences/Fence-chainlink.jpg",
    linkTo: "/fences/chainlink"
  },
  {
    id: 2,
    name: "DuraFence",
    imageUrl: "images/originals/Fences/Fence-durafence.jpg",
    linkTo: "/fences/durafence"
  },
  {
    id: 3,
    name: "Aluminum",
    imageUrl: "images/originals/Fences/Fence-aluminumcustom.jpg",
    linkTo: "/fences/aluminum"
  },
  {
    id: 4,
    name: "Wood",
    imageUrl: "images/originals/Fences/Wood-Fencing-Ideas-Blog.jpg",
    linkTo: "/fences/wood"
  },
  {
    id: 5,
    name: "PVC",
    imageUrl: "images/originals/Fences/PVC-Fence-1.jpg",
    linkTo: "/fences/pvc"
  },
  {
    id: 6,
    name: "Composite",
    imageUrl: "images/originals/Fences/Composite-Fence.png",
    linkTo: "/fences/composite"
  }
];
// const FencePanels = [
//   {
//     id: 1,
//     name: "Chain Link",
//     overview: "A chain link fence is a versatile and cost-effective fencing option that provides robust security and durability for a wide range of applications. Whether for residential, commercial, or industrial use, chain link fences offer a reliable solution to keep your property safe and secure.",
//     durability: "Made from high-quality galvanized steel, chain link fences are designed to withstand harsh weather conditions and resist corrosion.",
//     versatility: "Ideal for a variety of applications including residential yards, sports fields, playgrounds, schools, parks, industrial areas, and construction sites.",
//     maintenance: "Requires minimal upkeep compared to other fencing materials.",
//     aestheticOptions: "Available in different coatings and colors, including the classic silver galvanized finish and colored vinyl coatings such as black or green to blend with the environment or match your property’s aesthetic.",
//     imageUrl: "images/originals/Fences/Fence-chainlink.jpg",
//     linkTo: "/fences/chainlink"
//   },
//   {
//     id: 2,
//     name: "DuraFence",
//     overview: "Dura Fence is the ultimate fencing solution designed to offer unmatched strength, durability, and aesthetic appeal. Ideal for both residential and commercial applications, Dura Fence provides a secure and stylish boundary that stands the test of time.",
//     durability: "Constructed from high-grade, heavy-duty galvanized steel panels and posts, Dura Fence is built to withstand extreme weather conditions, including strong winds, heavy rain, and intense sunlight.",
//     versatility: "The robust steel construction provides a formidable barrier that deters unauthorized access and enhances the security of your property.",
//     maintenance: "The galvanized and coated steel panels require minimal upkeep.",
//     aestheticOptions: "Combines functionality with aesthetics, featuring a sleek, modern design that complements any property.",
//     imageUrl: "images/originals/Fences/Fence-durafence.jpg",
//     linkTo: "/fences/durafence"
//   },
//   {
//     id: 3,
//     name: "Aluminum Custom",
//     overview: "Elevate Your Property with Style and Functionality. Crafted with precision engineering and high-quality materials, our modern fencing solution offers a sleek aesthetic that enhances the beauty of any property while providing unmatched strength and longevity.",
//     durability: "The corrosion-resistant properties of aluminum ensure that your fence maintains its pristine appearance for years to come with minimal maintenance required.",
//     versatility: "Tailor your Aluminum Modern Fence to suit your unique preferences with a variety of design options, including different heights, panel widths, and color choices.",
//     maintenance: "Our aluminum modern fences are resistant to rust, rot, and corrosion.",
//     aestheticOptions: "Boasts clean lines, minimalist profiles, and sleek finishes, adding a touch of elegance and sophistication to your outdoor space.",
//     imageUrl: "images/originals/Fences/Fence-aluminumcustom.jpg",
//     linkTo: "/fences/aluminumcustom"
//   },
//   {
//     id: 4,
//     name: "Wood",
//     overview: "Wood fencing offers a timeless, natural look that blends seamlessly with outdoor environments. Ideal for privacy, decoration, or boundary marking, wood fences are highly customizable and provide warmth and charm to any space.",
//     durability: "While naturally strong, wood is vulnerable to weather, insects, and rot over time. Proper treatment can extend durability significantly.",
//     versatility: "Can be tailored in height, width, stain, and style — from traditional picket fences to solid privacy panels. Suitable for residential and decorative applications.",
//     maintenance: "Requires consistent upkeep including sealing, staining, and occasional repairs to prevent weathering and decay.",
//     aestheticOptions: "Delivers a warm, organic appearance with a wide range of stain and design options to suit rustic, classic, or modern aesthetics.",
//     imageUrl: "images/originals/Fences/Wood-Fencing-Ideas-Blog.jpg",
//     linkTo: "/fences/wood"
//   },
//   {
//     "id": 5,
//     "name": "PVC",
//     "overview": "PVC fencing is a low-maintenance, cost-effective alternative to traditional wood fencing. Resistant to moisture and pests, it is ideal for homeowners seeking clean aesthetics and reliable performance without frequent upkeep.",
//     "durability": "Highly durable and weather-resistant; it does not rot, rust, or attract insects. Designed to last for decades with minimal wear.",
//     "versatility": "Available in various heights, panel styles, and finishes, making it suitable for residential privacy, decorative boundaries, and pool enclosures.",
//     "maintenance": "Extremely low maintenance — no staining, painting, or sealing required. Occasional cleaning is sufficient to maintain appearance.",
//     "aestheticOptions": "Offers a clean, polished look with options for white, tan, and other finishes. Mimics the appearance of wood or lattice for added visual appeal.",
//     "imageUrl": "images/originals/Fences/PVC-Fence-1.jpg",
//     "linkTo": "/fences/pvc"
//   },
//   {
//     id: 6,
//     name: "Composite",
//     overview: "Composite fencing combines the strength of wood fibers with the durability of recycled plastic. It offers a modern, eco-friendly solution that balances style, strength, and sustainability.",
//     durability: "Exceptionally strong and long-lasting; resists cracking, fading, rotting, and insect damage. Ideal for high-performance fencing.",
//     versatility: "Can be customized with different colors, textures, and panel configurations. Great for privacy, security, and sound dampening.",
//     maintenance: "Requires very little maintenance compared to wood — no sealing, staining, or repainting. Retains its look with basic cleaning.",
//     aestheticOptions: "Sleek, modern look that resembles real wood with rich textures and contemporary color choices, perfect for high-end outdoor designs.",
//     imageUrl: "images/originals/Fences/Composite-Fence.png",
//     linkTo: "/fences/composite"
//   }
// ];
const slides = [
  { id: 1, image: "/images/originals/Fences/05329352.webp" },
  { id: 2, image: "/images/originals/Fences/PVC-gm4.jpg" },
  { id: 3, image: "/images/originals/Fences/jose-luis-gates.png" },
  { id: 4, image: "/images/originals/Fences/yan-gate.png" },
  { id: 5, image: "/images/originals/Fences/big-modern.jpeg" },
  { id: 6, image: "/images/originals/Fences/tennis-court.png" },
  { id: 7, image: "/images/originals/Fences/Aluminum-row-3-c.webp" }
];
const FenceList = () => {
 
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
            title="Explore Our Fence Designs" 
            description='We don’t just build fences — we create boundaries that bring peace, privacy that nurtures connection, and strength that protects what matters most.'
        />
      </AnimatedSection> 
      {/* <AnimatedSection>
          <div className="fence-list-grid">
            {fences.map((item) => (
              <div className="fence-card" key={item.id}>
                <div className="fence-image" onClick={() => OpenModal(item)}>
                  {item.imageUrl ? (
                    <div className="image-wrapper">
                      <img src={item.imageUrl} alt="" />
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
      {showModal && setSelectedFence && (
        <div className="modal-overlay" onClick={CloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={CloseModal}>×</button>
            <h2>{selectedFence.name}<strong class="hero-strong"> | </strong></h2>
            <img src={selectedFence.imageUrl} alt="" />
            <p><strong>Overview:</strong>{selectedFence.overview}</p>
            <p><strong>Durability:</strong>{selectedFence.durability}</p>
            <p><strong>Versatility:</strong>{selectedFence.versatility}</p>
            <p><strong>Maintenance:</strong>{selectedFence.maintenance}</p>
            <p><strong>Aesthetic Options:</strong>{selectedFence.aestheticOptions}</p>
          </div>
        </div>
      )}  */}
      <AnimatedSection>
        <FeatureShowcaseCarousel
          title="FENCE SYSTEMS"
          subtitle="Project Showcase"
          mainImage="/images/originals/Fences/rail-view.png"
          items={featureFences}
        />
      </AnimatedSection>
      <AnimatedSection> 
        <HeroBanner
          title="Fence Styles"
          subtitle="From classic to modern, discover the perfect fence that suits your needs and enhances your property’s appeal. Check out our diverse range of styles today!"
          onButtonClick={()=>window.location.href="/contactus"}
          imageUrl="/images/Privacy-Fence-Banner.jpg"
        />
      </AnimatedSection>
      <section>
          <div className='myths-info' 
              style={{
                  backgroundImage: "url(/images/originals/grey-vertical-paper-surface-texture-background.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
              }}
          >
              <AnimatedSection>
                  <BannerImageHalf 
                      image="images/originals/Fences/aluminum-myth.png" 
                      title="ALUMINUM FENCE MYTH" 
                      subtitle="Many people assume aluminum fences are lightweight and less durable than steel. In reality, modern powder-coated aluminum fencing is engineered to resist rust, corrosion, and harsh weather conditions while maintaining its strength and elegant appearance. It offers long-term durability with virtually no maintenance."
                      reversed={false}
                  />
              </AnimatedSection>
              <AnimatedSection>
                  <BannerImageHalf
                      image="images/originals/Fences/composite-myth.png" 
                      title="COMPOSITE FENCE MYTH" 
                      subtitle="A common misconception is that composite fencing looks artificial or lacks the warmth of natural materials. Today’s composite systems are designed with realistic textures and colors that replicate wood while offering superior resistance to moisture, fading, and insects. The result is a fence that keeps its appearance for years with minimal upkeep."
                      reversed={true} // Esto invierte el orden de imagen y texto
                  /> 
              </AnimatedSection>
              <AnimatedSection>    
                  <BannerImageHalf
                      image="images/originals/Fences/dura-fence-myth.png" 
                      title="DURAFENCE MYTH" 
                      subtitle="Some believe modern modular fence systems sacrifice strength for convenience. In reality, systems like DuraFence are engineered for both structural stability and long-term performance. Their reinforced panels and durable materials create a secure boundary that withstands weather, impact, and daily wear while maintaining a clean architectural look."
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
            buttonLabel="Contact Us"
            onButtonClick={() => (window.location.href = "/contactus")}
          />
      </AnimatedSection>
      <AnimatedSection>
          <DesignTailorCard/>
      </AnimatedSection>
    </div>
  )
};
export default FenceList;