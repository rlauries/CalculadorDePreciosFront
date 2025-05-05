import React, { useState, useEffect} from 'react';
import '../styles/FenceList.css';
import { DesignTailorCard } from '../componets/DesignTailorCard/DesignTailorCard.jsx';
  

export const FenceList = () => {
    const [fences, setFences] = useState([]);
    const [selectedFence, setSelectedFence] = useState(null);
    const [showModal, setShowModal] = useState(false);
    
    const OpenModal = (fences) => {
      setSelectedFence(fences);
      setShowModal(true);
    };
    const CloseModal = () => {
      setSelectedFence(null);
      setShowModal(false);
    }
    
    useEffect(() => {
      
      const fetchFences = async () => {
        try {
          const response = await fetch("https://localhost:7142/api/FencePanel/list");
          if (!response.ok) throw new Error("Failed to fetch fences");
          const data = await response.json();
          setFences(data);
        
        } catch (error) {
          console.error("Error loading fences:", error);
        } 
      };

      fetchFences();
      
    }, []);
  return (
    <>
      
      <div>
        <img className='hero-image' src="images/Protecte-the-moment-you-love.png" alt="HeroBanner" />
      </div>
      <div className="section-title">
        <h2>Explore Our Fence Designs</h2>
        <p className="subtitle">
        We don’t just build fences — we create boundaries that bring peace, privacy that nurtures connection, and strength that protects what matters most.
        </p>
      </div>
      <div className="fence-list-grid">
        {fences.map((item) => (
          <div className="fence-card" key={item.id}>
            <div className="fence-image" onClick={() => OpenModal(item)}>
              {item.imageUrl ? (
                <div className="image-wrapper">
                  <img src={`https://localhost:7142${item.imageUrl}`} alt="" />
                  <div className="image-label">{item.name}</div>
                </div>
              ) : (
                <div className="no-image">No Image</div>
              )}      
            </div>
            
          </div>
        ))}
      </div>
      {showModal && setSelectedFence && (
        <div className="modal-overlay" onClick={CloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={CloseModal}>×</button>
            <h2>{selectedFence.name}</h2>
            <img src={`https://localhost:7142${selectedFence.imageUrl}`} alt="" />
            <p><strong>Overview:</strong>{selectedFence.overview}</p>
            <p><strong>Durability:</strong>{selectedFence.durability}</p>
            <p><strong>Versatility:</strong>{selectedFence.versatility}</p>
            <p><strong>Maintenance:</strong>{selectedFence.maintenance}</p>
            <p><strong>Aesthetic Options:</strong>{selectedFence.aestheticOptions}</p>
          </div>
        </div>
      )}
      <div>
        <DesignTailorCard/>
      </div>
    </>
  )
};
