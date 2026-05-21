import { skillGroups } from '../../data/site'
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
      <div className="skills__groups">
        {skillGroups.map((group) => (
          <div key={group.title} className="skills__group">
            <h3 className="skills__group-title">{group.title}</h3>
            <ul className="skills__list">
              {group.skills.map((skill) => (
                <li key={skill} className="skills__item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
