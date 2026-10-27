import React from 'react'
import { ProjectOverview } from "./../../../../componets/ProjectOverview/ProjectOverview.tsx";
import { ProjectProcessGallery } from '../../../../componets/ProjectProcessGallery/ProjectProcessGallery.tsx'; 
import { ProjectDetailsGallery } from '../../../../componets/ProjectDetailsGallery/ProjectDetailsGallery.tsx';
import { Wrench, Layers, Ruler, Paintbrush, Crosshair, Pencil, FileText, Hammer } from "lucide-react";
import { ProjectVideo } from '../../../../componets/ProjectVideo/ProjectVideo.tsx';
import { ProjectsCTA } from '../../../../componets/ProjectsCTA/ProjectsCTA.tsx';
import { ProjectsBanner } from '../../../../componets/ProjectsBanner/ProjectsBanner.tsx';

import SEO from "../../../../componets/SEO/SEO.tsx";
import LocalBusinessSchema from "../../../../componets/SEO/LocalBusinessSchema.ts";
import ProjectSchema from "../../../../componets/SEO/ProjectSchema.ts";
import BreadcrumbSchema from '../../../../componets/SEO/BreadcrumbSchema.ts';
import SITE_CONFIG from "../../../../componets/SEO/siteConfig.js";

const overviewParagraphs = [
  "Lauries Welding Group partnered with Jonathan to bring a custom modern floating staircase to life at his residence in Coral Springs, Florida. The project features a custom-fabricated steel mono-stringer staircase, designed with a distinctive zigzag profile that creates a striking floating effect while maintaining a clean, contemporary architectural appearance.",

  "The staircase incorporates eight custom wood treads, each measuring approximately 36 inches wide, featuring a rich, dark wood finish that adds warmth and elegance to the modern steel structure. The combination of natural wood and metal creates a sophisticated contrast that complements the home's interior design.",

  "To further enhance the staircase's visual appeal, integrated warm LED lighting was incorporated beneath the wooden treads, highlighting each step and creating a beautiful floating effect, particularly in the evening.",

  "Every stage of the project, from steel fabrication and welding to finishing, installation, and coordination of the custom wooden treads, was carefully executed to achieve a seamless integration with the surrounding architecture.",

  "The result is more than just a staircase. It is a custom architectural centerpiece that combines craftsmanship, modern design, and functional elegance, reflecting Lauries Welding Group's commitment to transforming unique ideas into exceptional residential features."
];

const projectData = [
  {
    label: "Client",
    value: "Jonathan ",
  },
  {
    label: "Location",
    value: "Coral Springs, FL",
  },
  {
    label: "System Type",
    value: "Custom Aluminum Spinal Staircase",
  },
  {
    label: "Materials",
    value: ["Gray Matte Aluminum", "3” Dark Walnut Slabs"],
  },
  {
    label: "Installation",
    value: "Indoor Residential Remodel",
  },
  {
    label: "Status",
    value: "Completed 2026",
  },
];
const processImages = [
  {
    label: "Before",
    imageUrl: "/images/Projects-done/09-26-Jonathan/Image/antes.png",
  },
  {
    label: "Fabrication",
    imageUrl: "/images/Projects-done/09-26-Jonathan/Image/durante.png",
  },
  {
    label: "After",
    imageUrl: "/images/Projects-done/09-26-Jonathan/Image/rigtht-wester-side.png",
  },
];

const services = [
  { label: "Custom aluminum fabrication", icon: Wrench },
  { label: "Structural mono-stringer design", icon: Layers },
  { label: "3” dark walnut slab installation", icon: Ruler },
  { label: "Powder-coated Gray Matte finish", icon: Paintbrush },
  { label: "Precision leveling & alignment", icon: Crosshair },
  { label: "Field measurements", icon: Pencil },
  { label: "Shop drawings", icon: FileText },
  { label: "Final installation", icon: Hammer },
];

