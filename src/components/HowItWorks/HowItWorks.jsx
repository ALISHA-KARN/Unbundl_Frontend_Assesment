import './HowItWorks.css'

const STEPS = [
  {
    n: 1,
    title: 'Scan',
    text: 'We use an AI-powered scanner to take a detailed 3D image of your teeth.',
  },
  {
    n: 2,
    title: 'Plan',
    text: 'Our orthodontists design your customised smile enhancement plan using highly advanced software.',
  },
  {
    n: 3,
    title: 'Fabricate',
    text: 'We manufacture your custom aligners leveraging 3D printing & laser technology.',
  },
  {
    n: 4,
    title: 'Wear',
    text: 'Your Whistle aligners and expert Clove Dental orthodontists monitor your progress across the journey.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how section" id="how-it-works">
      <div className="container">
        <div className="how__card">
          <div className="how__content">
            <h2 className="section-title">
              Get your perfect smile in four simple steps
            </h2>
            <div className="how__steps">
              {STEPS.map((step) => (
                <div className="how__step" key={step.n}>
                  <span className="how__num">{step.n}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="how__media">
            <img
              src="https://picsum.photos/seed/whistle-steps/520/560"
              alt="Orthodontist scanning a patient's teeth"
              width="440"
              height="480"
              loading="lazy"
            />
            <button className="how__play" aria-label="Play video">
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
