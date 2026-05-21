import { site } from '../../data/site'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer__copy">
        &copy; {year} {site.name}. Built with React and Vite.
      </p>
    </footer>
  )
}
