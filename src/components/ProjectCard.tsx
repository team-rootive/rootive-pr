import { Link } from '@tanstack/react-router'
import { IconArrowUpRight } from '@tabler/icons-react'
import type { Locale, LocalizedProject } from '../content'
import { copy } from '../content'

export function ProjectCard({ project, locale, featured = false }: { project: LocalizedProject; locale: Locale; featured?: boolean }) {
  const t = copy[locale]

  return (
    <article className={`project-card project-${project.accent}${featured ? ' project-featured' : ''}`}>
      <Link to="/$locale/projects/$slug" params={{ locale, slug: project.slug }} className="project-visual" aria-label={`${project.title[locale]} ${t.projects.viewProject}`}>
        <div className="project-number">{project.index}</div>
        <div className="project-art" aria-hidden="true">
          {project.accent === 'garden' ? (
            <>
              <span className="plant-stem" />
              <span className="plant-leaf plant-leaf-one" />
              <span className="plant-leaf plant-leaf-two" />
              <span className="plant-orbit" />
              <span className="plant-dot" />
            </>
          ) : project.accent === 'school' ? (
            <>
              <span className="school-card school-card-one" />
              <span className="school-card school-card-two" />
              <span className="school-line school-line-one" />
              <span className="school-line school-line-two" />
            </>
          ) : (
            <>
              <span className="health-ring health-ring-one" />
              <span className="health-ring health-ring-two" />
              <span className="health-pulse" />
            </>
          )}
        </div>
        <span className="project-open" aria-hidden="true"><IconArrowUpRight size={22} stroke={1.6} /></span>
      </Link>
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.category[locale]}</span>
          <span>{project.year}</span>
        </div>
        <h3>
          <Link className="line-hover project-title-link" to="/$locale/projects/$slug" params={{ locale, slug: project.slug }}>
            {project.title[locale]}
          </Link>
        </h3>
        <p>{project.summary[locale]}</p>
        <div className="tag-row">
          <span className={`status status-${project.status}`}>{t.projects.status[project.status]}</span>
          {project.tags.slice(0, featured ? 3 : 2).map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  )
}
