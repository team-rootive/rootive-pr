import { Link, Outlet, useRouterState } from '@tanstack/react-router'
import { IconArrowUpRight } from '@tabler/icons-react'
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
import type { Locale } from '../content'
import { copy, links } from '../content'
import { SocialIcon } from './SocialIcon'

export function SiteShell({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const reduceMotion = useReducedMotion()
  const previousPathname = useRef(pathname)
  const previousIndex = getNavigationIndex(previousPathname.current)
  const currentIndex = getNavigationIndex(pathname)
  const direction = currentIndex === previousIndex ? 0 : currentIndex > previousIndex ? 1 : -1
  const nextLocale: Locale = locale === 'ko' ? 'en' : 'ko'
  const nextPath = pathname.replace(/^\/(ko|en)(?=\/|$)/, `/${nextLocale}`)

  useEffect(() => {
    previousPathname.current = pathname
  }, [pathname])

  return (
    <div className="site-frame">
      <header className="site-header">
        <div className="shell header-inner">
          <Link to="/$locale" params={{ locale }} className="brand" aria-label="Rootive home">
            <img className="brand-logo" src="/rootive-wordmark-black.svg" alt="ROOTIVE" />
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            <Link className="line-hover" to="/$locale" params={{ locale }} activeOptions={{ exact: true }}>
              {t.nav.home}
            </Link>
            <Link className="line-hover" to="/$locale/projects" params={{ locale }}>
              {t.nav.projects}
            </Link>
            <Link className="line-hover" to="/$locale/team" params={{ locale }}>
              {t.nav.team}
            </Link>
            <a className="line-hover" href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="header-actions">
            <a className="language-switch line-hover" href={nextPath} hrefLang={nextLocale}>
              {nextLocale.toUpperCase()}
            </a>
            <a className="header-contact" href={`mailto:${t.contact.email}`}>
              {t.nav.contact}
              <IconArrowUpRight size={16} stroke={1.8} aria-hidden="true" />
            </a>
          </div>

          <details className="mobile-menu">
            <summary aria-label="Open navigation">
              <span />
              <span />
            </summary>
            <nav aria-label="Mobile navigation">
              <Link to="/$locale" params={{ locale }}>
                {t.nav.home}
              </Link>
              <Link to="/$locale/projects" params={{ locale }}>
                {t.nav.projects}
              </Link>
              <Link to="/$locale/team" params={{ locale }}>
                {t.nav.team}
              </Link>
              <a href={`mailto:${t.contact.email}`}>{t.nav.contact}</a>
              <a href={nextPath}>{nextLocale.toUpperCase()}</a>
            </nav>
          </details>
        </div>
      </header>

      <main className="route-stage">
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            className="route-transition"
            key={pathname}
            custom={direction}
            variants={reduceMotion ? reducedMotionVariants : pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="site-footer" id="contact">
        <div className="shell footer-cta">
          <div>
            <p className="eyebrow light">{t.contact.label}</p>
            <h2>{formatLines(t.contact.title)}</h2>
          </div>
          <div className="footer-contact-copy">
            <p>{t.contact.body}</p>
            <a className="circle-link" href={`mailto:${t.contact.email}`} aria-label={t.contact.cta}>
              <IconArrowUpRight size={30} stroke={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <div className="footer-brand">
            <img className="footer-logo" src="/rootive-wordmark-white.svg" alt="ROOTIVE" />
            <span>{t.footer.tagline}</span>
          </div>
          <div className="footer-links" aria-label={t.footer.related}>
            {links.map((link) => (
              <a className="line-hover icon-link" key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <SocialIcon type={link.type} />
                {link.label}
              </a>
            ))}
          </div>
          <p className="copyright">© {new Date().getFullYear()} {t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
}

const pageVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction === 0 ? 0 : direction * 44,
    transition: { duration: 0 },
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction === 0 ? 0 : direction * -22,
    transition: { duration: 0.24, ease: [0.4, 0, 1, 1] },
  }),
}

const reducedMotionVariants: Variants = {
  enter: { opacity: 1, x: 0 },
  center: { opacity: 1, x: 0, transition: { duration: 0 } },
  exit: { opacity: 1, x: 0, transition: { duration: 0 } },
}

function getNavigationIndex(pathname: string) {
  const localizedPath = pathname.replace(/^\/(ko|en)(?=\/|$)/, '') || '/'

  if (localizedPath.startsWith('/projects')) return 1
  if (localizedPath.startsWith('/team')) return 2
  return 0
}

export function formatLines(text: string) {
  return text.split('\n').map((line, index) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < text.split('\n').length - 1 ? <br /> : null}
    </span>
  ))
}

export function SectionHeading({
  label,
  title,
  intro,
}: {
  label: string
  title: string
  intro?: string
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <div className="section-heading-grid">
        <h2>{formatLines(title)}</h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
      </div>
    </div>
  )
}
