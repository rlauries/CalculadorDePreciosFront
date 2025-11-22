import { useEffect, useState } from 'react';
import './Gallery.css';
import '../../../pages/public/Home/Home.css';
import {Header} from '../../../componets/Header/Header.jsx';
import { HeroBanner } from '../../../componets/HeroBanner/HeroBanner.jsx';
import { TypeOfFenceMaterialOptions, TypeOfPergolaMaterialOptions } from '../../../assets/ServiceFileteredOptions.js';


const GalleryList = [
    {
      id : 1,
      name: "Composite Side Panels",
      imageUrl: "images/originals/Fences/Composite-Fence.png",
      serviceTypeId: 1,
      matrialId: 6
    },
    {
      id : 2,
      name: "Dura Fence",
      imageUrl: "images/originals/Fences/Fence-durafence.jpg",
      serviceTypeId: 1,
      matrialId: 2
    },
    {
      id : 3,
      name: "Fence chainlink",
      imageUrl: "images/originals/Fences/Fence-chainlink.jpg",
      serviceTypeId: 1,
      matrialId: 1
    },
    {
      id : 4,
      name: "Wood Panels",
      imageUrl: "images/originals/Fences/Wood-Fencing-Ideas-Blog.jpg",
      serviceTypeId: 1,
      matrialId: 4
    },
    {
      id : 5,
      name: "PVC Panels",
      imageUrl: "images/originals/Fences/PVC-Fence-1.jpg",
      serviceTypeId: 1,
      matrialId: 5
    },
    {
      id : 6,
      name: "Aluminum Panels",
      imageUrl: "images/originals/Fences/Fence-aluminumcustom.jpg",
      serviceTypeId: 1,
      matrialId: 3
    },
    {
      id : 7,
      name: "Aluminum Brise Vue Dune Maison",
      imageUrl: "images/originals/Fences/Aluminum_Brise-vue-dune-maison.jpeg",
      serviceTypeId: 1,
      matrialId: 3
    },
    {
      id : 8,
      name: "Composite NorthVan Charcoal.jpg",
      imageUrl: "images/originals/Fences/Composite_NorthVan_charcoal.jpg",
      serviceTypeId: 1,
      matrialId: 6
    },
    {
      id : 9,
      name: "Aluminum Fence Design Alumission",
      imageUrl: "images/originals/Fences/Aluminum-Fence-Design-Alumission.jpg",
      serviceTypeId: 1,
      matrialId: 3
    },
    {
      id : 10,
      name: "Aluminum Fence",
      imageUrl: "images/originals/Fences/ALUMINUM-FENCE-installer.jpg",
      serviceTypeId: 1,
      matrialId: 3
    },
    {
      id : 11,
      name: "Aluminum Fence Swing",
      imageUrl: "images/originals/Fences/aluminum-fence-swing.jpg",
      serviceTypeId: 1,
      matrialId: 3
    },
    {
      id : 12,
      name: "Vecteezy Private House",
      imageUrl: "images/originals/Fences/vecteezy_a-private-house-of-two-floors-with-triangular-roof-and-an_36155207.jpeg",
      serviceTypeId: 1,
      matrialId: 3
    },
    {
      id : 13,
      name: "Aluminum Portal",
      imageUrl: "images/originals/Fences/Aluminum-portal-03.jpg",
      serviceTypeId: 1,
      matrialId: 3
    },
    {
      id : 14,
      name: "Composite Fullsize Fence Plus Gate",
      imageUrl: "images/originals/Fences/Composite_Fullsize_Fence_Plus_Gate_04.webp",
      serviceTypeId: 1,
      matrialId: 6
    },
    {
      id : 15,
      name: "Composite Fence",
      imageUrl: "images/originals/Fences/Composite-Fence.png",
      serviceTypeId: 1,
      matrialId: 6
    },
    {
      id : 16,
      name: "Aluminum Front",
      imageUrl: "images/originals/Fences/il_fullxfull.6247871673_hfu8.webp",
      serviceTypeId: 1,
      matrialId: 3
    },
    {
      id : 17,
      name: "Led-Composite-classic-lightoak",
      imageUrl: "images/originals/Fences/led-Composite-classic-lightoak.webp",
      serviceTypeId: 1,
      matrialId: 6
    },
    {
      id : 18,
      name: "low+wood+fence",
      imageUrl: "images/originals/Fences/low+wood+fence.jpeg",
      serviceTypeId: 1,
      matrialId: 4
    },
    {
      id : 19,
      name: "modern+minimalist+garden+wall",
      imageUrl: "images/originals/Fences/modern+minimalist+garden+wall.jpeg",
      serviceTypeId: 1,
      matrialId: 4
    },
    {
      id : 20,
      name: "modern-fence--wood",
      imageUrl: "images/originals/Fences/modern-fence--wood.jpeg",
      serviceTypeId: 1,
      matrialId: 4
    },
    {
      id : 21,
      name: "PVC-gm4",
      imageUrl: "images/originals/Fences/PVC-gm4.jpg",
      serviceTypeId: 1,
      matrialId: 5
    },
    {
      id : 22,
      name: "PVC-horizons-saddle-iframe",
      imageUrl: "images/originals/Fences/PVC-horizons-saddle-iframe.jpg.webp",
      serviceTypeId: 1,
      matrialId: 5
    },
    {
      id : 23,
      name: "PVC-miami-slider",
      imageUrl: "images/originals/Fences/PVC-miami-slider-2.jpg",
      serviceTypeId: 1,
      matrialId: 5
    },
    {
      id : 24,
      name: "String Light Fence",
      imageUrl: "images/originals/Fences/String-Light-Fence.png",
      serviceTypeId: 1,
      matrialId: 3
    },
    {
      id : 25,
      name: "Pergola Aluminum",
      imageUrl: "images/originals/Pergolas/Pergola-Aluminum.jpeg",
      serviceTypeId: 2,
      matrialId: 2
    },
    {
      id : 26,
      name: "Pergola Steel",
      imageUrl: "images/originals/Pergolas/Pergola-Steel.jpeg",
      serviceTypeId: 2,
      matrialId: 1
    },
    {
      id : 27,
      name: "Smart Retractable Roof Pergola",
      imageUrl: "images/originals/Pergolas/smart-retractable-roof-pergola.jpg",
      serviceTypeId: 2,
      matrialId: 2
    },
    {
      id : 28,
      name: "String Light Pergola",
      imageUrl: "images/originals/Pergolas/string-light-pergola.jpg",
      serviceTypeId: 2,
      matrialId: 6
    },
    {
      id : 29,
      name: "Smart Technology for Ultimate Control",
      imageUrl: "images/originals/Pergolas/Smart-Technology-Customization-for-Ultimate-Control.jpeg",
      serviceTypeId: 2,
      matrialId: 2
    },
    {
      id : 30,
      name: "Designer Shade Solutions",
      imageUrl: "images/originals/Pergolas/Designer-Shade-Solutions.jpg",
      serviceTypeId: 2,
      matrialId: 2
    },
    {
      id : 31,
      name: "Auckland Style Stairs",
      imageUrl: "images/originals/Stairs/Auckland-by-Stylecraft-Stairs.jpg",
      serviceTypeId: 3,
      matrialId: 6
    },
    {
      id : 32,
      name: "Black Scaled",
      imageUrl: "images/originals/Stairs/black-scaled.webp",
      serviceTypeId: 3,
      matrialId: 6
    },
    {
      id : 33,
      name: "Custom Floating Stair",
      imageUrl: "images/originals/Stairs/custom-floating-stair-systems.webp",
      serviceTypeId: 3,
      matrialId: 6
    },
    {
      id : 34,
      name: "Doble Side Steel",
      imageUrl: "images/originals/Stairs/dobleSideSteel.jpg",
      serviceTypeId: 3,
      matrialId: 6
    },
    {
      id : 35,
      name: "Floating Stair",
      imageUrl: "images/originals/Stairs/floatingStair.jpg",
      serviceTypeId: 3,
      matrialId: 6
    },
    {
      id : 36,
      name: "Indoor Aluminum Stair",
      imageUrl: "images/originals/Stairs/indoorAluminumStair.jpg",
      serviceTypeId: 3,
      matrialId: 6
    },
    {
      id : 37,
      name: "wooden-stair",
      imageUrl: "images/originals/Stairs/wooden-stair.webp",
      serviceTypeId: 3,
      matrialId: 6
    },
    {
      id : 38,
      name: "Pergola Insulated",
      imageUrl: "images/originals/Pergolas/pergola-insulated.jpeg",
      serviceTypeId: 2,
      matrialId: 4
    },
    {
      id : 39,
      name: "Pergola Wood",
      imageUrl: "images/originals/Pergolas/Pergola-Wood.jpeg",
      serviceTypeId: 2,
      matrialId: 3
    },
    {
      id : 40,
      name: "Pergola Cedar Wood",
      imageUrl: "images/originals/Pergolas/IMG_7746.jpg",
      serviceTypeId: 2,
      matrialId: 3
    },
    {
      id : 41,
      name: "Pergola Cross Bar Wood",
      imageUrl: "images/originals/Pergolas/Custom-Wood-Grain-Aluminum-Shade-Structure.jpeg",
      serviceTypeId: 2,
      matrialId: 3
    },
    {
      id : 42,
      name: "Pergola Aluminum Mai",
      imageUrl: "images/originals/Pergolas/Targa-Large-main.webp",
      serviceTypeId: 2,
      matrialId: 2
    },
    {
      id : 43,
      name: "Pergola Insulated",
      imageUrl: "images/originals/Pergolas/insulated-white-patio-covers-.jpg",
      serviceTypeId: 2,
      matrialId: 4
    },
    {
      id : 44,
      name: "Pergola LED",
      imageUrl: "images/originals/Pergolas/67881decca9f7719266db8b9_Pic 3.jpg",
      serviceTypeId: 2,
      matrialId: 6
    },

];


