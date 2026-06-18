import './DreamSmiles.css'

export default function DreamSmiles() {
  return (
    <section className="dream section">
      <div className="container dream__inner">
        <div className="dream__content">
          <h2 className="section-title">Dream smiles achieved secretly</h2>
          <p>
            Experience the superior quality of our Whistle Aligners crafted with 3-layer
            PU material. With 450+ clinics nationwide, enjoy comfortable treatment by
            expert orthodontists at House of Clove.
          </p>
          <p>
            The pricing is different for every case. Cases with higher complexity
            requiring more aligners and additional time and effort from our dentists.
          </p>
        </div>

        <div className="dream__card">
          <div className="dream__card-top">
            <h3>Whistle Aligners</h3>
            <img
              className="dream__case"
              src="https://picsum.photos/seed/whistle-case/160/140"
              alt="Whistle aligner case"
              width="110"
              height="96"
            />
          </div>

          <p className="dream__old">₹84,000</p>
          <p className="dream__price">
            starting at <strong>₹47,999</strong>
          </p>
          <p className="dream__tax">inc. of all taxes</p>

          <ul className="dream__perks">
            <li>
              <span className="dream__check" aria-hidden="true">✓</span>
              Offer valid for a limited time
            </li>
            <li>
              <span className="dream__check" aria-hidden="true">✓</span>
              Easy financing options
            </li>
          </ul>

          <a href="#book-scan" className="dream__learn">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
