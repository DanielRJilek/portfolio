import { education } from '../../data/site'
import './Education.css'

export default function Education() {
  return (
    <section
      className="education section"
      id="education"
      aria-labelledby="education-heading"
    >
      <h2 className="section__title" id="education-heading">
        Education
      </h2>
      <ul className="education__list">
        {education.map((entry) => (
          <li key={entry.school} className="education__item">
            <img
              className="education__logo"
              src={entry.logo}
              alt={entry.logoAlt}
              width={80}
              height={80}
            />
            <div className="education__info">
              <div className="education__header">
                <h3 className="education__school">{entry.school}</h3>
                {entry.dates && (
                  <p className="education__dates">{entry.dates}</p>
                )}
              </div>
              <p className="education__detail">{entry.detail}</p>
              {entry.location && (
                <p className="education__location">{entry.location}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
