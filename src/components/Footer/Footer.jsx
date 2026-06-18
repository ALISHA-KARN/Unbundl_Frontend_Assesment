import './Footer.css'

const QUICK_LINKS = [
  'Home',
  'Book a Free Scan',
  'How it Works',
  'Range of Aligners',
  'Aligners vs Braces',
  'FAQs',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <a href="#top">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get in Touch Now!</h4>
          <ul>
            <li>
              <a href="tel:01169328350">📞 011-6932-8350</a>
            </li>
            <li>
              <a href="mailto:support@whistle.in">✉ support@whistle.in</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Follow us on</h4>
          <div className="footer__socials">
            {['IG', 'FB', 'X'].map((s) => (
              <a href="#top" key={s} aria-label={s}>
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col footer__legal">
          <a href="#top">Privacy Policy</a>
          <a href="#top">Terms of Service</a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Whistle and Smile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
