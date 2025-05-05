import React, { useEffect, useState } from 'react';
import '../../styles/Gallery.css';
import {Header} from '../../componets/Header/Header.jsx';

export const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [serviceTypeId, setServiceTypeId] = useState(0);
  //modal
  const [selecteImage, setSelecteImage] = useState(null);
  const [showModal, setShowModal] = useState(false);


  const fetchGallery = async (pageNumber) => {
    try {
      const response = await fetch(
        `https://localhost:7142/api/gallery/list?serviceTypeId=${serviceTypeId}&page=${pageNumber}`
      );
      if (!response.ok) throw new Error('Failed to load gallery');

      const data = await response.json();
      setGallery(data.items);
      setPage(data.currentPage);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const switchService = () => {
        if(serviceTypeId === 2 || serviceTypeId === 0 )  
        {
            setServiceTypeId(1)
            setPage(1)
        }    
        else if(serviceTypeId === 1 || serviceTypeId === 0 )  
        {
            setServiceTypeId(2)
            setPage(1)
        }    
  };

  useEffect(() => {
    fetchGallery(page);
  }, [page, serviceTypeId]);

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };
  const OpenModal = (image) => {
    setSelecteImage(image);
    setShowModal(true);
  }
  const ClosedModal = () => {
    setSelecteImage(null);
    setShowModal(false);
  };

  return (
    <>
        <Header/>
        <div>
            <img className='hero-image' src="images/Hero-Gallery-02.png" alt="HeroBanner" />
        </div>
        <div className='service-type'>
            <div className="fence">
                <div className='text'>
                    <label >
                        Fences<strong> | </strong>
                    </label>
                    <p>A Showcase of Style & Strength</p>
                </div>
                <img src="images/fence-wood-lights.jpg" alt="" />
                <button onClick={() => {switchService()}}>Display More</button>
            </div>
            <div className="pergola">
                <div className="text">
                    <label>
                        Pergolas<strong> | </strong>
                    </label>
                    <p>Elevate Your Outdoors</p>
                </div>
                <img src="images/big-britgt-pergola.webp" alt="" />
                <button onClick={() => {switchService()}}>Display More</button>
            </div>
            
        </div>
        {serviceTypeId !== 0 && (
            <div className="gallery-section">
                <h2>Service Gallery</h2>
                <div className="gallery-grid">
                    {gallery.map((img, index) => (
                    <div key={index} className="gallery-card" onClick={()=>{OpenModal(img)}}>
                        <img src={`https://localhost:7142${img .imageUrl}`} alt={img.name} />
                        <p>{img.name}</p>
                    </div>
                    ))}
                </div>

                <div className="pagination-controls">
                    <button onClick={prevPage} disabled={page === 1}>← Prev</button>
                    <span>Page {page} of {totalPages}</span>
                    <button onClick={nextPage} disabled={page === totalPages}>Next →</button>
                </div>
            </div>
        )}
        {showModal && setSelecteImage && (
          <div className='modal-overlay' onClick={ClosedModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className='close-button' onClick={ClosedModal}>×</button>
              <img src={`https://localhost:7142${selecteImage.imageUrl}`} alt="" />
              <p><strong>{selecteImage.name}</strong></p>
            </div>
          </div>
        )}
        
    </>
    
  );
};
