import { createFileRoute, redirect } from '@tanstack/react-router'
import { SiteShell } from '../components/SiteShell'
import { copy, isLocale } from '../content'

export const Route = createFileRoute('/$locale')({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale)) {
      throw redirect({ to: '/$locale', params: { locale: 'ko' } })
    }
  },
  head: ({ params }) => {
    const locale = isLocale(params.locale) ? params.locale : 'ko'
    const isEnglish = locale === 'en'
    return {
      meta: [
        { title: isEnglish ? 'ROOTIVE — Research to product' : '루티브 — 연구의 가능성을 제품으로' },
        {
          name: 'description',
          content: isEnglish
            ? 'Rootive is a student-founded venture team turning research potential into products that matter.'
            : '루티브는 연구의 가능성을 실제 사용자의 삶에 닿는 제품으로 확장하는 대학생 예비창업팀입니다.',
        },
        { property: 'og:title', content: isEnglish ? 'ROOTIVE — Research to product' : '루티브 — 연구의 가능성을 제품으로' },
        { property: 'og:description', content: copy[locale].hero.description },
        { property: 'og:url', content: `https://rootive.org/${locale}` },
      ],
      links: [
        { rel: 'canonical', href: `https://rootive.org/${locale}` },
        { rel: 'alternate', hrefLang: 'ko', href: 'https://rootive.org/ko' },
        { rel: 'alternate', hrefLang: 'en', href: 'https://rootive.org/en' },
        { rel: 'alternate', hrefLang: 'x-default', href: 'https://rootive.org/ko' },
      ],
    }
  },
  component: LocaleLayout,
})

function LocaleLayout() {
  const { locale } = Route.useParams()
  return <SiteShell locale={isLocale(locale) ? locale : 'ko'} />
}
