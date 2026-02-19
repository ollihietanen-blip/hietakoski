import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yhteystiedot – Ota yhteyttä',
  description:
    'Ota yhteyttä Hietakoski Oy:n myyntiin, työnjohtoon tai suunnitteluun. Autamme kaikissa kohteisiin ja rakentamiseen liittyvissä kysymyksissä.',
  openGraph: {
    title: 'Yhteystiedot – Ota yhteyttä | Hietakoski Oy',
    description:
      'Ota yhteyttä Hietakoski Oy:n myyntiin, työnjohtoon tai suunnitteluun.',
    url: 'https://hietakoski.fi/yhteystiedot',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Hietakoski Oy – Yhteystiedot',
      },
    ],
  },
  alternates: {
    canonical: 'https://hietakoski.fi/yhteystiedot',
  },
}

export default function YhteystiedotLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
