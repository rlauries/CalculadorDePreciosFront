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
  "Nick LLC partnered with Lauries Welding Group to design, fabricate, and install a custom floating staircase system for a modern residential project in Sunny Isles Beach, Florida.",

  "The staircase features a two-piece aluminum mono-stringer configuration connected in an L-shaped layout, finished in black matte powder coating and paired with premium White Cedar treads. The combination creates a clean architectural statement that balances contemporary design with the natural warmth of real wood.",

  "To enhance the overall visual impact, the project incorporates a custom black slat cladding wall that serves as a dramatic backdrop, emphasizing the floating appearance of the staircase while adding texture, depth, and contrast to the interior space.",

  "A custom modern aluminum railing system was integrated throughout the staircase, providing safety without compromising the minimalist aesthetic. From engineering and fabrication to finishing and installation, every component was carefully developed to create a seamless focal point that elevates the home's contemporary design."
];

const projectData = [
  {
    label: "Client",
    value: "Nick LLC",
  },
  {
    label: "Location",
    value: "Sunny Isles Beach, FL",
  },
  {
    label: "System Type",
    value: "Custom Aluminum L-Shape Staircase",
  },
  {
    label: "Materials",
    value: ["Black Matte Aluminum", "2” Red Cedar Slabs"],
  },
  {
    label: "Installation",
    value: "Indoor Residential Remodel",
  },
  {
    label: "Status",
    value: "Completed 2025",
  },
];
const processImages = [
  {
    label: "Before",
    imageUrl: "/images/Projects-done/04-14-Nick-Sonny-Isle/Image/before.png",
  },
  {
    label: "Fabrication",
    imageUrl: "/images/Projects-done/04-14-Nick-Sonny-Isle/Image/fabrication.png",
  },
  {
    label: "After",
    imageUrl: "/images/Projects-done/04-14-Nick-Sonny-Isle/Image/after.jpeg",
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
  { imageUrl: "/images/Projects-done/04-14-Nick-Sonny-Isle/Image/hero-banner.jpeg" },
  { imageUrl: "/images/Projects-done/04-14-Nick-Sonny-Isle/Image/back-view.jpeg" },
  { imageUrl: "/images/Projects-done/04-14-Nick-Sonny-Isle/Image/slabs.jpeg" },
  { imageUrl: "/images/Projects-done/04-14-Nick-Sonny-Isle/Image/cladding-wall.png" },
  { imageUrl: "/images/Projects-done/04-14-Nick-Sonny-Isle/Image/landing.jpeg" },
  { imageUrl: "/images/Projects-done/04-14-Nick-Sonny-Isle/Image/welder.png" },
  { imageUrl: "/images/Projects-done/04-14-Nick-Sonny-Isle/Image/top-view.jpeg" },
  { imageUrl: "/images/Projects-done/04-14-Nick-Sonny-Isle/Image/connection.jpeg" },
];
const seo = {
    title: "Modern Floating Staircase in Sunny Isles Beach, FL",

    description:
        "Custom floating staircase fabricated and installed in Sunny Isles Beach, Florida, featuring steel structure, premium wood treads, and modern railing.",

    canonical: "/stairs/nick-sunny-isles",

    image:
        "/images/Projects-done/.../thumbnail.png",

    location: "Sunny Isles Beach, Florida",

    service: "Custom Floating Staircase"
};
export const NickSonyIsle = () => {
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
                name: "Sunny Isles Staircase",
                url: `${SITE_CONFIG.siteUrl}/stairs/nick-sunny-isles`
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
                        url: "https://lauriesweldinggroup.com/"
                    },
                    {
                        name: "Stairs",
                        url: "https://lauriesweldinggroup.com/stairs"
                    },
                    {
                        name: "Sunny Isles Staircase",
                        url: "https://lauriesweldinggroup.com/stairs/nick-sunny-isles"
                    }
                ])
            ]}
        />
        <main>  
          <ProjectsBanner
            eyebrow="02 / COMPLETED PROJECT"
            title='Custom Floating Staircase Sonny Isles, Miami'
            features={[
              "Aluminum Mono Stringer",
              "White Cedar Slabs",
              "Custom Fabrication",
            ]}
            buttonText="View Project"
            buttonUrl="/stairs/custom-floating-staircase-sonny-isles-miami"
            backgroundImage="/images/Projects-done/04-14-Nick-Sonny-Isle/Image/hero-banner.jpeg"
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
            description="Watch walkthrough of this custom floating staircase in Sunny Isles Beach, FL."
            thumbnailUrl="/images/Projects-done/04-14-Nick-Sonny-Isle/Image/back-view.jpeg"
            localVideoUrl="/images/Projects-done/04-14-Nick-Sonny-Isle/Footage/showcase.MOV"
          />
          <ProjectsCTA />
        </main>  
      </>
    )
  }
