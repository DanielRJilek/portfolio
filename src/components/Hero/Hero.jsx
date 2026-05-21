import { site } from '../../data/site'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <p className="hero__eyebrow">Hi, I&apos;m</p>
      <h1 className="hero__title" id="hero-heading">
        {site.name}
      </h1>
      <p className="hero__role">{site.role}</p>
      <p className="hero__tagline">{site.tagline}</p>
      <div className="hero__actions">
        <a className="hero__btn hero__btn--primary" href="#projects">
          View projects
        </a>
        <a className="hero__btn hero__btn--secondary" href="#contact">
          Get in touch
        </a>
        {site.resumeUrl && (
          <a
            className="hero__btn hero__btn--secondary"
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        )}
      </div>
    </section>
  )
}
