import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconExternalLink,
  IconMail,
  IconWorldWww,
} from '@tabler/icons-react'

export type SocialIconType = 'email' | 'github' | 'linkedin' | 'website' | 'external'

export function SocialIcon({ type, size = 17 }: { type: SocialIconType; size?: number }) {
  const props = { size, stroke: 1.7, 'aria-hidden': true as const }

  switch (type) {
    case 'email':
      return <IconMail {...props} />
    case 'github':
      return <IconBrandGithub {...props} />
    case 'linkedin':
      return <IconBrandLinkedin {...props} />
    case 'website':
      return <IconWorldWww {...props} />
    default:
      return <IconExternalLink {...props} />
  }
}
