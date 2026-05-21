import { site } from '../../data/site'
import './Contact.css'

export default function Contact() {
  const { email, social } = site

  return (
    <section
      className="contact section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <h2 className="section__title" id="contact-heading">
        Contact
      </h2>
      <p className="contact__lead">
        Open to opportunities and collaboration. Reach out anytime.
      </p>
      <div className="contact__actions">
        <a className="contact__btn contact__btn--primary" href={`mailto:${email}`}>
          Email me
        </a>
        {social.github && (
          <a
            className="contact__btn contact__btn--secondary"
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {social.linkedin && (
          <a
            className="contact__btn contact__btn--secondary"
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        )}
      </div>
    </section>
  )
}
