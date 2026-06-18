import useTestimonials from '../../hooks/useTestimonials.js'
import './HappySmilers.css'

function SkeletonCard() {
  return <div className="smilers__card smilers__card--skeleton" aria-hidden="true" />
}

export default function HappySmilers() {
  const { testimonials, loading, error, retry } = useTestimonials()

  return (
    <section className="smilers section" id="happy-smilers">
      <div className="container">
        <h2 className="section-title text-center mx-auto smilers__title">
          Happy Smilers!
        </h2>

        {error ? (
          <div className="smilers__error" role="alert">
            <p>{error}</p>
            <button className="btn btn-primary" onClick={retry}>
              Try again
            </button>
          </div>
        ) : (
          <div className="smilers__grid">
            {loading
              ? Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} />)
              : testimonials.slice(0, 5).map((t) => (
                  <figure
                    className="smilers__card"
                    key={t.id}
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(123,79,230,0.15) 0%, rgba(123,79,230,0.85) 100%), url(https://picsum.photos/seed/whistle-smiler-${t.id}/360/520)`,
                    }}
                  >
                    <span className="smilers__logo">whistle</span>
                    <span className="smilers__quote-mark" aria-hidden="true">
                      &ldquo;
                    </span>
                    <figcaption className="smilers__caption">
                      <p className="smilers__text">{t.quote}</p>
                      <p className="smilers__name">{t.name}</p>
                      <span className="smilers__tag">HAPPY-MONIALS by Whistle</span>
                    </figcaption>
                  </figure>
                ))}
          </div>
        )}
      </div>
    </section>
  )
}
