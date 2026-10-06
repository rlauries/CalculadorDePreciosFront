import React, { lazy, Suspense } from "react";

import "./PergolaList.css";

import { AnimatedSection } from "../../../../componets/AnimatedSection/AnimatedSection.tsx";
import { SectionIntro } from "../../../../componets/SectionIntro/SectionIntro.tsx";
import { HeroVideo } from "../../../../componets/HeroVideo/HeroVideo.tsx";

import SEO from "../../../../componets/SEO/SEO.tsx";
import type { SeoData } from "../../../../componets/SEO/types.ts";
import LocalBusinessSchema from "../../../../componets/SEO/LocalBusinessSchema.ts";
import BreadcrumbSchema from "../../../../componets/SEO/BreadcrumbSchema.ts";
import SITE_CONFIG from "../../../../componets/SEO/siteConfig.js";
import ServiceSchema from "../../../../componets/SEO/ServiceSchema.ts";
import VideoSchema from "../../../../componets/SEO/VideoSchema.ts";


const DesignTailorCard = lazy(() =>
  import("../../../../componets/DesignTailorCard/DesignTailorCard.jsx")
    .then(module => ({ default: module.DesignTailorCard }))
);

// const HeroBanner = lazy(() =>
//   import("../../../../componets/HeroBanner/HeroBanner.tsx")
//     .then(module => ({ default: module.HeroBanner }))
// );

const AnimatedShowCaseCarousel = lazy(() =>
  import("../../../../componets/AnimatedShowCaseCarousel/AnimatedShowCaseCarousel.tsx")
    .then(module => ({ default: module.AnimatedShowCaseCarousel }))
);

const FeatureShowcaseCarousel = lazy(() =>
  import("../../../../componets/FeatureShowcaseCarousel/FeatureShowcaseCarousel.tsx")
    .then(module => ({ default: module.FeatureShowcaseCarousel }))
);

const BannerImageHalf = lazy(() =>
  import("../../../../componets/Half-Image-Banner/BannerImageHalf.tsx")
    .then(module => ({ default: module.BannerImageHalf }))
);

interface FeaturedPergola {
  id: number;
  name: string;
  imageUrl: string;
  linkTo: string;
}

interface Slide {
  id: number;
  image: string;
}

const featuredPergolas: FeaturedPergola[] = [
  {
    id: 1,
    name: "Steel",
    imageUrl: "/images/originals/Pergolas/Pergola-Steel.webp",
    linkTo: "/pergolas/steel"
  },
  {
    id: 2,
    name: "Aluminum",
    imageUrl: "/images/originals/Pergolas/Pergola-Aluminum.webp",
    linkTo: "/pergolas/aluminum"
  },
  {
    id: 3,
    name: "Wood",
    imageUrl: "/images/originals/Pergolas/Pergola-Wood.webp",
    linkTo: "/pergolas/wood"
  },
  {
    id: 4,
    name: "Insulated",
    imageUrl: "/images/originals/Pergolas/pergola-insulated.webp",
    linkTo: "/pergolas/insulated"
  },
  {
    id: 5,
    name: "LED Light",
    imageUrl: "/images/originals/Pergolas/string-light-pergola.webp",
    linkTo: "/pergolas/ledlight"
  },
  
];


const slides: Slide[] = [
  { id: 1, image: "/images/originals/Pergolas/Targa-Large-main.webp" },
  { id: 2, image: "/images/originals/Pergolas/Smart-Technology-Customization-for-Ultimate-Control.webp" },
  { id: 3, image: "/images/originals/Pergolas/beauty.webp" },
  { id: 4, image: "/images/originals/Pergolas/big-britgt-pergola.webp" },
  { id: 5, image: "/images/originals/Pergolas/Pergola-moderna.webp" },
  
];

const seo: SeoData = {
    title: "Custom Pergolas | Aluminum, Wood, Steel & Insulated Roof Systems",

    description:
        "Discover custom aluminum, wood, steel, insulated roof, and LED pergola systems designed to transform outdoor living spaces throughout South Florida.",

    canonical: "/pergolas",

    image:
        "/images/originals/Pergolas/aluminum-modern-pergola.webp"
};

