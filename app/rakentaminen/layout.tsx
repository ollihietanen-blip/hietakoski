import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rakentaminen – Näin Hietakoski rakentaa',
  description:
    'Hietakoski rakentaa muuttovalmiit kodit hallitulla ja vastuullisella tavalla. Kohteet toteutetaan vaiheittain ja viimeistellään täysin valmiiksi ennen myyntiä.',
  openGraph: {
    title: 'Rakentaminen – Näin Hietakoski rakentaa | Hietakoski Oy',
    description:
      'Hietakoski rakentaa muuttovalmiit kodit hallitulla ja vastuullisella tavalla. Kohteet viimeistellään täysin valmiiksi ennen myyntiä.',
    url: 'https://hietakoski.fi/rakentaminen',
    images: [
      {
        url: '/rakentaminen_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Hietakoski Oy – Rakentaminen',
      },
    ],
  },
  alternates: {
    canonical: 'https://hietakoski.fi/rakentaminen',
  },
}

export default function RakentaminenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
