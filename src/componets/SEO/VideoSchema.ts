import SITE_CONFIG from "./siteConfig";

type VideoSchemaProps = {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  uploadDate: string;
};

export default function VideoSchema({
  name,
  description,
  thumbnailUrl,
  contentUrl,
  uploadDate,
}: VideoSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",

    name,
    description,

    thumbnailUrl: `${SITE_CONFIG.siteUrl}${thumbnailUrl}`,

    contentUrl: `${SITE_CONFIG.siteUrl}${contentUrl}`,

    uploadDate,
  };
}