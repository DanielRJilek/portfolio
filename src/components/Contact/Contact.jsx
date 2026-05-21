import SocialIcons from '../SocialIcons/SocialIcons'
import './Contact.css'

export default function Contact() {
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
      <SocialIcons />
    </section>
  )
}
