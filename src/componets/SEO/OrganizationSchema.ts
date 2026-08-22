import SITE_CONFIG from "./siteConfig.js";

const OrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    "@id": `${SITE_CONFIG.siteUrl}/#organization`,

    name: "Lauries Welding Group",
    url: SITE_CONFIG.siteUrl,

    logo: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.siteUrl}/images/Logo/SmallLauriesLogo.png`,
    },

    description:
      "Lauries Welding Group provides custom metal fabrication, pergolas, fences, gates, stairs, railings, and exterior cladding for residential and commercial projects throughout South Florida.",

    areaServed: {
      "@type": "AdministrativeArea",
      name: "South Florida",
    },
  };
};

export default OrganizationSchema;