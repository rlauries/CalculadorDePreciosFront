import SITE_CONFIG from "./siteConfig";

interface ProjectSchemaProps {
    title: string;
    description: string;
    url: string;
    image: string;
    location: string;
    service: string;
    type?: string;
}
type JsonLd = Record<string, unknown>;

export default function ProjectSchema({
    title,
    description,
    url,
    image,
    location,
    service,
    type = "CreativeWork"
}: ProjectSchemaProps): JsonLd {

    return {

        "@context": "https://schema.org",

        "@type": type,

        name: title,

        description,

        url: `${SITE_CONFIG.siteUrl}${url}`,

        image: [`${SITE_CONFIG.siteUrl}${image}`],

        creator: {
            "@type": "LocalBusiness",

            name: SITE_CONFIG.siteName,

            url: SITE_CONFIG.siteUrl
        },

        publisher: {
            "@type": "Organization",

            name: SITE_CONFIG.siteName,

            logo: {
                "@type": "ImageObject",

                url: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.logo}`
            }
        },

        locationCreated: {
            "@type": "Place",

            name: location,

            address: {
                "@type": "PostalAddress",

                addressLocality: SITE_CONFIG.address.city,

                addressRegion: SITE_CONFIG.address.state,

                addressCountry: SITE_CONFIG.address.country
            }
        },

        about: {

            "@type": "Service",

            name: service,

            provider: {

                "@type": "LocalBusiness",

                name: SITE_CONFIG.siteName,

                url: SITE_CONFIG.siteUrl
            }
        }
    };
}