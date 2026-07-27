import React from 'react'
import { ProjectsBanner } from '../../../../componets/ProjectsBanner/ProjectsBanner.tsx';
import { ProjectOverview } from '../../../../componets/ProjectOverview/ProjectOverview.tsx';
import { ProjectProcessGallery } from '../../../../componets/ProjectProcessGallery/ProjectProcessGallery.tsx';
import { Crosshair, FileText, Hammer, Layers, Paintbrush, Pencil, Ruler, Wrench } from 'lucide-react';
import { ProjectDetailsGallery } from '../../../../componets/ProjectDetailsGallery/ProjectDetailsGallery.tsx';
import { ProjectsCTA } from '../../../../componets/ProjectsCTA/ProjectsCTA.tsx';
import { ProjectVideo } from '../../../../componets/ProjectVideo/ProjectVideo.tsx';
import SEO from "../../../../componets/SEO/SEO.tsx";
import LocalBusinessSchema from "../../../../componets/SEO/LocalBusinessSchema.ts";
import ProjectSchema from "../../../../componets/SEO/ProjectSchema.ts";


const overviewParagraphs = [
  "Justin partnered with Lauries Welding Group to transform the outdoor living area of his Hollywood, Florida residence into a modern entertainment space through custom architectural cladding and premium exterior finishes.",

  "The project included the fabrication and installation of custom wood-look aluminum cladding across the patio ceiling, structural columns, and the left-side feature wall, creating a continuous architectural design that seamlessly integrates with the home's contemporary aesthetic.",

  "To complete the renovation, our team fabricated custom cladding around the outdoor bar, carefully matching the ceiling and column profiles to deliver a cohesive appearance throughout the entire patio. Every detail was designed to provide clean lines, durability, and low-maintenance performance for South Florida's outdoor environment.",

  "From field measurements and custom fabrication to finishing and installation, every component was engineered specifically for this residence, transforming a standard covered patio into a high-end outdoor living space built to withstand the Florida climate while significantly enhancing the property's visual appeal."
];
const projectData = [
  {
    label: "Client",
    value: "Justin",
  },
  {
    label: "Location",
    value: "Hollywood, FL",
  },
  {
    label: "System Type",
    value: "Custom Outdoor Cladding System",
  },
  {
    label: "Materials",
    value: [
      "Composite Cladding",
      "Black Aluminum Trim",
      "Wood-Look Finish",
    ],
  },
  {
    label: "Installation",
    value: "Residential Patio Renovation",
  },
  {
    label: "Status",
    value: "Completed 2026",
  },
];
const processImages = [
  {
    label: "Before",
    imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/before.jpeg",
    alt: "Covered patio before custom cladding installation in Hollywood Florida",
  },
  {
    label: "Fabrication",
    imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/instalation.png",
    alt: "Custom cladding fabrication process in Hollywood Florida",
  },
  {
    label: "After",
    imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/after.png",
    alt: "Completed custom cladding installation in Hollywood Florida",
  },
];

const services = [
  { label: "Field measurements", icon: Ruler },
  { label: "Custom cladding fabrication", icon: Wrench },
  { label: "Patio ceiling cladding", icon: Layers },
  { label: "Structural column cladding", icon: Crosshair },
  { label: "Outdoor bar cladding", icon: Hammer },
  { label: "Black aluminum trim installation", icon: Paintbrush },
  { label: "Detail drawings and layout", icon: FileText },
  { label: "Final installation and alignment", icon: Pencil },
];
    
const galleryImages = [
  { imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/first-day.jpeg", alt: "First day of custom cladding installation in Hollywood Florida"},
  { imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/bar.jpeg", alt: "Outdoor bar cladding in Hollywood Florida" },
  { imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/side-panel.jpeg", alt: "Side panel cladding in Hollywood Florida" },
  { imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/inside-back.jpeg", alt: "Inside back view of custom cladding in Hollywood Florida" },
  { imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/inside.jpeg", alt: "Inside view of custom cladding in Hollywood Florida" },
  { imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/outlet-detail.jpeg", alt: "Outlet detail of custom cladding in Hollywood Florida" },
  { imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/inside-out.jpeg", alt: "Inside out view of custom cladding in Hollywood Florida" },
  { imageUrl: "/images/Logo/logo-creativo.png", alt: "Lauries Welding Group Logo" },
];

export const JustinHollywoodCladding = () => {
    const projectSchema = ProjectSchema({
        title: "Custom Outdoor Cladding Installation in Hollywood, Florida",

        description:
            "Custom outdoor aluminum and composite cladding installation in Hollywood, Florida, including patio ceiling, structural columns, feature wall, and outdoor bar.",

        url: "/claddings/justin-hollywood-cladding",

        image: "/images/Projects-done/07-26-Justing-Hollywood/Image/after.png",

        location: "Hollywood, Florida",

        service: "Custom Outdoor Cladding Installation"
  });
  return (
    <>
        <SEO
            title="Custom Outdoor Cladding Installation in Hollywood, FL"

            description="Outdoor aluminum and composite cladding installation featuring a patio ceiling, structural columns, feature wall, and custom outdoor bar."

            canonical="/claddings/justin-hollywood-cladding"

            image="/images/Projects-done/07-26-Justing-Hollywood/Image/thumbnail.png"

            schemas={[
                LocalBusinessSchema(),
                projectSchema
            ]}
        />
        <main>
          <ProjectsBanner
            eyebrow="03 / COMPLETED PROJECT"
            title="Luxury Outdoor Living Space, Hollywood Florida"
            features={[
              "Patio Ceiling Cladding",
              "Columns",
              "Outdoor Bar Cladding",
            ]}
            buttonText="VIEW PROJECT"
            buttonUrl="#project-overview"
            backgroundImage="/images/Projects-done/07-26-Justing-Hollywood/Image/after.png"
          />
          <section id="project-overview">
            <ProjectOverview
                paragraphs={overviewParagraphs}
                projectData={projectData}
            />
          </section>
          <ProjectProcessGallery items={processImages} />
          <ProjectDetailsGallery
              services={services}
              images={galleryImages}
          />
          <ProjectVideo
              description="This project showcases the transformation of a standard covered patio into a modern outdoor living space."
              thumbnailUrl="/images/Projects-done/07-26-Justing-Hollywood/Image/after.png"
              localVideoUrl="/images/Projects-done/07-26-Justing-Hollywood/Footage/Justin-Hollywood-Cladding.mp4"
          />
          <ProjectsCTA/>
        </main>
    </>
  )
}
