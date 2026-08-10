import { HeadContent, Link, Scripts, createRootRoute, useRouterState } from '@tanstack/react-router'
import { IconArrowRight } from '@tabler/icons-react'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Rootive — Beyond Greenery',
      },
      {
        name: 'description',
        content: '루티브는 연구의 가능성을 실제 사용자의 삶에 닿는 제품으로 확장하는 대학생 예비창업팀입니다.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: 'ROOTIVE',
      },
      {
        name: 'theme-color',
        content: '#00213f',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const locale = pathname.startsWith('/en') ? 'en' : 'ko'

  return (
    <html lang={locale}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const locale = pathname.startsWith('/en') ? 'en' : 'ko'
  const isEnglish = locale === 'en'

  return (
    <div className="not-found">
      <span>404</span>
      <h1>{isEnglish ? 'This page could not be found.' : '페이지를 찾을 수 없습니다.'}</h1>
      <p>{isEnglish ? 'The page may have moved or no longer exists.' : '요청하신 페이지가 이동했거나 존재하지 않습니다.'}</p>
      <Link className="icon-link" to="/$locale" params={{ locale }}>
        {isEnglish ? 'Back home' : '홈으로 돌아가기'}
        <IconArrowRight size={17} stroke={1.8} aria-hidden="true" />
      </Link>
    </div>
  )
}
