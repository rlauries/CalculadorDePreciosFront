
import { ProjectOverview } from "./../../../../componets/ProjectOverview/ProjectOverview.tsx";
import { ProjectProcessGallery } from '../../../../componets/ProjectProcessGallery/ProjectProcessGallery.tsx'; 
import { ProjectDetailsGallery } from '../../../../componets/ProjectDetailsGallery/ProjectDetailsGallery.tsx';
import { Wrench, Layers, Ruler, Paintbrush, Crosshair, Pencil, FileText, Hammer } from "lucide-react";
import { ProjectVideo } from '../../../../componets/ProjectVideo/ProjectVideo.tsx';
import { ProjectsCTA } from '../../../../componets/ProjectsCTA/ProjectsCTA.tsx';
import { ProjectsBanner } from '../../../../componets/ProjectsBanner/ProjectsBanner.tsx';
import ProjectSchema from "../../../../componets/SEO/ProjectSchema.ts";
import LocalBusinessSchema from "../../../../componets/SEO/LocalBusinessSchema.ts";
import SEO from "../../../../componets/SEO/SEO.tsx";


const overviewParagraphs = [
  "SMP Construction partnered with Lauries Welding Group to deliver a custom floating staircase system as part of a residential interior renovation in Downtown Miami.",
  "The project features a custom-fabricated aluminum mono-stringer staircase combined with oversized 3” red cedar slabs, creating a bold architectural centerpiece that blends modern industrial structure with natural wood warmth.",
  "Designed to maximize openness and visual impact, the floating system was engineered for structural integrity and minimalist aesthetics.",
  "From fabrication and finishing to field coordination and final installation, the staircase was developed to integrate seamlessly into the contemporary redesign of the residence."
];

const projectData = [
  {
    label: "Client",
    value: "SMP Construction",
  },
  {
    label: "Location",
    value: "Downtown Miami, FL",
  },
  {
    label: "System Type",
    value: "Custom Aluminum Lineal Staircase",
  },
  {
    label: "Materials",
    value: ["Powder Coated Aluminum", "3” Red Cedar Slabs"],
  },
  {
    label: "Installation",
    value: "Indoor Residential Remodel",
  },
  {
    label: "Status",
    value: "Completed 2024",
  },
];
const processImages = [
  {
    label: "Before",
    imageUrl: "/images/Projects-done/05-26-Stair-Downtown/before.jpg",
  },
  {
    label: "Fabrication",
    imageUrl: "/images/Projects-done/05-26-Stair-Downtown/fabrication.png",
  },
  {
    label: "After",
    imageUrl: "/images/Projects-done/05-26-Stair-Downtown/after.jpg",
  },
];
const services = [
  { label: "Custom aluminum fabrication", icon: Wrench },
  { label: "Structural mono-stringer design", icon: Layers },
  { label: "3” red cedar slab installation", icon: Ruler },
  { label: "Powder-coated finish", icon: Paintbrush },
  { label: "Precision leveling & alignment", icon: Crosshair },
  { label: "Field measurements", icon: Pencil },
  { label: "Shop drawings", icon: FileText },
  { label: "Final installation", icon: Hammer },
];

const galleryImages = [
  { imageUrl: "/images/Projects-done/05-26-Stair-Downtown/after.jpg" },
  { imageUrl: "/images/Projects-done/05-26-Stair-Downtown/stair-esquina-mejorada.png" },
  { imageUrl: "/images/Projects-done/05-26-Stair-Downtown/cedar-slab.png" },
  { imageUrl: "/images/Projects-done/05-26-Stair-Downtown/stair-diagonal.png" },
  { imageUrl: "/images/Projects-done/05-26-Stair-Downtown/PHOTO-2023-08-18-12-47-10.jpg" },
  { imageUrl: "/images/Projects-done/05-26-Stair-Downtown/soldador-stair.png" },
  { imageUrl: "/images/Projects-done/05-26-Stair-Downtown/after.png" },
  { imageUrl: "/images/Projects-done/05-26-Stair-Downtown/estructura-hierro.png" },
];
const seo = {
    title: "Custom Floating Staircase in Downtown Miami, FL",

    description:
        "Custom aluminum floating staircase with mono-stringer design and 3-inch red cedar treads installed for a residential renovation in Downtown Miami.",

    canonical:
        "/stairs/custom-floating-staircase-downtown-miami",

    image:
        "/images/Projects-done/05-26-Stair-Downtown/hero-banner.png",

    location:
        "Downtown Miami, Florida",

    service:
        "Custom Floating Staircase"
};
export const SMPConstructionStair = () => {
    const projectSchema = ProjectSchema({
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      image: seo.image,
      location: seo.location,
      service: seo.service
    });

  return (
    <>
      <SEO
          title={seo.title}
          description={seo.description}
          canonical={seo.canonical}
          image={seo.image}
          schemas={[
              LocalBusinessSchema(),
              projectSchema
          ]}
      />
      <main>
        <ProjectsBanner
          eyebrow="01 / COMPLETED PROJECT"
          title="Custom Floating Staircase Downtown, Miami"
          features={[
            "Aluminum Mono Stringer",
            "Red Cedar Slabs",
            "Custom Fabrication",
          ]}
          buttonText="VIEW PROJECT"
          buttonUrl="/stairs/custom-floating-staircase-downtown-miami"
          backgroundImage="/images/Projects-done/05-26-Stair-Downtown/hero-banner.png"
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
          description="Watch walkthrough of this custom floating staircase in Downtown Miami."
          thumbnailUrl="/images/Projects-done/05-26-Stair-Downtown/stair-diagonal.png"
          localVideoUrl="/images/Projects-done/05-26-Stair-Downtown/showcase.mp4"
        />
        <ProjectsCTA />
      </main>    
    </>
  )
}
