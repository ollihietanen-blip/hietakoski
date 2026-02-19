import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kohteet – Paritalot, rivitalot ja loma-asunnot',
  description:
    'Tutustu Hietakoski Oy:n myynnissä oleviin ja valmistuneisiin kohteisiin. Muuttovalmiit paritalot ja loma-asunnot Uudellamaalla, Pirkanmaalla ja Lapissa.',
  openGraph: {
    title: 'Kohteet – Paritalot, rivitalot ja loma-asunnot | Hietakoski Oy',
    description:
      'Tutustu Hietakoski Oy:n myynnissä oleviin ja valmistuneisiin kohteisiin. Muuttovalmiit paritalot ja loma-asunnot.',
    url: 'https://hietakoski.fi/kohteet',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Hietakoski Oy – Kohteet',
      },
    ],
  },
  alternates: {
    canonical: 'https://hietakoski.fi/kohteet',
  },
}

export default function KohteetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
