import React, { useEffect, useState } from 'react';
import '../styles/PergolaList.css'; // si quieres agregar estilos aparte
import { Header } from '../componets/Header';
import { DesignTailorCard } from '../componets/DesignTailorCard';

export const PergolaList = () => {
  const [pergolas, setPergolas] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchPergolas = async () => {
      try {
        const response = await fetch("https://localhost:7142/api/pergola/list");
        if (!response.ok) throw new Error("Failed to fetch pergolas");
        const data = await response.json();
        setPergolas(data);
      } catch (error) {
        console.error("Error loading pergolas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPergolas();
  }, []);

  if (loading) return <p>Loading pergolas...</p>;

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
                    <img src={`https://localhost:7142${item.imageUrl}`} alt={item.name} />
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
              <h2>{selectedPergola.name}</h2>
              <img src={`https://localhost:7142${selectedPergola.imageUrl}`} alt={selectedPergola.name} />
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
