import { createFileRoute } from '@tanstack/react-router'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SiteShell'
import { copy, isLocale, projects } from '../content'

export const Route = createFileRoute('/$locale/projects/')({
  head: ({ params }) => {
    const locale = isLocale(params.locale) ? params.locale : 'ko'
    return {
      meta: [
        { title: locale === 'ko' ? '프로젝트 — ROOTIVE' : 'Projects — ROOTIVE' },
        { name: 'description', content: copy[locale].projects.intro },
      ],
    }
  },
  component: ProjectsPage,
})

function ProjectsPage() {
  const params = Route.useParams()
  const locale = isLocale(params.locale) ? params.locale : 'ko'
  const t = copy[locale]

  return (
    <section className="page-section projects-page">
      <div className="shell">
        <SectionHeading label={t.projects.label} title={t.projects.title} intro={t.projects.intro} />
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} locale={locale} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
