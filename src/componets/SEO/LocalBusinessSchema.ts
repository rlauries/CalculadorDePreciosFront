import SITE_CONFIG from "./siteConfig";

type JsonLd = Record<string, unknown>;

export default function LocalBusinessSchema(): JsonLd {
    return {
        "@context": "https://schema.org",

        "@type": "GeneralContractor",

        "@id": `${SITE_CONFIG.siteUrl}/#organization`,

        name: SITE_CONFIG.siteName,

        url: SITE_CONFIG.siteUrl,

        logo: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.logo}`,

        image: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultImage}`,

        description:
            "Lauries Welding Group designs and builds custom aluminum pergolas, floating stairs, architectural cladding, fences, gates, railings, and custom metal fabrication for residential and commercial projects throughout South Florida.",

        areaServed: {
            "@type": "AdministrativeArea",
            name: "South Florida"
        },

        address: {
            "@type": "PostalAddress",
            addressLocality: SITE_CONFIG.address.city,
            addressRegion: SITE_CONFIG.address.state,
            addressCountry: SITE_CONFIG.address.country
        },

        sameAs: [
            SITE_CONFIG.social.instagram,
            SITE_CONFIG.social.youtube
        ]
    };
}