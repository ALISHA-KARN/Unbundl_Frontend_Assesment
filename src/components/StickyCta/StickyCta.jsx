import './StickyCta.css'

export default function StickyCta() {
  return (
    <div className="sticky-cta">
      <div className="container sticky-cta__inner">
        <p className="sticky-cta__text">Ready for your perfect smile?</p>
        <div className="sticky-cta__actions">
          <a href="#book-scan" className="btn btn-primary">
            Book scan at Home
          </a>
          <a href="#book-scan" className="btn btn-ghost">
            Book scan at Clinic
          </a>
        </div>
      </div>
    </div>
  )
}
