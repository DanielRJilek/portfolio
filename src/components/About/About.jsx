import { site } from '../../data/site'
import './About.css'

export default function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-heading">
      <h2 className="section__title" id="about-heading">
        About Me
      </h2>
      <p className="about__bio">{site.bio}</p>
    </section>
  )
}
