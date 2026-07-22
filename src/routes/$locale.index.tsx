import { createFileRoute, Link } from '@tanstack/react-router'
import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react'
import { ProjectCard } from '../components/ProjectCard'
import { formatLines, SectionHeading } from '../components/SiteShell'
import { copy, isLocale, projects, team } from '../content'

export const Route = createFileRoute('/$locale/')({ component: HomePage })

function HomePage() {
  const params = Route.useParams()
  const locale = isLocale(params.locale) ? params.locale : 'ko'
  const t = copy[locale]

  return (
    <>
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{formatLines(t.hero.title)}</h1>
            <div className="hero-bottom">
              <p>{t.hero.description}</p>
              <div className="hero-actions">
                <Link className="button button-primary" to="/$locale/projects" params={{ locale }}>
                  {t.hero.primaryCta} <IconArrowUpRight size={18} stroke={1.7} aria-hidden="true" />
                </Link>
                <Link className="text-link line-hover" to="/$locale/team" params={{ locale }}>
                  {t.hero.secondaryCta} <IconArrowRight size={18} stroke={1.7} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-object" aria-hidden="true">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-core">
              <img src="/favicon.svg" alt="" />
            </div>
            <div className="hero-node node-one">Research</div>
            <div className="hero-node node-two">Build</div>
            <div className="hero-node node-three">Impact</div>
            <div className="hero-caption">{t.hero.orbitLabel}</div>
          </div>
        </div>
        <div className="shell hero-scroll" aria-hidden="true">
          <span>SCROLL</span>
          <i />
        </div>
      </section>

      <section className="section about-section">
        <div className="shell">
          <SectionHeading label={t.intro.label} title={t.intro.title} intro={t.intro.body} />
          <div className="values-grid">
            {t.intro.values.map((value) => (
              <article key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-section">
        <div className="shell">
          <SectionHeading label={t.projects.label} title={t.projects.title} intro={t.projects.intro} />
          <div className="project-list home-project-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} locale={locale} featured={index === 0} />
            ))}
          </div>
          <div className="section-end-link">
            <Link className="text-link line-hover" to="/$locale/projects" params={{ locale }}>
              {t.projects.viewAll} <IconArrowRight size={18} stroke={1.7} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section progress-section">
        <div className="shell">
          <SectionHeading label={t.achievements.label} title={t.achievements.title} />
          <div className="progress-grid">
            {t.achievements.items.map((item) => (
              <article key={item.title}>
                <strong>{item.value}</strong>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-preview-section">
        <div className="shell">
          <SectionHeading label={t.team.label} title={t.team.title} intro={t.team.intro} />
          <div className="team-preview-grid">
            {team.slice(0, 5).map((member, index) => (
              <article className="team-preview-card" key={member.name.en}>
                <div className={`avatar avatar-${(index % 5) + 1}`}>
                  <span>{member.initials}</span>
                </div>
                <h3>{member.name[locale]}</h3>
                <p>{member.role[locale]}</p>
              </article>
            ))}
          </div>
          <div className="team-preview-footer">
            <p><strong>10</strong> {t.team.members}</p>
            <Link className="button button-outline" to="/$locale/team" params={{ locale }}>
              {t.team.viewAll} <IconArrowRight size={18} stroke={1.7} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
