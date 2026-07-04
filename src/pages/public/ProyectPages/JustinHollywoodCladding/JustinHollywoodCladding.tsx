import React from 'react'
import { ProjectsBanner } from '../../../../componets/ProjectsBanner/ProjectsBanner.tsx';
import { ProjectOverview } from '../../../../componets/ProjectOverview/ProjectOverview.tsx';
import { ProjectProcessGallery } from '../../../../componets/ProjectProcessGallery/ProjectProcessGallery.tsx';
import { Crosshair, FileText, Hammer, Layers, Paintbrush, Pencil, Ruler, Wrench } from 'lucide-react';
import { ProjectDetailsGallery } from '../../../../componets/ProjectDetailsGallery/ProjectDetailsGallery.tsx';
import { ProjectsCTA } from '../../../../componets/ProjectsCTA/ProjectsCTA.tsx';
import { ProjectVideo } from '../../../../componets/ProjectVideo/ProjectVideo.tsx';

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
  },
  {
    label: "Fabrication",
    imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/instalation.png",
  },
  {
    label: "After",
    imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/after.png",
  },
];

const services = [
  { label: "Custom aluminum fabrication", icon: Wrench },
  { label: "Structural mono-stringer design", icon: Layers },
  { label: "2” red cedar slab installation", icon: Ruler },
  { label: "Powder-coated Black Matte finish", icon: Paintbrush },
  { label: "Precision leveling & alignment", icon: Crosshair },
  { label: "Field measurements", icon: Pencil },
  { label: "Shop drawings", icon: FileText },
  { label: "Final installation", icon: Hammer },
];
    
const galleryImages = [
  { imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/first-day.jpeg" },
  { imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/bar.jpeg" },
  { imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/side-panel.jpeg" },
  { imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/inside-back.jpeg" },
  { imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/inside.jpeg" },
  { imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/outlet-detail.jpeg" },
  { imageUrl: "/images/Projects-done/07-26-Justing-Hollywood/Image/inside-out.jpeg" },
  { imageUrl: "/images/Logo/logo-creativo.png" },
];

export const JustinHollywoodCladding = () => {
  return (
    <div>
        <ProjectsBanner
           eyebrow="03 / COMPLETED PROJECT"
           title="Luxury Outdoor Living Space, Hollywood Florida"
           features={[
             "Patio Ceiling Cladding",
             "Columns",
             "Outdoor Bar Cladding",
           ]}
           buttonText="VIEW PROJECT"
           buttonUrl="/claddings/justin-hollywood-cladding"
           backgroundImage="/images/Projects-done/07-26-Justing-Hollywood/Image/after.png"
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
            description="This project showcases the transformation of a standard covered patio into a modern outdoor living space."
            thumbnailUrl="/images/Projects-done/07-26-Justing-Hollywood/Image/after.png"
            localVideoUrl="/images/Projects-done/07-26-Justing-Hollywood/Footage/Justin-Hollywood-Cladding.mp4"
        />
        <ProjectsCTA/>
    </div>
  )
}
