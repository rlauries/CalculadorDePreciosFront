import React, { useState } from 'react'
import { HeroBanner } from '../../../../componets/HeroBanner/HeroBanner'
import { DesignTailorCard } from '../../../../componets/DesignTailorCard/DesignTailorCard';


const StairDB = [
  {
    id: 1,
    name: 'Aluminum - Wood ',
    overview: "A central staircase with an aluminum and wood combination creates a warm yet contemporary architectural statement. The aluminum frame provides clean modern lines and structural strength, while the wood treads add natural beauty and visual contrast. This hybrid design works exceptionally well in open-concept spaces, turning the staircase into a functional centerpiece.",
    durability: "Highly durable; the aluminum structure resists corrosion, warping, and wear, while properly sealed hardwood treads maintain long-term strength and stability. Designed to handle heavy daily use without compromising aesthetics.",
    maintenance: "Low to medium maintenance; aluminum requires minimal care, while wood may need occasional cleaning or refinishing to preserve its appearance and texture.",
    appearance: "Modern, elegant, and visually balanced. The contrast between metal and wood enhances the staircase’s sculptural presence, creating a centerpiece that feels both warm and contemporary.",
    cost: "Medium to High; the combination of premium hardwood and custom aluminum fabrication increases material and installation costs but delivers long-lasting style and structural performance.",
    imageUrl: '/images/originals/Stairs/wooden-stair.png'

  },
  {
    id: 2,
    name: 'Floating Staircase',
    overview: "A floating wood staircase offers a clean, minimalist aesthetic that creates the illusion of suspended steps. Designed to bring lightness and openness to any space, this style blends natural warmth with contemporary architecture. Its sleek profile enhances both modern homes and commercial interiors, transforming the staircase into a striking design feature.",
    durability: "Strong and reliable when engineered properly; hardwood treads and concealed steel brackets provide excellent structural stability. Built to withstand daily foot traffic without compromising its floating appearance.",
    maintenance: "Medium maintenance; wood requires periodic cleaning and occasional refinishing to preserve its color and protect against wear. The hidden support structure typically requires minimal upkeep.",
    appearance: "Minimalist, elegant, and visually dramatic. The floating effect, paired with the natural beauty of wood, creates a centerpiece that feels light, modern, and architecturally refined.",
    cost: "Medium to High; floating staircases require precise engineering, high-quality hardwood, and specialized installation, which can increase overall project cost but deliver a premium aesthetic.",
    imageUrl: '/images/originals/Stairs/floating01.jpg'
  },
  {
    id: 3,
    name: 'Aluminum Composite',
    overview: "An aluminum composite outdoor staircase offers exceptional weather resistance and structural stability, making it ideal for exterior applications. The aluminum framework provides strength and corrosion resistance, while composite treads mimic the look of natural wood without the maintenance. This combination delivers a clean, modern appearance that performs exceptionally well in harsh climates.",
    durability: "Extremely durable. Aluminum resists rust, moisture, UV exposure, and temperature fluctuations. Composite treads are resistant to fading, cracking, insects, and rot, ensuring long-term performance even in demanding outdoor conditions.",
    maintenance: "Low maintenance. Composite steps require only occasional cleaning to remove dirt or debris, and aluminum structures typically need minimal upkeep beyond periodic rinsing. No sealing, staining, or repainting is required.",
    appearance: "Sleek, modern, and highly consistent in color and texture. Composite materials offer the aesthetic of wood but maintain a uniform finish that does not degrade over time. Perfect for contemporary homes, patios, terraces, and commercial outdoor spaces.",
    cost: "Medium to High; while composite materials and aluminum fabrication may have a higher initial cost than traditional wood, the long-term savings in maintenance and longevity make it a cost-effective investment.",
    imageUrl: '/images/originals/Stairs/composite.jpg'
  },

];

export const StairList = () => {

  const [stairs] = useState(StairDB);
  const [selectedStair, setSelectedStair] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (stair) => {
    setSelectedStair(stair);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedStair(null);
    setShowModal(false);
  };

  return (
    <div>
        <section>
          <HeroBanner
            title="Stair Services"
            subtitle='Enhance your space with our expert stair solutions. From elegant designs to sturdy constructions, we provide stairs that combine safety and style for every home and business.'
            onButtonClick={()=>window.location.href="/contactus"}
            imageUrl="/images/originals/Stairs/Nilis-house.png"
          />
        </section>

         <div className="section-title">
            <h2>Explore Our Stair Design</h2>
            <p className="subtitle">
              Discover the perfect modern stair design that elevates your space — from sleek floating steps to bold architectural structures. Explore styles that blend function, safety, and contemporary elegance.</p>
        </div>
        <div className="pergola-list-grid">
          {stairs.map((item) => (
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
        {showModal && selectedStair && (
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
        )}
        <DesignTailorCard/>

    </div>
  )
}
