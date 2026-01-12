'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console in development
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-sand-white px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="font-display text-4xl font-bold text-dark-muted mb-4">
          Jotain meni pieleen
        </h1>
        <p className="text-body-text mb-8">
          Pahoittelut, tapahtui odottamaton virhe. Yritä päivittää sivu.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-deep-teal text-white rounded-md hover:bg-deep-teal/90 transition-colors font-medium"
        >
          Yritä uudelleen
        </button>
      </div>
    </div>
  )
}
