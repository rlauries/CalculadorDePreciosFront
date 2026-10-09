import React, { lazy } from "react";

import {FAQSection} from "../../../componets/FAQSection/FAQSection.tsx";
import { faqItems } from "../../../componets/FAQSection/faqData.ts";
import FAQSchema from "../../../componets/SEO/FAQSchema.ts";
import './Home.css';
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
import { FeaturedProjects } from "../../../componets/FeaturedProjects/FeaturedProjects.tsx";
import { WhyChooseUs } from "../../../componets/WhyChooseUs/WhyChooseUs.tsx";
import { CraftsmanshipShowcase } from "../../../componets/CraftsmanshipShowcase/CraftsmanshipShowcase.tsx";


const AnimatedShowCaseCarousel = lazy(() =>
  import("../../../componets/AnimatedShowCaseCarousel/AnimatedShowCaseCarousel.tsx")
    .then(module => ({ default: module.AnimatedShowCaseCarousel }))
);
interface Slide {
  id: number;
  image: string;
}

const seo : SeoData = {
    title:
        "Custom Welding, Pergolas, Fences & Cladding in South Florida",

    description:
        "Lauries Welding Group provides custom pergolas, fences, gates, staircases, architectural cladding, and metal fabrication services throughout South Florida.",

    canonical: "/",

    image:
        "/images/originals/Claddings/Capture-1.webp"
};
const slides : Slide[] = [
  { id: 1, image: "/images/originals/Fences/05329352.webp" },
  { id: 2, image: "/images/originals/Fences/PVC-gm4.webp" },
  { id: 3, image: "/images/originals/Fences/jose-luis-gates.webp" },
  { id: 4, image: "/images/originals/Fences/yan-gate.webp" },
  { id: 5, image: "/images/originals/Fences/big-modern.webp" },
  { id: 6, image: "/images/originals/Fences/tennis-court.webp" },
  { id: 7, image: "/images/originals/Fences/Aluminum-row-3-c.webp" }
];

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
            <FeaturedProjects
                projects={[
                    {
                    title: "Downtown Miami Custom Staircase",
                    location: "Miami, FL",
                    category: "Stairs & Railings",
                    image: "/images/Projects-done/05-26-Stair-Downtown/after.webp",
                    imageAlt:
                        "Custom metal staircase project in Downtown Miami",
                    link: "/stairs/downtown-miami",
                    },
                    {
                    title: "Nick Custom Staircase",
                    location: "Sunny Isles, FL",
                    category: "Stairs & Railings",
                    image: "/images/Projects-done/04-14-Nick-Sonny-Isle/Image/after.webp",
                    imageAlt:
                        "Custom floating staircase by Lauries Welding Group",
                    link: "/stairs/nick-custom-staircase",
                    },
                    {
                    title: "Justin Architectural Cladding",
                    location: "Hollywood, FL",
                    category: "Cladding",
                    image: "/images/Projects-done/07-26-Justing-Hollywood/Image/after.webp",
                    imageAlt:
                        "Architectural cladding project in Hollywood Florida",
                    link: "/claddings/justin-hollywood-cladding",
                    },
                ]}
                />
            <AnimatedShowCaseCarousel 
                slides={slides}
                eyebrow="Next-Generation Materials"
                headline="CREATE LUXURY OUTDOOR SPACES"
                subheadline="Smart comfort solutions designed to complement your pergola and outdoor living space."
                buttonLabel="Contact Us"
                onButtonClick={() => window.location.href = "/contactus"}
            />
            <WhyChooseUs
                items={[
                    {
                    id: 1,
                    icon: "/images/icons/tool-icon.png",
                    title: "CUSTOM FABRICATION",
                    description:
                        "Every piece is custom fabricated in our shop.",
                    },
                    {
                    id: 2,
                    icon: "/images/icons/condecoration-icon.png",
                    title: "ENGINEERED SOLUTIONS",
                    description:
                        "Built to meet code and structural requirements.",
                    },
                    {
                    id: 3,
                    icon: "/images/icons/worker-icon.png",
                    title: "PROFESSIONAL INSTALLATION",
                    description:
                        "Expert installation by our experienced team.",
                    },
                    {
                    id: 4,
                    icon: "/images/icons/shield-icon.png",
                    title: "LICENSED & INSURED",
                    description:
                        "Fully licensed, insured and committed to safety.",
                    },
                    {
                    id: 5,
                    icon: "/images/icons/navigation-icon.png",
                    title: "SOUTH FLORIDA EXPERTS",
                    description:
                        "Local experts who understand our climate and conditions.",
                    },
                ]}
                />
            <CraftsmanshipShowcase
                eyebrow="BUILT IN-HOUSE. INSTALLED BY PROFESSIONALS."
                title="QUALITY CRAFTED. SERVICE DELIVERED."
                description="From concept to completion, we handle every step in-house to ensure the highest quality and attention to detail in every project."
                features={[
                    {
                    icon: "/images/icons/tool-black-icon.png",
                    title: "Custom Fabrication",
                    description: "Built in our local shop",
                    },
                    {
                    icon: "/images/icons/diamond-black-icon.png",
                    title: "Quality Materials",
                    description: "Aluminum, steel & more",
                    },
                    {
                    icon: "/images/icons/worker-black-icon.png",
                    title: "Professional Installation",
                    description: "On-time, on-budget",
                    },
                ]}
                images={[
                    {
                    src: "/images/shopsaw-cutter.png",
                    alt: "Metal fabrication at Lauries Welding Group",
                    position: "center",
                    },
                    {
                    src: "/images/welder-structure.png",
                    alt: "Professional welder fabricating a custom structure",
                    position: "center",
                    },
                    {
                    src: "/images/workers-collage.png",
                    alt: "Lauries Welding Group professional installation",
                    position: "center",
                    },
                ]}
                buttonText="LEARN MORE ABOUT US"
                buttonLink="/contactus"
                />    
            <FAQSection items={faqItems} />
            
                    
        
        </main>
    </>                
  )
}
export default Home;