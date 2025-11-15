import { useState } from 'react';
import './PergolaList.css'; // si quieres agregar estilos aparte
import { Header } from '../../../../componets/Header/Header';
import { DesignTailorCard } from '../../../../componets/DesignTailorCard/DesignTailorCard';

const PergolasDB = [
  {
    id: 1,
    name: "Steel Pergola",
    overview: "A steel pergola is known for its strength and durability. It is ideal for modern designs that require a sleek, industrial look. Steel pergolas can withstand harsh weather conditions, including heavy winds and snow, due to their robust structure. However, they may require periodic maintenance to prevent rust and corrosion unless they are made of galvanized or powder-coated steel.",
    durability: "Extremely durable, highly resistant to wind, rust-resistant if treated properly; very strong against heavy loads.",
    maintenance: "Low to medium maintenance; occasional repainting or anti-rust treatment required depending on climate.",
    appearance: "Industrial, strong, and modern aesthetic; can look very sleek or very heavy depending on design.",
    cost: "Medium to High; steel material + installation can be expensive but long-lasting.",
    imageUrl: "images/originals/Pergolas/Pergola-Steel.jpeg"
  },
  {
    id: 2,
    name: "Aluminum Pergola",
    overview: "Aluminum pergolas are lightweight, rust-resistant, and low maintenance, making them perfect for coastal areas or locations with high humidity. They offer a modern appearance and can be powder-coated in various colors to match your outdoor decor. Aluminum is not as strong as steel but provides excellent resistance to weather elements, including UV radiation.",
    durability: "Very durable, naturally corrosion-resistant, lightweight but strong; excellent for most climates.",
    maintenance: "Very low maintenance; occasional cleaning is enough. Does not rust.",
    appearance: "Sleek, clean, and modern; available in many colors and finishes.",
    cost: "Medium; cheaper than steel, but higher than wood if premium coatings are used.",
    imageUrl: "images/originals/Pergolas/Pergola-Aluminum.jpeg"
  },
  {
    id: 3,
    name: "Wood Pergola",
    overview: "Wood pergolas offer a natural and classic look that blends seamlessly into gardens and outdoor spaces. Made from materials such as cedar, pine, or redwood, they can be customized with various stains and finishes. While wood pergolas provide a warm, organic aesthetic, they require regular maintenance, including sealing and staining, to protect against weathering, pests, and rot.",
    durability: "Moderate durability; needs regular maintenance (staining, sealing) to resist rot, insects, and weather damage.",
    maintenance: "High maintenance; needs frequent treatment to avoid rotting, cracking, or pest damage.",
    appearance: "Natural, warm, classic look; easily customizable but varies based on wood type.",
    cost: "Low to Medium; materials can be affordable, but high labor costs for custom work and high long-term maintenance costs.",
    imageUrl: "images/originals/Pergolas/Pergola-Wood.jpeg"
  },
  {
    id: 4,
    name: "Insulated Pergola",
    overview: "Insulated pergolas come with a roofing system that includes a layer of insulation, providing better temperature control. They are designed to keep the area beneath cool in the summer and warm in the winter, making them perfect for year-round use. These pergolas often come with additional features like integrated lighting, fans, or heating systems.",
    durability: "Very high durability; roof provides strong weather protection and insulation preserves materials from extreme temperatures.",
    maintenance: "Very low maintenance; insulated roof panels are designed to last decades with minimal upkeep.",
    appearance: "Modern and luxurious appearance; solid roof gives a finished, \"indoor-outdoor room\" feel.",
    cost: "High; insulated panels and extra engineering make it one of the most expensive options upfront.",
    imageUrl: "images/originals/Pergolas/pergola-insulated.jpeg"
  },
  {
    id: 5,
    name: "Retractable Roof Pergola",
    overview: "Retractable roof pergolas provide flexible outdoor coverage with the ability to open or close the roof as needed. Perfect for year-round use, they adapt to sun, shade, and rain with ease.",
    durability: "Built with high-grade aluminum or composite materials, offering excellent resistance to wind, rain, and UV rays.",
    maintenance: "Low to medium maintenance; motorized systems may require occasional servicing, but the frame itself is highly resistant.",
    appearance: "Modern and elegant, offering clean lines and a high-tech appearance that blends function with architectural beauty.",
    cost: "High cost; includes mechanical or motorized systems and premium materials, but offers exceptional comfort and flexibility.",
    imageUrl: "images/originals/Pergolas/smart-retractable-roof-pergola.jpg"
  },
  {
    id: 6,
    name: "LED Light Pergola",
    overview: "LED light pergolas elevate outdoor living by integrating ambient lighting directly into the structure. Ideal for evening gatherings, romantic dinners, or showcasing garden features at night.",
    durability: "Structure typically made from aluminum or PVC, offering high durability and weather resistance. LEDs are long-lasting and designed for outdoor use.",
    maintenance: "Very low maintenance; LED systems are energy-efficient and require minimal attention. Occasional cleaning of light fixtures recommended.",
    appearance: "Stylish and modern, creating a sophisticated nighttime atmosphere. Lighting can be warm, cool, or color-adjustable depending on the system.",
    cost: "Medium to high cost depending on lighting system complexity and material, but adds significant ambiance and value.",
    imageUrl: "images/originals/Pergolas/string-light-pergola.jpg"
  }
];

const PergolaList = () => {
  const [pergolas] = useState(PergolasDB);
  const [selectedPergola, setSelectedPergola] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (pergola) => {
    setSelectedPergola(pergola);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedPergola(null);
    setShowModal(false);
  };

  
  

  return (
    <div className='pergola-container'>
      <Header />
      <section>
        <img className='hero-image' src="images/20250430_1703_Modern Poolside Pergola_simple_compose_01jt481tj6enyry3vt3fb4yz26.png" alt="HeroBanner" />
        <div className="section-title">
            <h2>Explore Our Pergola Styles</h2>
            <p className="subtitle">
              Discover the perfect pergola that suits your lifestyle — from modern steel designs to classic wooden structures. Compare features and find your ideal match.
            </p>
        </div>

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
        )}
     
        <DesignTailorCard/>
      </section>
      
    </div>
    
  );
};
export default PergolaList;