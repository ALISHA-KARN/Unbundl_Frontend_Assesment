import './WhistleDifference.css'

const POINTS = [
  {
    icon: '🦷',
    title: 'Next-Gen',
    text: 'Crafted with top-notch 3D printing, laser tech, and Zendura FLX material.',
  },
  {
    icon: '✨',
    title: 'Hassle-Free',
    text: 'Predictable, comfortable & lifestyle-friendly for an easy smile transformation.',
  },
  {
    icon: '💸',
    title: 'Transparent Pricing',
    text: "Everything's included – from scans to aligners, doctor consults, and retainers – no hidden costs.",
  },
]

export default function WhistleDifference() {
  return (
    <section className="difference section">
      <div className="container">
        <div className="difference__card">
          <div className="difference__content">
            <h2 className="section-title">The Whistle Difference</h2>
            <ul className="difference__list">
              {POINTS.map((point) => (
                <li key={point.title}>
                  <span className="difference__icon" aria-hidden="true">
                    {point.icon}
                  </span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="difference__media">
            <img
              src="https://picsum.photos/seed/whistle-aligners-stack/560/460"
              alt="Stack of clear Whistle aligners"
              width="500"
              height="420"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
