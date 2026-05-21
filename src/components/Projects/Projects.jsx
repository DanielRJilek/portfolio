import { projects } from '../../data/projects'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Projects.css'

export default function Projects() {
  return (
    <section
      className="projects section"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <h2 className="section__title" id="projects-heading">
        Projects
      </h2>
      <ul className="projects__grid">
        {projects.map((project) => (
          <li key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  )
}
