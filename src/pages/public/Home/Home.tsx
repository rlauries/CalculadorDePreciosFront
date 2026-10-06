import React, { lazy, Suspense } from "react";

import { FrequentlyAskQuestion } from '../../../componets/FrequentlyAskQuestion/FrequentlyAskQuestion.jsx';
import FAQSchema from "../../../componets/SEO/FAQSchema.ts";
import { faqItems } from "../../../componets/FrequentlyAskQuestion/faqData.ts";
import './Home.css';
import { BannerImageHalf } from '../../../componets/Half-Image-Banner/BannerImageHalf.tsx';

import { AnimatedSection } from '../../../componets/AnimatedSection/AnimatedSection.tsx';
import { PromoTicker } from '../../../componets/PromoTicker/PromoTicker.tsx';
import SEO from '../../../componets/SEO/SEO.tsx';
import LocalBusinessSchema from '../../../componets/SEO/LocalBusinessSchema.ts';
import type { SeoData } from '../../../componets/SEO/types.ts';
import BreadcrumbSchema from '../../../componets/SEO/BreadcrumbSchema.ts';
import SITE_CONFIG from '../../../componets/SEO/siteConfig.js';
import OrganizationSchema from "../../../componets/SEO/OrganizationSchema.ts";
import VideoSchema from "../../../componets/SEO/VideoSchema.ts";
import { HeroBanner } from "../../../componets/HeroBanner/HeroBanner.tsx";
import { FeatureIntro } from "../../../componets/FeatureIntro/FeatureIntro.tsx";
import { ServicesGrid } from "../../../componets/ServicesGrid/ServicesGrid.tsx";



const PergolaSlider = lazy(() =>
  import("../../../componets/PergolaSlider/PergolaSlider.tsx")
    .then(module => ({ default: module.PergolaSlider }))
);

const FenceSlider = lazy(() =>
  import("../../../componets/FenceSlider/FenceSlider.tsx")
    .then(module => ({ default: module.FenceSlider }))
);


