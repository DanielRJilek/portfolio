import { useEffect, useState } from 'react'
import './ProjectCard.css'

const SLIDE_INTERVAL_MS = 4000

export default function ProjectCard({ project }) {
  const { title, description, tech, image, images, imageAlt, liveUrl, repoUrl } =
    project

  const slides = images ?? (image ? [image] : [])
  const hasImage = slides.length > 0
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (slides.length <= 1 || paused) return

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_INTERVAL_MS)

    return () => clearInterval(id)
  }, [slides.length, paused])

  const mediaClassName = `project-card__media${
    hasImage ? '' : ' project-card__media--placeholder'
  }`

  const mediaContent = hasImage ? (
    <div className="project-card__slideshow">
      {slides.map((src, i) => (
        <img
          key={src}
          className={`project-card__image${
            i === index ? ' project-card__image--active' : ''
          }`}
          src={src}
          alt={imageAlt ?? `${title} screenshot`}
          loading={i === 0 ? 'lazy' : 'eager'}
          aria-hidden={i !== index}
        />
      ))}
    </div>
  ) : null

  const pauseHandlers = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
  }

  const media =
    liveUrl && hasImage ? (
      <a
        className={mediaClassName}
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open live demo: ${title}`}
        {...pauseHandlers}
      >
        {mediaContent}
      </a>
    ) : (
      <div
        className={mediaClassName}
        aria-hidden={!hasImage ? true : undefined}
        {...pauseHandlers}
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
