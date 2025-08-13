import React, { useEffect, useState } from 'react';
import '../../styles/Gallery.css';
import '../../styles/Home.css';
import {Header} from '../../componets/Header/Header.jsx';
import { HeroBanner } from '../../componets/HeroBanner/HeroBanner.jsx';

const ServiceType = [
  { id : 1, name: "Fence"},
  { id : 2, name: "Pergola"},
  { id : 3, name: "Stair"},
  { id : 4, name: "Railing"}
];

const GalleryList = [
  {
      id : 1,
      name: "Composite Side Panels",
      imageUrl: "images/originals/Fences/Composite-Fence.png",
      serviceTypeId: 1
    },
    {
      id : 2,
      name: "Dura Fence",
      imageUrl: "images/originals/Fences/Fence-durafence.jpg",
      serviceTypeId: 1
    },
    {
      id : 3,
      name: "Fence chainlink",
      imageUrl: "images/originals/Fences/Fence-chainlink.jpg",
      serviceTypeId: 1
    },
    {
      id : 4,
      name: "Wood Panels",
      imageUrl: "images/originals/Fences/Wood-Fencing-Ideas-Blog.jpg",
      serviceTypeId: 1
    },
    {
      id : 5,
      name: "PVC Panels",
      imageUrl: "images/originals/Fences/PVC-Fence-1.jpg",
      serviceTypeId: 1
    },
    {
      id : 6,
      name: "Aluminum Panels",
      imageUrl: "images/originals/Fences/Fence-aluminumcustom.jpg",
      serviceTypeId: 1
    },
    {
      id : 7,
      name: "Aluminum Brise Vue Dune Maison",
      imageUrl: "images/originals/Fences/Aluminum_Brise-vue-dune-maison.jpeg",
      serviceTypeId: 1
    },
    {
      id : 8,
      name: "Composite NorthVan Charcoal.jpg",
      imageUrl: "images/originals/Fences/Composite_NorthVan_charcoal.jpg",
      serviceTypeId: 1
    },
    {
      id : 9,
      name: "Aluminum Fence Design Alumission",
      imageUrl: "images/originals/Fences/Aluminum-Fence-Design-Alumission.jpg",
      serviceTypeId: 1
    },
    {
      id : 10,
      name: "Aluminum Fence",
      imageUrl: "images/originals/Fences/ALUMINUM-FENCE-installer.jpg",
      serviceTypeId: 1
    },
    {
      id : 11,
      name: "Aluminum Fence Swing",
      imageUrl: "images/originals/Fences/aluminum-fence-swing.jpg",
      serviceTypeId: 1
    },
    {
      id : 12,
      name: "Vecteezy Private House",
      imageUrl: "images/originals/Fences/vecteezy_a-private-house-of-two-floors-with-triangular-roof-and-an_36155207.jpeg",
      serviceTypeId: 1
    },
    {
      id : 13,
      name: "Aluminum Portal",
      imageUrl: "images/originals/Fences/Aluminum-portal-03.jpg",
      serviceTypeId: 1
    },
    {
      id : 14,
      name: "Composite Fullsize Fence Plus Gate",
      imageUrl: "images/originals/Fences/Composite_Fullsize_Fence_Plus_Gate_04.webp",
      serviceTypeId: 1
    },
    {
      id : 15,
      name: "Composite Fence",
      imageUrl: "images/originals/Fences/Composite-Fence.png",
      serviceTypeId: 1
    },
    {
      id : 16,
      name: "Aluminum Front",
      imageUrl: "images/originals/Fences/il_fullxfull.6247871673_hfu8.webp",
      serviceTypeId: 1
    },
    {
      id : 17,
      name: "Led-Composite-classic-lightoak",
      imageUrl: "images/originals/Fences/led-Composite-classic-lightoak.webp",
      serviceTypeId: 1
    },
    {
      id : 18,
      name: "low+wood+fence",
      imageUrl: "images/originals/Fences/low+wood+fence.jpeg",
      serviceTypeId: 1
    },
    {
      id : 19,
      name: "modern+minimalist+garden+wall",
      imageUrl: "images/originals/Fences/modern+minimalist+garden+wall.jpeg",
      serviceTypeId: 1
    },
    {
      id : 20,
      name: "modern-fence--wood",
      imageUrl: "images/originals/Fences/modern-fence--wood.jpeg",
      serviceTypeId: 1
    },
    {
      id : 21,
      name: "PVC-gm4",
      imageUrl: "images/originals/Fences/PVC-gm4.jpg",
      serviceTypeId: 1
    },
    {
      id : 22,
      name: "PVC-horizons-saddle-iframe",
      imageUrl: "images/originals/Fences/PVC-horizons-saddle-iframe.jpg.webp",
      serviceTypeId: 1
    },
    {
      id : 23,
      name: "PVC-miami-slider",
      imageUrl: "images/originals/Fences/PVC-miami-slider-2.jpg",
      serviceTypeId: 1
    },
    {
      id : 24,
      name: "String Light Fence",
      imageUrl: "images/originals/Fences/String-Light-Fence.png",
      serviceTypeId: 1
    },
    {
      id : 25,
      name: "Pergola Aluminum",
      imageUrl: "images/originals/Pergolas/Pergola-Aluminum.jpeg",
      serviceTypeId: 2
    },
    {
      id : 26,
      name: "Pergola Steel",
      imageUrl: "images/originals/Pergolas/Pergola-Steel.jpeg",
      serviceTypeId: 2
    },
    {
      id : 27,
      name: "Smart Retractable Roof Pergola",
      imageUrl: "images/originals/Pergolas/smart-retractable-roof-pergola.jpg",
      serviceTypeId: 2
    },
    {
      id : 28,
      name: "String Light Pergola",
      imageUrl: "images/originals/Pergolas/string-light-pergola.jpg",
      serviceTypeId: 2
    },
    {
      id : 29,
      name: "Smart Technology for Ultimate Control",
      imageUrl: "images/originals/Pergolas/Smart-Technology-Customization-for-Ultimate-Control.jpeg",
      serviceTypeId: 2
    },
    {
      id : 30,
      name: "Designer Shade Solutions",
      imageUrl: "images/originals/Pergolas/Designer-Shade-Solutions.jpg",
      serviceTypeId: 2
    }
];