const galleryImages = [
  { imageUrl: "/images/Projects-done/09-26-Jonathan/Image/front-view-lights.png" },
  { imageUrl: "/images/Projects-done/09-26-Jonathan/Image/rigtht-side.png" },
  { imageUrl: "/images/Projects-done/09-26-Jonathan/Image/slabs.png" },
  { imageUrl: "/images/Projects-done/09-26-Jonathan/Image/stair-no-slabs.png" },
  { imageUrl: "/images/Projects-done/09-26-Jonathan/Image/durante.png" },
  { imageUrl: "/images/Projects-done/09-26-Jonathan/Image/routing-slabs.png" },
  { imageUrl: "/images/Projects-done/09-26-Jonathan/Image/desintalacion.png" },
  { imageUrl: "/images/Projects-done/09-26-Jonathan/Image/after.png" },
];
const seo = {
    title: "Custom Floating Staircase in Coral Springs, FL | Lauries Welding Group",

    description:
        "Custom floating staircase in Coral Springs, FL, featuring a steel mono-stringer, 36-inch wood treads, and integrated LED lighting. By Lauries Welding Group.",

    canonical: "/stairs/jonathan-coral-springs",

    image:
        "/images/Projects-done/JonathanCoralSprings/thumbnail.webp",

    location: "Coral Springs, Florida",

    service: "Custom Floating Aluminum Staircase"
};
export const JonathanCoralSpringStair = () => {
  const projectSchema = ProjectSchema({
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      image: seo.image,
      location: seo.location,
      service: seo.service
  });
  <SEO
    title={seo.title}
    description={seo.description}
    canonical={seo.canonical}
    image={seo.image}
    schemas={[
        LocalBusinessSchema(),
        projectSchema,
        BreadcrumbSchema([
            {
                name: "Home",
                url: `${SITE_CONFIG.siteUrl}/`
            },
            {
                name: "Stairs",
                url: `${SITE_CONFIG.siteUrl}/stairs`
            },
            {
                name: "Coral Springs Staircase",
                url: `${SITE_CONFIG.siteUrl}/stairs/jonathan-coral-springs`
            }
        ])
    ]}
  />

  return (
    <>
        <SEO
            title={seo.title}
            description={seo.description}
            canonical={seo.canonical}
            image={seo.image}
            schemas={[
                LocalBusinessSchema(),
                projectSchema,
                BreadcrumbSchema([
                    {
                        name: "Home",
                        url: `${SITE_CONFIG.siteUrl}/`
                    },
                    {
                        name: "Stairs",
                        url: `${SITE_CONFIG.siteUrl}/stairs`
                    },
                    {
                        name: "Coral Springs Staircase",
                        url: `${SITE_CONFIG.siteUrl}/stairs/jonathan-coral-springs`
                    }
                ])
            ]}
        />
        <main>
            <ProjectsBanner
                eyebrow="03 / COMPLETED PROJECT"
                title="Custom Floating Staircase in Coral Springs, FL"
                features={[
                    "Steel Mono Stringer",
                    "36-Inch Wood Treads",
                    "Integrated LED Lighting"
                ]}
                buttonText="View Project"
                buttonUrl="/stairs/jonathan-coral-springs"
                backgroundImage="/images/Projects-done/09-26-Jonathan/Image/hero.png"
            />
            <ProjectOverview
                paragraphs={overviewParagraphs}
                projectData={projectData}
            />
            <ProjectProcessGallery items={processImages} />
            <ProjectDetailsGallery
                services={services}
                images={galleryImages}
            />
            <ProjectVideo
                description="Watch walkthrough of this custom floating staircase in Coral Springs, FL."
                thumbnailUrl="/images/Projects-done/09-26-Jonathan/Image/front-view-lights.png"
                localVideoUrl="/images/Projects-done/09-26-Jonathan/Footage/showcase.MOV"
            />
            <ProjectsCTA />
        </main>
    </>
  )
}