const Gallery = () => {
  const [gallery] = useState(GalleryList);
  const [filteredGallery, setFilteredGallery] = useState([]);
  const [serviceTypeId, setServiceTypeId] = useState(0);
  const [selectedMateriaSelect, setSelectedMateriaSelect] = useState(7);
  //modal
  const [selecteImage, setSelecteImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const scrollDown = () => window.scrollBy({ top: 400, behavior: 'smooth' });
  
  const switchToFence = () => {
      setServiceTypeId(1);
      setFilteredGallery(gallery.filter(g => g.serviceTypeId === 1));
      setSelectedMateriaSelect(7);
      scrollDown();
  };
 
  const switchToPergola = () => {
      setServiceTypeId(2);
      setFilteredGallery(gallery.filter(g => g.serviceTypeId === 2));
      setSelectedMateriaSelect(7);
      scrollDown();
  };
  const switchToStair = () => {
    setServiceTypeId(3);
    setFilteredGallery(gallery.filter(g => g.serviceTypeId === 3));
    scrollDown();
  }


  useEffect(() => {
    let result = gallery;

    if (selectedMateriaSelect !== 7) {
      result = result.filter(g => g.matrialId === selectedMateriaSelect);
    }

    // si quieres filtrar también por serviceTypeId:
    if (serviceTypeId > 0) {
      result = result.filter(g => g.serviceTypeId === serviceTypeId);
    }

    setFilteredGallery(result);
  }, [gallery, selectedMateriaSelect, serviceTypeId]);
  
  const materialOptions =
    serviceTypeId === 1 ? TypeOfFenceMaterialOptions :
    serviceTypeId === 2 ? TypeOfPergolaMaterialOptions :
    [];

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
                    <p>A Showcase of Style</p>
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
            <div className="stair">
                <div className="text">
                    <label>
                        Stairs<strong> | </strong>
                    </label>
                    <p>Path To The sky</p>
                </div>
                <img src="images/originals/Stairs/custom-floating-stair-systems-small.png" alt="" />
                <button onClick={switchToStair}>Display More</button>
            </div>
            
        </div>
        {serviceTypeId !== 0  && (
            <div className="gallery-section">
                <h1>Service Gallery<strong> | </strong></h1>
                <div className="service-gallery-grid">
                    <div className="filtered-options">
                      
                      {(serviceTypeId === 1 || serviceTypeId === 2) && (
                        <div className="filteredOptions">
                          Filtered by:&nbsp;
                          <select
                            value={selectedMateriaSelect}
                            onChange={e => setSelectedMateriaSelect(Number(e.target.value))}
                          >
                            {materialOptions.map(m => (
                              <option key={m.id} value={m.id}>
                                {m.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>
                    

                    <div className="gallery-grid">
                      {filteredGallery.map((img) => (
                        <div key={img.id} className="gallery-card" onClick={() => OpenModal(img)}>
                          <img src={img.imageUrl} alt={img.name} />
                          <p>{img.name} <strong> | </strong></p>
                        </div>
                      ))}
                    </div>
                </div>
            </div>
        )}
        {showModal && selecteImage && (
          <div className='modal-overlay' onClick={ClosedModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className='close-button' onClick={ClosedModal}>×</button>
              <img src={selecteImage.imageUrl} alt="" />
              <h2>{selecteImage.name} <strong> | </strong></h2>
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