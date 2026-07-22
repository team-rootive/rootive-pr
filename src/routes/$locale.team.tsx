import { createFileRoute } from '@tanstack/react-router'
import { SectionHeading } from '../components/SiteShell'
import { SocialIcon } from '../components/SocialIcon'
import { copy, isLocale, team } from '../content'

export const Route = createFileRoute('/$locale/team')({
  head: ({ params }) => {
    const locale = isLocale(params.locale) ? params.locale : 'ko'
    return {
      meta: [
        { title: locale === 'ko' ? '팀 — ROOTIVE' : 'Team — ROOTIVE' },
        { name: 'description', content: copy[locale].team.intro },
      ],
    }
  },
  component: TeamPage,
})

function TeamPage() {
  const params = Route.useParams()
  const locale = isLocale(params.locale) ? params.locale : 'ko'
  const t = copy[locale]
  const leadership = team.filter((member) => member.group === 'leadership')
  const contributors = team.filter((member) => member.group === 'project')

  return (
    <section className="page-section team-page">
      <div className="shell">
        <SectionHeading label={t.team.label} title={t.team.title} intro={t.team.intro} />
        <TeamGroup title={t.team.leadership} members={leadership} locale={locale} startIndex={0} />
        <TeamGroup title={t.team.contributors} members={contributors} locale={locale} startIndex={leadership.length} />
      </div>
    </section>
  )
}

function TeamGroup({ title, members, locale, startIndex }: { title: string; members: typeof team; locale: 'ko' | 'en'; startIndex: number }) {
  return (
    <div className="team-group">
      <div className="team-group-title">
        <h2>{title}</h2>
        <span>{String(members.length).padStart(2, '0')}</span>
      </div>
      <div className="team-grid">
        {members.map((member, index) => (
          <article className="team-card" key={member.name.en}>
            <div className={`avatar avatar-${((startIndex + index) % 5) + 1}`}>
              <span>{member.initials}</span>
            </div>
            <div className="team-card-copy">
              <h3>{member.name[locale]}</h3>
              <p className="member-role">{member.role[locale]}</p>
              <p className="member-affiliation">{member.affiliation[locale]}</p>
              <div className="member-contacts" aria-label={`${member.name[locale]} contact links`}>
                {member.emails.length ? (
                  <div className="member-emails">
                    {member.emails.map((email) => (
                      <a className="line-hover member-contact-link" href={`mailto:${email}`} key={email}>
                        <SocialIcon type="email" size={16} />
                        <span>{email}</span>
                      </a>
                    ))}
                  </div>
                ) : null}
                {member.links ? (
                  <div className="member-socials">
                    {member.links.map((link) => (
                      <a className="line-hover member-contact-link" href={link.url} target="_blank" rel="noreferrer" key={`${link.label}-${link.url}`}>
                        <SocialIcon type={link.type} size={17} />
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
