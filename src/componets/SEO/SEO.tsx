// Es el constructor del <head>

import { Helmet } from "react-helmet-async";
import SITE_CONFIG from "./siteConfig";

const SITE_URL = SITE_CONFIG.siteUrl;

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  image: string;
  schemas?: object[];
  type?: string;
}

export default function SEO({
  title,
  description,
  canonical,
  image,
  schemas,
  type = "website"
}: SEOProps) {

    const canonicalUrl = canonical.startsWith("http")
        ? canonical
        : `${SITE_URL}${canonical}`;

    const imageUrl = image.startsWith("http")
        ? image
        : `${SITE_URL}${image}`;

    return (
        <Helmet>

            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            <link
                rel="canonical"
                href={canonicalUrl}
            />

            {/* Open Graph */}

            <meta property="og:title" content={title} />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:type"
                content={type}
            />

            <meta
                property="og:url"
                content={canonicalUrl}
            />

            <meta
                property="og:image"
                content={imageUrl}
            />

            <meta
                property="og:image:width"
                content="1200"
            />

            <meta
                property="og:image:height"
                content="630"
            />

            <meta
                property="og:image:type"
                content="image/png"
            />

            <meta
                property="og:site_name"
                content={SITE_CONFIG.siteName}
            />

            <meta
                property="og:locale"
                content="en_US"
            />

            {/* Twitter */}

            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content={title}
            />

            <meta
                name="twitter:description"
                content={description}
            />

            <meta
                name="twitter:image"
                content={imageUrl}
            />

            {schemas?.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                >
                    {JSON.stringify(schema)}
                </script>
            ))}

        </Helmet>
    );
}