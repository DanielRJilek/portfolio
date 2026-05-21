import { navLinks, site } from '../../data/site'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <a className="header__brand" href="#top">
        {site.name}
      </a>
      <nav className="header__nav" aria-label="Main">
        <ul className="header__list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className="header__link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
    