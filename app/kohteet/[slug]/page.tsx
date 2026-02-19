import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjectBySlug, projects } from '@/lib/data'
import ProjectPageClient from './ProjectPageClient'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Kohdetta ei löytynyt',
    }
  }

  const description = project.description.length > 160
    ? project.description.substring(0, 157) + '...'
    : project.description

  return {
    title: `${project.name} – ${project.location}`,
    description,
    openGraph: {
      title: `${project.name} – ${project.location} | Hietakoski Oy`,
      description,
      url: `https://hietakoski.fi/kohteet/${project.slug}`,
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} – ${project.location}`,
      description,
      images: [project.imageUrl],
    },
    alternates: {
      canonical: `https://hietakoski.fi/kohteet/${project.slug}`,
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectPageClient slug={params.slug} />
}
