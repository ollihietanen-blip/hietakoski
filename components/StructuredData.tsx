import Script from 'next/script'

// Organization structured data for the company
export function OrganizationStructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hietakoski Oy',
    url: 'https://hietakoski.fi',
    logo: 'https://hietakoski.fi/Hietakulma_logo.jpg',
    description:
      'Hietakoski Oy rakentaa muuttovalmiit kodit ja loma-asunnot Suomen parhaille paikoille.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kuninkaanlähteenkatu 8',
      addressLocality: 'Kankaanpää',
      postalCode: '38700',
      addressCountry: 'FI',
    },
    email: 'hietakoski@gmail.com',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        name: 'Elma Alakoski-Tomberg',
        telephone: '+358442063617',
        email: 'elma.alakoski@areagroup.fi',
      },
    ],
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// RealEstateAgent structured data
export function RealEstateAgentStructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Hietakoski Oy',
    url: 'https://hietakoski.fi',
    logo: 'https://hietakoski.fi/Hietakulma_logo.jpg',
    description:
      'Hietakoski Oy rakentaa muuttovalmiit kodit ja loma-asunnot Suomen parhaille paikoille. Uusimaa – Pirkanmaa – Lappi.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kuninkaanlähteenkatu 8',
      addressLocality: 'Kankaanpää',
      postalCode: '38700',
      addressCountry: 'FI',
    },
    areaServed: [
      { '@type': 'State', name: 'Uusimaa' },
      { '@type': 'State', name: 'Pirkanmaa' },
      { '@type': 'State', name: 'Lappi' },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Project/RealEstateListing structured data
interface ProjectStructuredDataProps {
  name: string
  description: string
  url: string
  imageUrl: string
  location: string
  status: string
  price?: string
  numberOfRooms?: string
  floorSize?: string
}

export function ProjectStructuredData({
  name,
  description,
  url,
  imageUrl,
  location,
  status,
  price,
  numberOfRooms,
  floorSize,
}: ProjectStructuredDataProps) {
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name,
    description,
    url: `https://hietakoski.fi${url}`,
    image: `https://hietakoski.fi${imageUrl}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location,
      addressCountry: 'FI',
    },
  }

  if (price) {
    jsonLd.offers = {
      '@type': 'Offer',
      price: price.replace(/[^0-9]/g, ''),
      priceCurrency: 'EUR',
      availability:
        status === 'Myynnissä'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/SoldOut',
    }
  }

  if (numberOfRooms) {
    jsonLd.numberOfRooms = numberOfRooms
  }

  if (floorSize) {
    jsonLd.floorSize = {
      '@type': 'QuantitativeValue',
      value: floorSize.replace(/[^0-9.,]/g, ''),
      unitCode: 'MTK',
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// BreadcrumbList structured data
interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbStructuredData({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://hietakoski.fi${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