const Gallery = () => {
  const [gallery] = useState(GalleryList);
  const [filteredGallery, setFilteredGallery] = useState([]);
  const [serviceTypeId, setServiceTypeId] = useState(0);
  //modal
  const [selecteImage, setSelecteImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const switchToFence = () => {
      setServiceTypeId(1);
      setFilteredGallery(gallery.filter(g => g.serviceTypeId === 1));
  };
 
  const switchToPergola = () => {
      setServiceTypeId(2);
      setFilteredGallery(gallery.filter(g => g.serviceTypeId === 2));
  };

  const OpenModal = (image) => {
    setSelecteImage(image);
    setShowModal(true);
  }
  const ClosedModal = () => {
    setSelecteImage(null);
    setShowModal(false);
  };

  const handleRoute = () => {
  if (!selecteImage) return; // seguridad por si está null

  if (selecteImage.serviceTypeId === 1) {
    window.location.href = "/fences";
  } else if (selecteImage.serviceTypeId === 2) {
    window.location.href = "/pergolas";
  }
};

  return (
    <>
        <Header/>
        <HeroBanner
          title="Gallery"
          subtitle="Browse through our curated collection of stunning fences, pergolas, and more. Each piece tells a story of quality, creativity!"
          onButtonClick={()=>window.location.href="/contactus"}
          imageUrl="/images/Hero-Gallery-02.png"
        />
        <div className='service-type'>
            <div className="fence">
                <div className='text'>
                    <label >
                        Fences<strong> | </strong>
                    </label>
                    <p>A Showcase of Style & Strength</p>
                </div>
                <img src="images/originals/Fences/fence-wood-lights.jpg" alt="" />
                <button onClick={switchToFence}>Display More</button>
            </div>
            <div className="pergola">
                <div className="text">
                    <label>
                        Pergolas<strong> | </strong>
                    </label>
                    <p>Elevate Your Outdoors</p>
                </div>
                <img src="images/originals/Pergolas/big-britgt-pergola.webp" alt="" />
                <button onClick={switchToPergola}>Display More</button>
            </div>
            
        </div>
        {serviceTypeId !== 0  && (
            <div className="gallery-section">
                <h1>Service Gallery<strong> | </strong></h1>
                <div className="gallery-grid">
                    {filteredGallery.map((img, index) => (
                    <div key={index} className="gallery-card" onClick={()=>{OpenModal(img)}}>
                        <img src={img .imageUrl} alt={img.name} />
                        <p>{img.name} <strong> | </strong></p>
                    </div>
                    ))}
                </div>
            </div>
        )}
        {showModal && setSelecteImage && (
          <div className='modal-overlay' onClick={ClosedModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className='close-button' onClick={ClosedModal}>×</button>
              <img src={selecteImage.imageUrl} alt="" />
              <p>{selecteImage.name} <strong> | </strong></p>
              <div className='buttons-home'>
                    <button className='service-home' onClick={handleRoute}>
                      Check This Service  
                    </button>
                    <button className='contactus-home' 
                            onClick={()=>window.location.href="/contactus"}
                    >
                      Contact Us
                    </button>
                </div>
            </div>
          </div>
        )}
        
    </>
    
  );
};
export default Gallery;