type BreadcrumbItem = {
  name: string;
  url: string;
};

type JsonLd = Record<string, unknown>;

export default function BreadcrumbSchema(
  items: BreadcrumbItem[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}