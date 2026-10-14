import React, { lazy, Suspense, useEffect, useState } from 'react';
import './Gallery.css';
import {
  TypeOfFenceMaterialOptions,
  TypeOfPergolaMaterialOptions
} from '../../../assets/ServiceFileteredOptions.js';
import {
  GalleryShowcase,
  type GalleryCategory,
} from "../../../componets/GalleryShowcase/GalleryShowcase.tsx";  


import SEO from '../../../componets/SEO/SEO.tsx';
import LocalBusinessSchema from '../../../componets/SEO/LocalBusinessSchema.ts';
import type { SeoData } from '../../../componets/SEO/types.ts';
import BreadcrumbSchema from '../../../componets/SEO/BreadcrumbSchema.ts';
import SITE_CONFIG from '../../../componets/SEO/siteConfig.js';
import { PageHero } from '../../../componets/PageHero/PageHero.tsx';


const HomeImprovement = lazy(() =>
  import('../../../componets/HomeImprovement/HomeImprovement.jsx')
    .then(module => ({
      default: module.HomeImprovement
    }))
);

interface GalleryItem {
  id: number;
  name: string;
  imageUrl: string;
  serviceTypeId: number;
  matrialId: number;
}

interface MaterialOption {
  id: number;
  name: string;
}
const galleryCategories: GalleryCategory[] = [
  {
    id: 1,
    title: "FENCES",
    subtitle: "A Showcase of Style",
    image: "/images/originals/Fences/fence-wood-lights.webp",
    imageAlt: "Modern custom fence",
    link: "/fences",
  },
  {
    id: 2,
    title: "PERGOLAS",
    subtitle: "Elevate Your Outdoors",
    image: "/images/originals/Pergolas/big-britgt-pergola.webp",
    imageAlt: "Modern aluminum pergola",
    link: "/pergolas",
  },
  {
    id: 3,
    title: "STAIRS",
    subtitle: "Path To The Sky",
    image:
      "/images/originals/Stairs/custom-floating-stair-systems-small.webp",
    imageAlt: "Modern floating staircase",
    link: "/stairs",
  },
];

