import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const { title, description, tech, image, imageAlt, liveUrl, repoUrl } =
    project

  const mediaClassName = `project-card__media${
    image ? '' : ' project-card__media--placeholder'
  }`

  const mediaContent = image ? (
    <img
      className="project-card__image"
      src={image}
      alt={imageAlt ?? `${title} screenshot`}
      loading="lazy"
    />
  ) : null

  const media =
    liveUrl && image ? (
      <a
        className={mediaClassName}
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open live demo: ${title}`}
      >
        {mediaContent}
      </a>
    ) : (
      <div
        className={mediaClassName}
        aria-hidden={!image ? true : undefined}
      >
        {mediaContent}
      </div>
    )

  return (
    <article className="project-card">
      {media}
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        {tech?.length > 0 && (
          <ul className="project-card__tech" aria-label="Technologies">
            {tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <div className="project-card__links">
          {liveUrl && (
            <a
              className="project-card__link"
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
          )}
          {repoUrl && (
            <a
              className="project-card__link"
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
