import './CloveStrip.css'

export default function CloveStrip() {
  return (
    <section className="clove">
      <div className="container">
        <div className="clove__box">
          <p className="clove__text">
            Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental Clinic
            near you.
          </p>

          <div className="clove__right">
            <span className="clove__logo">
              clove<span className="clove__logo-smile">:)</span>
              <span className="clove__logo-tag">DENTAL</span>
            </span>
            <button className="clove__find">
              Find Clinic
              <span aria-hidden="true">⌄</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