const GalleryList: GalleryItem[] = [
    // ----Fences----
    {
      id : 1,
      name: "Composite Side Panels",
      imageUrl: "images/originals/Fences/Composite-Fence.webp",
      serviceTypeId: 1,
      matrialId: 6
    },
    {
      id : 2,
      name: "Dura Fence",
      imageUrl: "images/originals/Fences/Fence-durafence.webp",
      serviceTypeId: 1,
      matrialId: 2
    },
    {
      id : 3,
      name: "Fence Chainlink",
      imageUrl: "images/originals/Fences/Fence-chainlink.webp",
      serviceTypeId: 1,
      matrialId: 1
    },
    {
      id : 4,
      name: "Wood Panels",
      imageUrl: "images/originals/Fences/Wood-Fencing-Ideas-Blog.webp",
      serviceTypeId: 1,
      matrialId: 4
    },
    {
      id : 5,
      name: "PVC Panels",
      imageUrl: "images/originals/Fences/PVC-Fence-1.webp",
      serviceTypeId: 1,
      matrialId: 5
    },
    {
      id : 6,
      name: "Aluminum Panels",
      imageUrl: "images/originals/Fences/Fence-aluminumcustom.webp",
      serviceTypeId: 1,
      matrialId: 3
    },
    {
      id : 7,
      name: "Aluminum Brise Vue Dune Maison",
      imageUrl: "images/originals/Fences/Aluminum_Brise-vue-dune-maison.webp",
      serviceTypeId: 1,
      matrialId: 3
    },
    {
      id : 8,
      name: "Composite NorthVan Charcoal.jpg",
      imageUrl: "images/originals/Fences/Composite_NorthVan_charcoal.webp",
      serviceTypeId: 1,
      matrialId: 6
    },
    {
      id : 9,
      name: "Aluminum Fence Design Alumission",
      imageUrl: "images/originals/Fences/Aluminum-Fence-Design-Alumission.webp",
      serviceTypeId: 1,
      matrialId: 3
    },
    {
      id : 10,
      name: "Aluminum Fence",
      imageUrl: "images/originals/Fences/ALUMINUM-FENCE-installer.webp",
      serviceTypeId: 1,
      matrialId: 3
    },
    {
      id : 11,
      name: "Aluminum Fence Swing",
      imageUrl: "images/originals/Fences/aluminum-fence-swing.webp",
      serviceTypeId: 1,
      matrialId: 3
    },
    {
      id : 12,
      name: "Aluminum Gate Swing",
      imageUrl: "images/originals/Fences/yan-gate.webp",
      serviceTypeId: 1,
      matrialId: 3
    },
    {
      id : 13,
      name: "Aluminum Portal",
      imageUrl: "images/originals/Fences/Aluminum-portal-03.webp",
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
      imageUrl: "images/originals/Fences/Composite-Fence.webp",
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
      imageUrl: "images/originals/Fences/low+wood+fence.webp",
      serviceTypeId: 1,
      matrialId: 4
    },
    {
      id : 19,
      name: "modern+minimalist+garden+wall",
      imageUrl: "images/originals/Fences/modern+minimalist+garden+wall.webp",
      serviceTypeId: 1,
      matrialId: 4
    },
    {
      id : 20,
      name: "modern-fence--wood",
      imageUrl: "images/originals/Fences/modern-fence--wood.webp",
      serviceTypeId: 1,
      matrialId: 4
    },
    {
      id : 21,
      name: "PVC-gm4",
      imageUrl: "images/originals/Fences/PVC-gm4.webp",
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
      imageUrl: "images/originals/Fences/PVC-miami-slider-2.webp",
      serviceTypeId: 1,
      matrialId: 5
    },
    {
      id : 24,
      name: "String Light Fence",
      imageUrl: "images/originals/Fences/String-Light-Fence.webp",
      serviceTypeId: 1,
      matrialId: 3
    },
    {
      id : 25,
      name: "Pergola Aluminum",
      imageUrl: "images/originals/Pergolas/Pergola-Aluminum.webp",
      serviceTypeId: 2,
      matrialId: 2
    },
    {
      id : 26,
      name: "Pergola Steel",
      imageUrl: "images/originals/Pergolas/Pergola-Steel.webp",
      serviceTypeId: 2,
      matrialId: 1
    },
    {
      id : 27,
      name: "Smart Retractable Roof Pergola",
      imageUrl: "images/originals/Pergolas/smart-retractable-roof-pergola.webp",
      serviceTypeId: 2,
      matrialId: 2
    },
    {
      id : 28,
      name: "String Light Pergola",
      imageUrl: "images/originals/Pergolas/string-light-pergola.webp",
      serviceTypeId: 2,
      matrialId: 6
    },
    {
      id : 29,
      name: "Smart Technology for Ultimate Control",
      imageUrl: "images/originals/Pergolas/Smart-Technology-Customization-for-Ultimate-Control.webp",
      serviceTypeId: 2,
      matrialId: 2
    },
    {
      id : 30,
      name: "Designer Shade Solutions",
      imageUrl: "images/originals/Pergolas/Designer-Shade-Solutions.webp",
      serviceTypeId: 2,
      matrialId: 2
    },
    // ----Stairs----
    {
      id : 31,
      name: "Auckland Style Stairs",
      imageUrl: "images/originals/Stairs/Auckland-by-Stylecraft-Stairs.webp",
      serviceTypeId: 3,
      matrialId: 6
    },
    {
      id : 32,
      name: "LED Light Stair",
      imageUrl: "images/originals/Stairs/9c89ee50ea5afe1c2e8672de75eee66a.webp",
      serviceTypeId: 3,
      matrialId: 6
    },
    {
      id : 33,
      name: "Aluminum Composite Stair",
      imageUrl: "images/originals/Stairs/composite.webp",
      serviceTypeId: 3,
      matrialId: 6
    },
    {
      id : 34,
      name: "Aluminum Wooden Stair",
      imageUrl: "images/originals/Stairs/Stairs.webp",
      serviceTypeId: 3,
      matrialId: 6
    },
    {
      id : 35,
      name: "Tile and Wood Stair",
      imageUrl: "images/originals/Stairs/Stair-and-tile.webp",
      serviceTypeId: 3,
      matrialId: 6
    },
    {
      id : 36,
      name: "Floating Stair",
      imageUrl: "images/originals/Stairs/floating01.webp",
      serviceTypeId: 3,
      matrialId: 6
    },
    {
      id : 37,
      name: "wooden-stair",
      imageUrl: "images/originals/Stairs/floating-cantilevered-stair-wood-treads-glass-railing-keuka-studios.webp",
      serviceTypeId: 3,
      matrialId: 6
    },
    // --- Pergolas  ---
    {
      id : 38,
      name: "Pergola Insulated",
      imageUrl: "images/originals/Pergolas/pergola-insulated.webp",
      serviceTypeId: 2,
      matrialId: 4
    },
    {
      id : 39,
      name: "Pergola Wood",
      imageUrl: "images/originals/Pergolas/Pergola-Wood.webp",
      serviceTypeId: 2,
      matrialId: 3
    },
    {
      id : 40,
      name: "Pergola Cedar Wood",
      imageUrl: "images/originals/Pergolas/IMG_7746.webp",
      serviceTypeId: 2,
      matrialId: 3
    },
    {
      id : 41,
      name: "Pergola Cross Bar Wood",
      imageUrl: "images/originals/Pergolas/Custom-Wood-Grain-Aluminum-Shade-Structure.webp",
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
      imageUrl: "images/originals/Pergolas/insulated-white-patio-covers-.webp",
      serviceTypeId: 2,
      matrialId: 4
    },
    {
      id : 44,
      name: "Pergola Cladding Ceiling",
      imageUrl: "images/originals/Pergolas/cladding-pergola-ceiling.webp",
      serviceTypeId: 2,
      matrialId: 6
    },
    {
      id : 45,
      name: "Wooden -Stair",
      imageUrl: "images/originals/Stairs/wooden-stair.webp",
      serviceTypeId: 3,
      matrialId: 6
    },

];
const seo: SeoData = {
    title: "Project Gallery | Pergolas, Fences, Stairs & Cladding",

    description:
        "Browse our portfolio of custom pergolas, fences, floating staircases, gates, and architectural cladding projects completed throughout South Florida.",

    canonical: "/gallery",

    image:
        "/images/Hero-Gallery-02.webp"
};

