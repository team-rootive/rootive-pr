import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { SocialIcon } from '../components/SocialIcon'
import { copy, getLocalizedProject, isLocale, projects } from '../content'

export const Route = createFileRoute('/$locale/projects/$slug')({
  loader: ({ params }) => {
    const project = getLocalizedProject(params.slug)
    if (!project) throw notFound()
    return { project }
  },
  head: ({ params }) => {
    const locale = isLocale(params.locale) ? params.locale : 'ko'
    const project = getLocalizedProject(params.slug)
    if (!project) return {}
    return {
      meta: [
        { title: `${project.title[locale]} — ROOTIVE` },
        { name: 'description', content: project.summary[locale] },
        { property: 'og:title', content: `${project.title[locale]} — ROOTIVE` },
        { property: 'og:description', content: project.summary[locale] },
      ],
    }
  },
  component: ProjectDetailPage,
})

function ProjectDetailPage() {
  const params = Route.useParams()
  const locale = isLocale(params.locale) ? params.locale : 'ko'
  const { project } = Route.useLoaderData()
  const t = copy[locale]
  const projectIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(projectIndex + 1) % projects.length]

  return (
    <article className={`project-detail project-detail-${project.accent}`}>
      <header className="project-detail-hero">
        <div className="shell">
          <Link className="back-link line-hover" to="/$locale/projects" params={{ locale }}>
            <IconArrowLeft size={17} stroke={1.7} aria-hidden="true" />
            {t.projects.back}
          </Link>
          <div className="project-detail-heading">
            <div>
              <p className="eyebrow">{project.category[locale]}</p>
              <h1>{project.title[locale]}</h1>
            </div>
            <div className="project-detail-meta">
              <span>{project.year}</span>
              <span className={`status status-${project.status}`}>{t.projects.status[project.status]}</span>
            </div>
          </div>
          <div className="project-detail-art" aria-hidden="true">
            <span className="detail-word">{project.title.en}</span>
            <span className="detail-orbit detail-orbit-one" />
            <span className="detail-orbit detail-orbit-two" />
            <span className="detail-core">{project.index}</span>
          </div>
        </div>
      </header>

      <div className="shell project-detail-body">
        <section className="project-overview">
          <p className="eyebrow">{t.projects.overview}</p>
          <p className="project-lead">{project.description[locale]}</p>
          <div className="tag-row detail-tags">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </section>
        <div className="project-detail-columns">
          <section>
            <p className="eyebrow">{t.projects.focus}</p>
            <ol>
              {project.features[locale].map((feature, index) => (
                <li key={feature}><span>0{index + 1}</span>{feature}</li>
              ))}
            </ol>
          </section>
          <section>
            <p className="eyebrow">{t.projects.achievements}</p>
            <ul>
              {project.highlights[locale].map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            {project.externalUrl ? (
              <a className="button button-primary" href={project.externalUrl} target="_blank" rel="noreferrer">
                <SocialIcon type="github" size={18} />
                GitHub
              </a>
            ) : null}
          </section>
        </div>
        <Link className="next-project" to="/$locale/projects/$slug" params={{ locale, slug: nextProject.slug }}>
          <span>{t.projects.next}</span>
          <strong>{nextProject.title[locale]}</strong>
          <span className="next-project-arrow" aria-hidden="true"><IconArrowRight size={31} stroke={1.5} /></span>
        </Link>
      </div>
    </article>
  )
}
