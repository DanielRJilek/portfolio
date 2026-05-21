import { site } from '../../data/site'
import SocialIcons from '../SocialIcons/SocialIcons'
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
      <SocialIcons className="hero__social" />
      <div className="hero__actions">
        <a className="hero__btn hero__btn--primary" href="#projects">
          View projects
        </a>
      </div>
    </section>
  )
}
