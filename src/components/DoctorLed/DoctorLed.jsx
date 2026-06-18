import './DoctorLed.css'

export default function DoctorLed() {
  return (
    <section className="doctor section">
      <div className="container doctor__inner">
        <div className="doctor__content">
          <h2 className="section-title">
            We are Doctor-led, not direct-to-customers
          </h2>
          <p>
            We don't offer direct-to-customer invisible aligners. We treat you in a Dental
            clinic with an Orthodontist. Aligners are just the beginning; we ensure
            comprehensive treatment in over 450+ clinics nationwide.
          </p>
          <a href="#book-scan" className="btn btn-primary">
            Get a Callback
          </a>
        </div>

        <div className="doctor__media">
          <img
            src="https://picsum.photos/seed/whistle-orthodontist/640/560"
            alt="Orthodontist in a dental clinic"
            width="560"
            height="480"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
