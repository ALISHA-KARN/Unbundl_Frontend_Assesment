import './BenefitsBar.css'

const ITEMS = [
  'Our inaugural launch benefit',
  'Free teeth scan worth ₹500',
  'Free orthodontic consultation worth ₹1500',
]

export default function BenefitsBar() {
  // duplicated so the marquee loops seamlessly
  const loop = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS]
  return (
    <div className="benefits">
      <div className="benefits__track">
        {loop.map((item, i) => (
          <span className="benefits__item" key={i}>
            <span className="benefits__dot" aria-hidden="true">
              ✦
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
