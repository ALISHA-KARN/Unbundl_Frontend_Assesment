import { useState } from 'react'
import faqs from '../../data/faqs.js'
import './Faq.css'

export default function Faq() {
  // All collapsed by default (matches the Figma "+" state). One open at a time.
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId((current) => (current === id ? null : id))

  return (
    <section className="faq section" id="faqs">
      <div className="container">
        <h2 className="section-title text-center mx-auto faq__title">
          <span>Got Questions?</span> We&apos;ve got answers
        </h2>

        <div className="faq__list">
          {faqs.map((item) => {
            const isOpen = openId === item.id
            return (
              <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={item.id}>
                <h3 className="faq__question-wrap">
                  <button
                    className="faq__question"
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-panel`}
                    id={`${item.id}-button`}
                    onClick={() => toggle(item.id)}
                  >
                    <span>{item.question}</span>
                    <span className="faq__toggle" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq__panel"
                  id={`${item.id}-panel`}
                  role="region"
                  aria-labelledby={`${item.id}-button`}
                >
                  <div className="faq__panel-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