const Gallery = () => {
  const [gallery] = useState<GalleryItem[]>(GalleryList);

  const [filteredGallery, setFilteredGallery] =
    useState<GalleryItem[]>(GalleryList);

  const [serviceTypeId, setServiceTypeId] =
    useState<number>(0);

  const [selectedMateriaSelect, setSelectedMateriaSelect] =
    useState<number>(7);

  const [selecteImage, setSelecteImage] =
    useState<GalleryItem | null>(null);

  const [showModal, setShowModal] =
    useState<boolean>(false);

  

 
  


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
  
  const materialOptions: MaterialOption[] =
    serviceTypeId === 1
      ? TypeOfFenceMaterialOptions
      : serviceTypeId === 2
        ? TypeOfPergolaMaterialOptions
        : [];
  const OpenModal = (image: GalleryItem): void => {
    setSelecteImage(image);
    setShowModal(true);
  };

  const ClosedModal = (): void => {
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
                    name: "Gallery",
                    url: `${SITE_CONFIG.siteUrl}/gallery`
                }
            ])
        ]}
      />
      <main className="gallery-page"
          style={{
                      backgroundImage: "url(/images/originals/backgroundMyth.avif)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                  }}
      >
          
         
          
          <PageHero
            image="/images/originals/Fences/front-gate.png"
            imageAlt="Modern custom aluminum fence with integrated outdoor lighting"

            title="OUR COMPLETED PROJECTS"

            description="Explore a curated selection of custom fences, pergolas, stairs, and exterior claddings crafted with precision and purpose. Each project reflects our commitment to structural integrity, refined design, and long-term durability. From modern aluminum systems to timeless wood finishes, we build outdoor spaces that are engineered to perform and designed to inspire."

            breadcrumbs={[
              {
                label: "Home",
                path: "/",
              },
              {
                label: "Gallery",
              },
            ]}

            overlayOpacity={0.75}

            height="420px"

            imagePosition="center"

            showAccent={true}
          />
      
          
          <GalleryShowcase
            gallery={GalleryList}
            categories={galleryCategories}
            fenceMaterials={TypeOfFenceMaterialOptions}
            pergolaMaterials={TypeOfPergolaMaterialOptions}
            defaultCategory={1}
            allMaterialsId={7}
            title="SERVICE GALLERY"
          />
          <Suspense fallback={null}>
            <HomeImprovement />
          </Suspense>
          
          

            

          {/* ------ Modal Section ------- */}

          {showModal && selecteImage && (
            <div className='modal-overlay' onClick={ClosedModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className='close-button' onClick={ClosedModal}>×</button>
                <img src={selecteImage.imageUrl} alt="" loading="lazy" decoding="async" />
                <h2>{selecteImage.name} <strong> | </strong></h2>
                <div className='buttons-home'>
                      <button className='service-home' onClick={handleRoute}>
                        Check Here  
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
          
      </main>
    </>
  );
};
export default Gallery;