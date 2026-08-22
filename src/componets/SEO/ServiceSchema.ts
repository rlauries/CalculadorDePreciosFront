import SITE_CONFIG from "./siteConfig.js";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}

const ServiceSchema = ({
  name,
  description,
  url,
  serviceType,
}: ServiceSchemaProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",

    name,
    description,
    serviceType,

    url: `${SITE_CONFIG.siteUrl}${url}`,

    provider: {
      "@type": "LocalBusiness",
      name: "Lauries Welding Group",
      url: SITE_CONFIG.siteUrl,
    },

    areaServed: {
      "@type": "AdministrativeArea",
      name: "South Florida",
    },
  };
};

export default ServiceSchema;