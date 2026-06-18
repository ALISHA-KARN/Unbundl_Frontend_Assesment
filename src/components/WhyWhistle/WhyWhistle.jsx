import './WhyWhistle.css'

const REASONS = [
  {
    seed: 'why-custom',
    title: 'Custom-made & invisible',
    text: 'Tailored for your teeth and smile with a clear, discreet appearance.',
  },
  {
    seed: 'why-predictable',
    title: 'Predictable results',
    text: 'Advanced 3D modeling and AI-technology for precise planning and predictable results.',
  },
  {
    seed: 'why-clove',
    title: 'Partnership with Clove Dental',
    text: 'Led by highly experienced Orthodontists of Clove Dental and Whistle that have corrected over 2 lakh smiles.',
  },
  {
    seed: 'why-unlimited',
    title: 'Unlimited Aligners*',
    text: 'Unlimited aligners and doctor consults at no extra cost.',
  },
]

export default function WhyWhistle() {
  return (
    <section className="why section" id="why-whistle">
      <div className="container">
        <h2 className="section-title text-center mx-auto why__title">Why Whistle?</h2>

        <div className="why__grid">
          {REASONS.map((reason) => (
            <article className="why__card" key={reason.seed}>
              <div className="why__img">
                <img
                  src={`https://picsum.photos/seed/${reason.seed}/360/260`}
                  alt={reason.title}
                  width="280"
                  height="190"
                  loading="lazy"
                />
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
