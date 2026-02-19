import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tietosuojaseloste',
  description:
    'Hietakoski Oy:n tietosuojaseloste. Lue miten käsittelemme henkilötietoja ja evästeitä.',
  alternates: {
    canonical: 'https://hietakoski.fi/tietosuoja',
  },
}

export default function TietosuojaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
