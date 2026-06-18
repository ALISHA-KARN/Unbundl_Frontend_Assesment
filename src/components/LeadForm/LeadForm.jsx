import { useState } from 'react'
import './LeadForm.css'

export default function LeadForm() {
  const [concern, setConcern] = useState('yes')
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const canSubmit = name.trim() && mobile.trim().length >= 10 && consent

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitted(true)
  }

  return (
    <section className="lead" id="book-scan">
      <div className="container">
        <h2 className="lead__title">Do you have Teeth Gaps or Crooked Teeth?</h2>

        <div className="lead__radios" role="radiogroup" aria-label="Teeth concern">
          {['yes', 'no'].map((value) => (
            <label
              key={value}
              className={`lead__radio ${concern === value ? 'is-checked' : ''}`}
            >
              <input
                type="radio"
                name="concern"
                value={value}
                checked={concern === value}
                onChange={() => setConcern(value)}
              />
              <span className="lead__radio-dot" aria-hidden="true" />
              {value === 'yes' ? 'Yes' : 'No'}
            </label>
          ))}
        </div>

        {submitted ? (
          <p className="lead__success" role="status">
            🎉 Thanks{name ? `, ${name.split(' ')[0]}` : ''}! Our team will call you
            shortly to book your free scan.
          </p>
        ) : (
          <form className="lead__form" onSubmit={handleSubmit} noValidate>
            <div className="lead__field">
              <input
                id="lead-name"
                type="text"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="lead-name">Full Name*</label>
            </div>

            <div className="lead__field lead__field--phone">
              <span className="lead__prefix">+91</span>
              <input
                id="lead-mobile"
                type="tel"
                placeholder="Mobile number*"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ''))}
                maxLength={10}
              />
            </div>

            <button
              type="submit"
              className="lead__submit"
              disabled={!canSubmit}
            >
              Book a Free Scan
            </button>

            <label className="lead__consent">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              I hereby consent to receive calls / messages from Whistle and its partners
              and override DND settings.
            </label>
          </form>
        )}
      </div>
    </section>
  )
}
