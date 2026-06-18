import './ComparisonTable.css'

const ROWS = [
  { label: 'Easy to complex cases', whistle: 'Yes, mild to complex', other: 'No, only mild to moderate' },
  { label: 'Clear-cut Pricing', whistle: true, other: false },
  { label: 'Aligner Change', whistle: 'Every 10 days', other: 'Every 2 weeks' },
  { label: 'Clinical Partnership', whistle: true, other: false },
  { label: 'Movement Between Cities', whistle: true, other: false },
  { label: 'Complimentary Teeth Scaling', whistle: true, other: false },
]

function Cell({ value }) {
  if (typeof value === 'string') {
    return <span className="ctable__text">{value}</span>
  }
  return value ? (
    <span className="ctable__mark is-yes">✓</span>
  ) : (
    <span className="ctable__mark is-no">✕</span>
  )
}

export default function ComparisonTable() {
  return (
    <section className="ctable section">
      <div className="container">
        <h2 className="section-title text-center mx-auto ctable__title">
          What sets Whistle apart?
        </h2>

        <div className="ctable__wrap">
          <table className="ctable__table">
            <thead>
              <tr>
                <th className="ctable__feature-col">Features</th>
                <th className="ctable__whistle-col">
                  <span className="ctable__brand">
                    whistle<sup>AND SMILE</sup>
                  </span>
                </th>
                <th>Other Brands</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label}>
                  <td className="ctable__feature">
                    <span>{row.label}</span>
                    <span className="ctable__chevron" aria-hidden="true">⌄</span>
                  </td>
                  <td className="ctable__whistle-cell">
                    <Cell value={row.whistle} />
                  </td>
                  <td>
                    <Cell value={row.other} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