const seo : SeoData = {
    title:
        "Custom Welding, Pergolas, Fences & Cladding in South Florida",

    description:
        "Lauries Welding Group provides custom pergolas, fences, gates, staircases, architectural cladding, and metal fabrication services throughout South Florida.",

    canonical: "/",

    image:
        "/images/originals/Claddings/Capture-1.webp"
};
const Home = () => {
   
  return (
    <>
         <SEO
            title={seo.title}
            description={seo.description}
            canonical={seo.canonical}
            image={seo.image}
            type="website"
            schemas={[
                OrganizationSchema(),
                LocalBusinessSchema(),
                BreadcrumbSchema([
                    {
                        name: "Home",
                        url: `${SITE_CONFIG.siteUrl}/`
                    }
                ]),
                FAQSchema(faqItems),
                VideoSchema({
                    name: "Lauries Welding Group Custom Fabrication Projects",

                    description:
                    "A showcase of custom welding, pergolas, stairs, fences, gates, cladding and metal fabrication projects by Lauries Welding Group in South Florida.",

                    thumbnailUrl:
                    "/images/videos/product-promo-poster.webp",

                    contentUrl:
                    "/images/videos/product-promo.mp4",

                    uploadDate: "YYYY-MM-DD",
                }),
            ]}
         />

        <main className='home-container'
            style={{
                        backgroundImage: "url(/images/originals/backgroundMyth.avif)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
        >
            <section className="hero-section">
               <HeroBanner
                    image="/images/home-hero-collage.png"
                    title="CUSTOM OUTDOOR STRUCTURES"
                    subtitle="BUILT TO LAST. DESIGNED FOR YOU."
                    services={[
                        "PERGOLAS",
                        "FENCES & GATES",
                        "STAIRS & RAILINGS",
                        "CLADDING"
                    ]}
                    primaryButtonText="GET A FREE ESTIMATE"
                    primaryButtonLink="/contactus"
                    secondaryButtonText="VIEW OUR PROJECTS"
                    secondaryButtonLink="/gallery"
                />
            </section>
            <PromoTicker/>
            <FeatureIntro
                title="DESIGNED TO LAST"
                description="We are a fabrication-driven company dedicated to building durable, functional, and visually striking outdoor structures. From custom fences and gates to pergolas, stairs, and exterior cladding systems, every project is engineered with precision and built to perform. Our commitment is simple: quality craftsmanship, honest work, and structures designed to last."
                image="/images/originals/Fences/design-an-aluminum-decorative-fence-for-the-front-yard-of-modern-houses.webp"
                imageAlt="Modern custom aluminum fence and gate by Lauries Welding Group"
            />

            
            
            
            {/* -------- About ---------*/}
           <ServicesGrid
                services={[
                    {
                    title: "PERGOLAS",
                    description: "Custom aluminum pergolas with style and durability.",
                    link: "/pergolas",
                    linkText: "Explore Pergolas",
                    icon: "/images/icons/pergola-icon.png",
                    },
                    {
                    title: "FENCES & GATES",
                    description: "Modern fences and gates built for security and beauty.",
                    link: "/fences",
                    linkText: "View Fences",
                    icon: "/images/icons/fence-icon.png",
                    },
                    {
                    title: "STAIRS & RAILINGS",
                    description: "Custom metal stairs and railings built with precision.",
                    link: "/stairs",
                    linkText: "View Stairs",
                    icon: "/images/icons/stair-icon.png",
                    },
                    {
                    title: "CLADDING",
                    description: "Architectural cladding that transforms any space.",
                    link: "/claddings",
                    linkText: "View Cladding",
                    icon: "/images/icons/cladding-icon.png",
                    },
                ]}
            />
            
            <section className='home-services-sliders'>
                <AnimatedSection>
                    <Suspense fallback={null}>
                        <PergolaSlider />
                    </Suspense>
                </AnimatedSection>
            
                <AnimatedSection>
                    <Suspense fallback={null}>
                        <FenceSlider />
                    </Suspense>
                </AnimatedSection>
            </section>
        
    
            <section>
                <div className='myths-info' 
                
                >
                    <div className="myth-info-bg"></div>
                    <AnimatedSection>
                        <BannerImageHalf 
                            image="/images/originals/Pergolas/IMG_7746.webp" 
                            title=" WOOD PERGOLA MYTH" 
                            subtitle="Discover the truth behind wood pergolas and why they're a durable, timeless choice for your outdoor space. Don't let misconceptions hold you back!"
                            reversed={false}
                            link="/pergolas"

                        />
                    </AnimatedSection>
                    <AnimatedSection>
                        <BannerImageHalf
                            image="/images/originals/Fences/design-an-aluminum-decorative-fence-for-the-front-yard-of-modern-houses.webp" 
                            title=" OUTDOOR LIGHTING MYTH" 
                            subtitle="Learn how outdoor string LED lights are not only energy-efficient and long-lasting but also weather-resistant, providing a vibrant and cozy atmosphere year-round. Say goodbye to concerns about durability and maintenance, and illuminate your outdoor spaces with ease and style."
                            reversed={true} // Esto invierte el orden de imagen y texto
                            link="/fences"
                        /> 
                    </AnimatedSection>
                    <AnimatedSection>    
                        <BannerImageHalf
                            image="/images/originals/Claddings/wood-cladding-myth.webp" 
                            title="PVC Cladding Myth" 
                            subtitle="Modern exterior-grade PVC is engineered to resist moisture, UV exposure, warping, and rot — making it a reliable and long-lasting solution for pergolas. It delivers a clean architectural finish with minimal maintenance."
                            reversed={false}
                            link="/claddings"

                        />
                    </AnimatedSection>    
                </div>
            </section>
            <section className="gray-gradient-section">
                <div className="gray-gradient-bottom" />
            </section>
            <section>
                <div className='forth-banner'>
                    <AnimatedSection>
                        <span className='info'>
                            <div className="info-subtitle">
                                <h2>Personalized Service <strong>|</strong></h2>
                            </div>
                            <p>
                                From concept to completion, we deliver top-quality fabrication and structural solutions that stand the test of time. Our team is committed to excellence in every weld, every project, every time.
                            </p>
                        </span>
                        
                        <img src="/images/workers-banner.webp" alt="" />
                    </AnimatedSection>   
                </div>
                
            </section>
            <section>
            
                <AnimatedSection>
                    <FrequentlyAskQuestion/>
                </AnimatedSection>
            </section>
            
                    
        
        </main>
    </>                
  )
}
export default Home;