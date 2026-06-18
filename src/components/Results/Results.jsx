import './Results.css'

const RESULTS = [
  { seed: 'res1', concern: 'Gaps', duration: '8 months' },
  { seed: 'res2', concern: 'Crooked Teeth', duration: '8 months' },
  { seed: 'res3', concern: 'Open Bite', duration: '8 months' },
  { seed: 'res4', concern: 'Protruding Teeth', duration: '8 months' },
]

export default function Results() {
  return (
    <section className="results section">
      <div className="container">
        <h2 className="section-title text-center mx-auto">Results You'll Love</h2>

        <div className="results__grid">
          {RESULTS.map((item) => (
            <article className="results__card" key={item.seed}>
              <div className="results__imgs">
                <img
                  src={`https://picsum.photos/seed/${item.seed}b/240/220`}
                  alt={`Before — ${item.concern}`}
                  loading="lazy"
                />
                <img
                  src={`https://picsum.photos/seed/${item.seed}a/240/220`}
                  alt={`After — ${item.concern}`}
                  loading="lazy"
                />
              </div>
              <div className="results__labels">
                <span>Before</span>
                <span>After</span>
              </div>
              <dl className="results__meta">
                <div>
                  <dt>Concern</dt>
                  <dd>{item.concern}</dd>
                </div>
                <div>
                  <dt>Treatment Duration</dt>
                  <dd>{item.duration}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
