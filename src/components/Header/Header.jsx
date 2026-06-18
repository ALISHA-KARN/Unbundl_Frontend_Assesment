import './Header.css'

export default function Header() {
  return (
    <header className="header" id="top">
      <div className="container header__inner">
        <a href="#top" className="header__logo">
          <span className="header__logo-name">whistle</span>
          <span className="header__logo-tag">AND SMILE</span>
        </a>

        <a href="tel:01169328350" className="header__phone" aria-label="Call us">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <path
              d="M6.5 4h3l1.5 4-2 1.2a11 11 0 0 0 5.8 5.8L16 13l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </header>
  )
}
