import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">Invisible Aligners for a dream smile</h1>
          <p className="hero__subtitle">
            Book a Scan and avail a free
            <br />
            Orthodontist Consult <span>worth ₹1500</span>
          </p>
        </div>

        <div className="hero__media">
          <img
            src="https://picsum.photos/seed/whistle-hero-smile/620/560"
            alt="Person smiling with a clear aligner"
            width="560"
            height="520"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