const PergolaList = () => {


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
                      name: "Pergolas",
                      url: `${SITE_CONFIG.siteUrl}/pergolas`
                  }
              ]),
              ServiceSchema({
                name: "Custom Pergola Design and Installation",
                serviceType: "Pergola Fabrication and Installation",
                description:
                  "Custom pergola fabrication and installation for residential and commercial properties in South Florida, including aluminum pergolas, insulated roof systems, and custom architectural designs.",
                url: "/pergolas",
              }),
              VideoSchema({
                  name: "Custom Pergola Projects in South Florida",
                  description:
                      "A showcase of custom pergola fabrication and installation projects by Lauries Welding Group in South Florida.",
                  thumbnailUrl: "/images/videos/pergola-poster.webp",
                  contentUrl: "/images/videos/pergola-hero.mp4",
                  uploadDate: "FECHA-REAL"
              })
          ]}
      />

      <main
        style={{
                      backgroundImage: "url(/images/originals/backgroundMyth.avif)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                  }}
      >
        <section>
          <section className="video-section">
              <HeroVideo
                  src="/images/videos/pergola-hero.mp4"
                  videoId="slow-video"
                  className="hero-video"
                  pauseTime={4000}
                  poster="/images/videos/product-promo-poster.webp"
                  ariaLabel="Custom pergola fabrication and installation projects in South Florida"
              />
          </section> 
          
          <SectionIntro 
            title="Explore Our Pergola Styles" 
            description="Discover the perfect pergola that suits your lifestyle — from modern aluminum designs to classic wooden structures. Compare features and find your ideal match."
          />
          
          <Suspense fallback={null}>

            <AnimatedSection>
              <FeatureShowcaseCarousel
                title="OUR SYSTEMS"
                subtitle="Project Showcase"
                mainImage="/images/originals/Fences/rail-view.webp"
                items={featuredPergolas}
              />
            </AnimatedSection>

            

            <section>
              <div className="myths-info">
                <div className="myth-info-bg"></div>

                <AnimatedSection>
                      <BannerImageHalf 
                        image="/images/originals/Pergolas/led-myth.webp" 
                        title="LED PERGOLA LIGHTING MYTH" 
                        subtitle="Many people believe LED lighting for pergolas is too harsh or unreliable outdoors. In reality, modern exterior-grade LED systems are designed to withstand weather, humidity, and temperature changes while providing soft, energy-efficient illumination that enhances the ambiance of your outdoor space."
                        reversed={false}
                      />
                    </AnimatedSection>

                    <AnimatedSection>
                      <BannerImageHalf
                        image="/images/originals/Pergolas/wood-myth.webp" 
                        title="WOOD PERGOLA MYTH" 
                        subtitle="A common misconception is that wood pergolas quickly rot or require constant maintenance. When properly sealed and built with quality materials, wood pergolas can last for decades while offering a timeless natural look that blends beautifully with outdoor environments."
                        reversed={true}
                      /> 
                    </AnimatedSection>

                    <AnimatedSection>    
                      <BannerImageHalf
                        image="/images/originals/Pergolas/pergola-insulated-panels-myth.webp" 
                        title="INSULATED PANEL PERGOLA MYTH" 
                        subtitle="Some believe insulated roof panels make pergolas look bulky or overly industrial. In reality, modern insulated panels provide excellent thermal protection, reduce heat under the structure, and create a clean architectural finish that enhances comfort and usability year-round."
                        reversed={false}
                      />
                    </AnimatedSection> 
              </div>
            </section>

            <AnimatedSection>
              <AnimatedShowCaseCarousel 
                slides={slides}
                eyebrow="Next-Generation Materials"
                headline="CREATE LUXURY OUTDOOR SPACES"
                subheadline="Smart comfort solutions designed to complement your pergola and outdoor living space."
                buttonLabel="Explore Fans"
                onButtonClick={() => window.location.href = "/fans"}
              />
            </AnimatedSection>

            <AnimatedSection>
              <DesignTailorCard />
            </AnimatedSection>

          </Suspense>
        </section>
        
      </main>
    </>
  );
};
export default PergolaList;