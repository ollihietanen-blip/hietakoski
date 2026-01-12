import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sand-white px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="font-display text-6xl font-bold text-dark-muted mb-4">
          404
        </h1>
        <h2 className="font-display text-2xl font-semibold text-dark-muted mb-4">
          Sivua ei löydy
        </h2>
        <p className="text-body-text mb-8">
          Etsimääsi sivua ei valitettavasti löydy. Se on saattanut siirtyä tai poistua.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-deep-teal text-white rounded-md hover:bg-deep-teal/90 transition-colors font-medium inline-block"
          >
            Etusivulle
          </Link>
          <Link
            href="/kohteet"
            className="px-6 py-3 bg-white text-deep-teal border border-deep-teal rounded-md hover:bg-deep-teal/5 transition-colors font-medium inline-block"
          >
            Katso kohteet
          </Link>
        </div>
      </div>
    </div>
  )
}
