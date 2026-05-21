import { skills } from '../../data/site'
import './Skills.css'

export default function Skills() {
  return (
    <section
      className="skills section"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <h2 className="section__title" id="skills-heading">
        Skills
      </h2>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li key={skill} className="skills__item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
