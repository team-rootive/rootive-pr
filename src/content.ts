export type Locale = 'ko' | 'en'

export const locales: Locale[] = ['ko', 'en']

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export const copy = {
  ko: {
    languageName: '한국어',
    nav: {
      home: '홈',
      projects: '프로젝트',
      team: '팀',
      contact: '문의',
    },
    hero: {
      eyebrow: 'TEAM ROOTIVE',
      title: '연구의 가능성을,\n삶에 닿는 제품으로.',
      description:
        '루티브는 GIST와 KAIST의 학부생들이 함께하는 예비창업팀입니다. 연구에서 발견한 가능성을 실제 사용자의 문제를 해결하는 제품으로 확장합니다.',
      primaryCta: '프로젝트 살펴보기',
      secondaryCta: '팀 이야기',
      orbitLabel: 'Research → Product',
    },
    intro: {
      label: 'ABOUT ROOTIVE',
      title: '실패해도 의미 있게.\n배운 것은 제품으로.',
      body: '스마트팜 연구 프로젝트 ‘G-쿠아리움’에서 출발한 루티브는 연구 결과를 사회적 가치로 전환할 수 있다는 믿음으로 만들어졌습니다. 우리는 기술, 기획, 디자인과 사업의 경계를 넘나들며 더 나은 일상을 위한 제품을 만듭니다.',
      values: [
        { number: '01', title: 'Research deeply', body: '현장의 문제를 관찰하고 데이터로 이해합니다.' },
        { number: '02', title: 'Build together', body: '전공과 역할의 경계를 넘어 함께 만듭니다.' },
        { number: '03', title: 'Create impact', body: '연구를 사용자가 체감하는 변화로 연결합니다.' },
      ],
    },
    projects: {
      label: 'SELECTED PROJECTS',
      title: '가능성을 검증하고,\n제품으로 전진합니다.',
      intro: '홈가드닝, 교육, 헬스케어에서 기술이 사람의 일상을 더 나아지게 만드는 방법을 탐색합니다.',
      viewAll: '전체 프로젝트',
      viewProject: '자세히 보기',
      back: '프로젝트로 돌아가기',
      overview: '프로젝트 소개',
      focus: '핵심 기능',
      achievements: '주요 성과',
      next: '다음 프로젝트',
      status: {
        active: '개발·실증 중',
        discovery: '탐색 중',
      },
    },
    achievements: {
      label: 'PROGRESS',
      title: '작은 연구에서 시작해\n더 큰 무대로.',
      items: [
        { value: '2nd', title: 'DMC Innovation Camp 2025', body: '예비창업팀 73개 팀 중 최우수상' },
        { value: 'Award', title: '1st NAMUHX Hackathon', body: 'SK인텔릭스 주관 해커톤 우수상' },
        { value: 'PoC', title: 'SK Intellix', body: 'A1 로봇 연계 공동 개발 협약' },
        { value: '2026', title: 'Tex-Corps', body: '공공기술 기반 시장연계 창업탐색 선정' },
      ],
    },
    team: {
      label: 'THE TEAM',
      title: '서로 다른 전공,\n하나의 실행력.',
      intro: 'GIST와 KAIST 학부생 10명이 기획, 개발, 연구, 운영을 연결합니다. 솔직하게 소통하고 빠르게 실험하며 함께 성장합니다.',
      viewAll: '팀 전체 보기',
      members: '팀원',
      leadership: '리더십',
      contributors: 'Club Rootive',
    },
    contact: {
      label: 'LET’S BUILD TOGETHER',
      title: '함께 만들 다음 가능성을\n기다리고 있습니다.',
      body: '기술 협력, PoC, 프로젝트와 파트너십에 관한 이야기를 나누고 싶다면 편하게 연락해 주세요.',
      cta: '이메일 보내기',
      email: 'board@rootive.org',
    },
    footer: {
      tagline: 'Beyond Greenery: We Root Your World',
      address: '전남광주통합특별시 첨단과기로 123, 광주과학기술원 창업진흥센터 A동 102호',
      copyright: 'ROOTIVE. All rights reserved.',
      related: 'Links',
    },
    notFound: {
      title: '페이지를 찾을 수 없습니다.',
      body: '요청하신 페이지가 이동했거나 존재하지 않습니다.',
      cta: '홈으로 돌아가기',
    },
  },
  en: {
    languageName: 'English',
    nav: {
      home: 'Home',
      projects: 'Projects',
      team: 'Team',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'ROOTIVE · STUDENT-FOUNDED PRODUCT TEAM',
      title: 'From research potential\nto products that matter.',
      description:
        'Rootive is a student-founded venture team from GIST and KAIST. We turn possibilities discovered through research into products that solve real problems for real people.',
      primaryCta: 'Explore projects',
      secondaryCta: 'Meet the team',
      orbitLabel: 'Research → Product',
    },
    intro: {
      label: 'ABOUT ROOTIVE',
      title: 'Make every attempt meaningful.\nTurn every lesson into a product.',
      body: 'Rootive began with G-Quarium, a smart-farm research project. We formed around a shared belief that research can become meaningful social value. Across technology, strategy, design, and business, we build products for a better everyday life.',
      values: [
        { number: '01', title: 'Research deeply', body: 'We observe real problems and understand them through data.' },
        { number: '02', title: 'Build together', body: 'We work across disciplines and roles as one team.' },
        { number: '03', title: 'Create impact', body: 'We connect research to change people can actually feel.' },
      ],
    },
    projects: {
      label: 'SELECTED PROJECTS',
      title: 'Validate the possibility.\nMove it toward a product.',
      intro: 'We explore how technology can improve everyday life across home gardening, education, and healthcare.',
      viewAll: 'All projects',
      viewProject: 'View project',
      back: 'Back to projects',
      overview: 'Overview',
      focus: 'Core features',
      achievements: 'Highlights',
      next: 'Next project',
      status: {
        active: 'Building & validating',
        discovery: 'In discovery',
      },
    },
    achievements: {
      label: 'PROGRESS',
      title: 'From a small research project\nto a bigger stage.',
      items: [
        { value: '2nd', title: 'DMC Innovation Camp 2025', body: 'Excellence Award among 73 pre-startup teams' },
        { value: 'Award', title: '1st NAMUHX Hackathon', body: 'Excellence Award at the SK Intellix hackathon' },
        { value: 'PoC', title: 'SK Intellix', body: 'Joint development agreement for the A1 robot' },
        { value: '2026', title: 'Tex-Corps', body: 'Selected for the public-tech market discovery program' },
      ],
    },
    team: {
      label: 'THE TEAM',
      title: 'Different disciplines.\nOne bias toward action.',
      intro: 'Ten undergraduate students from GIST and KAIST connect strategy, engineering, research, and operations. We communicate openly, test quickly, and grow together.',
      viewAll: 'Meet everyone',
      members: 'members',
      leadership: 'Leadership',
      contributors: 'Club Rootive',
    },
    contact: {
      label: 'LET’S BUILD TOGETHER',
      title: 'We are ready for\nthe next possibility.',
      body: 'Reach out to talk about technical collaboration, proof-of-concept projects, or partnerships.',
      cta: 'Send an email',
      email: 'board@rootive.org',
    },
    footer: {
      tagline: 'Beyond Greenery: We Root Your World',
      address:
        'Room 102, Building A, GIST Startup Promotion Center, 123 Cheomdangwagi-ro, Gwangju, Korea',
      copyright: 'ROOTIVE. All rights reserved.',
      related: 'Links',
    },
    notFound: {
      title: 'This page could not be found.',
      body: 'The page may have moved or no longer exists.',
      cta: 'Back home',
    },
  },
} as const

export type ProjectStatus = 'active' | 'discovery'

export interface LocalizedProject {
  slug: string
  index: string
  status: ProjectStatus
  year: string
  accent: 'garden' | 'school' | 'health'
  title: { ko: string; en: string }
  category: { ko: string; en: string }
  summary: { ko: string; en: string }
  description: { ko: string; en: string }
  features: { ko: string[]; en: string[] }
  highlights: { ko: string[]; en: string[] }
  tags: string[]
  externalUrl?: string
}

export const projects: LocalizedProject[] = [
  {
    slug: 'my-little-garden',
    index: '01',
    status: 'active',
    year: '2025—',
    accent: 'garden',
    title: { ko: '마이리틀가든', en: 'MyLittleGarden' },
    category: { ko: 'AI 홈가드닝 솔루션', en: 'AI Home-Gardening Solution' },
    summary: {
      ko: '사진 몇 장으로 식물의 종류와 상태를 이해하고, 맞춤형 관리 가이드를 제공하는 반려식물 애플리케이션.',
      en: 'A companion-plant app that identifies a plant and its condition from a few photos, then offers personalized care guidance.',
    },
    description: {
      ko: '마이리틀가든은 식물 인식, 생육 진단, 성장 기록과 맞춤형 가이드를 하나의 경험으로 연결합니다. 데이터 기반 분석과 대화형 기능을 통해 전문 지식이 없는 사용자도 반려식물을 꾸준하고 즐겁게 돌볼 수 있도록 돕습니다.',
      en: 'MyLittleGarden connects plant recognition, growth diagnosis, progress tracking, and personalized guidance in one experience. Data-driven analysis and conversational support help anyone care for plants with confidence and consistency.',
    },
    features: {
      ko: ['이미지 기반 식물 종 분류 및 상태 분석', '시간대·생육 단계별 맞춤 관리 가이드', '성장 기록 대시보드와 대화형 질의응답'],
      en: ['Image-based species and condition analysis', 'Care guidance tailored to time and growth stage', 'Growth dashboard and conversational Q&A'],
    },
    highlights: {
      ko: ['DMC Innovation Camp 2025 최우수상', '1st NAMUHX 해커톤 우수상', 'SK인텔릭스 A1 로봇 연계 PoC', '2026 Tex-Corps 선정'],
      en: ['DMC Innovation Camp 2025 Excellence Award', '1st NAMUHX Hackathon Excellence Award', 'PoC with the SK Intellix A1 robot', 'Selected for 2026 Tex-Corps'],
    },
    tags: ['AI', 'Computer Vision', 'Home Gardening', 'Mobile'],
    externalUrl: 'https://github.com/freaksemicolon/MyGarden/releases/tag/v0.1',
  },
  {
    slug: 'afterschool',
    index: '02',
    status: 'discovery',
    year: '2025—',
    accent: 'school',
    title: { ko: '애프터스쿨', en: 'Afterschool' },
    category: { ko: '교육 경험 프로젝트', en: 'Education Experience Project' },
    summary: {
      ko: '배움이 교실 밖에서도 자연스럽게 이어지도록 새로운 교육 경험을 탐색하는 프로젝트.',
      en: 'An exploration of new learning experiences that continue naturally beyond the classroom.',
    },
    description: {
      ko: '애프터스쿨은 학습자에게 필요한 지원이 정규 수업 이후에도 이어질 수 있는 방법을 탐색합니다. 현재 사용자와 시장의 문제를 정의하고, 기술을 활용한 구체적인 서비스 경험을 검증하는 단계입니다.',
      en: 'Afterschool explores how meaningful support for learners can continue beyond formal classes. The project is currently defining user and market needs while validating service concepts enabled by technology.',
    },
    features: {
      ko: ['학습자 중심 문제 탐색', '교육 경험 및 서비스 구조 설계', '시장성과 사용성 검증'],
      en: ['Learner-centered problem discovery', 'Education experience and service design', 'Market and usability validation'],
    },
    highlights: {
      ko: ['2025년 12월 프로젝트 시작', 'GSS 프로젝트 트랙 진행', '초기 서비스 기획 및 검증'],
      en: ['Project started in December 2025', 'Developed through the GSS project track', 'Early service planning and validation'],
    },
    tags: ['Education', 'Service Design', 'Research'],
  },
  {
    slug: 'digital-healthcare',
    index: '03',
    status: 'discovery',
    year: '2026—',
    accent: 'health',
    title: { ko: '디지털 헬스케어', en: 'Digital Healthcare' },
    category: { ko: '데이터 기반 헬스케어 탐색', en: 'Data-Driven Healthcare Discovery' },
    summary: {
      ko: '예방과 일상 관리를 연결하는 사용자 중심의 디지털 헬스케어 기회를 탐색합니다.',
      en: 'Exploring user-centered digital healthcare opportunities that connect prevention with everyday care.',
    },
    description: {
      ko: '디지털 헬스케어 프로젝트는 일상에서 수집되는 정보가 더 나은 건강 의사결정으로 이어질 수 있는 방법을 연구합니다. 현재 문제와 규제 환경을 조사하고 유효한 사용자 가설을 구체화하고 있습니다.',
      en: 'The Digital Healthcare project studies how everyday information can support better health decisions. The team is researching user needs and the regulatory landscape while shaping testable service hypotheses.',
    },
    features: {
      ko: ['사용자 건강 관리 문제 조사', '데이터 활용 시나리오 설계', '규제·시장 환경 리서치'],
      en: ['User healthcare problem research', 'Data-use scenario design', 'Regulatory and market research'],
    },
    highlights: {
      ko: ['초기 아이디어 및 문제 정의', '2026 창업 프로그램 지원', '사용자·시장 검증 준비'],
      en: ['Initial concept and problem definition', 'Submitted to 2026 startup programs', 'Preparing user and market validation'],
    },
    tags: ['Healthcare', 'Data', 'Research'],
  },
]

export interface TeamMember {
  name: { ko: string; en: string }
  role: { ko: string; en: string }
  affiliation: { ko: string; en: string }
  group: 'leadership' | 'project'
  initials: string
  emails: string[]
  links?: { label: string; url: string; type: 'github' | 'linkedin' | 'website' }[]
}

export const team: TeamMember[] = [
  {
    name: { ko: '임정훈', en: 'Jeonghoon Lim' },
    role: { ko: '대표이사 (CEO)', en: 'CEO' },
    affiliation: { ko: 'GIST 전기전자컴퓨터공학과', en: 'GIST · EECS' },
    group: 'leadership',
    initials: 'JL',
    emails: ['lim@rootive.org'],
    links: [
      { label: 'GitHub', url: 'https://github.com/hoony6134', type: 'github' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/hoony6134', type: 'linkedin' },
      { label: 'Website', url: 'https://me.scian.xyz/', type: 'website' },
    ],
  },
  {
    name: { ko: '최재원', en: 'Jaewon Choi' },
    role: { ko: '대표이사 (CEO)', en: 'CEO' },
    affiliation: { ko: 'GIST 전기전자컴퓨터공학과', en: 'GIST · EECS' },
    group: 'leadership',
    initials: 'JC',
    emails: ['cso@rootive.org'],
    links: [{ label: 'Website', url: 'https://charleschoi.info', type: 'website' }],
  },
  {
    name: { ko: '김기용', en: 'Giyong Kim' },
    role: { ko: '사내이사 (COO) · 재무 및 운영 기획', en: 'COO · Finance & Operations Planning' },
    affiliation: { ko: 'GIST AI학과', en: 'GIST · Department of AI' },
    group: 'leadership',
    initials: 'GK',
    emails: ['kim_giyong@rootive.org'],
    links: [{ label: 'GitHub', url: 'https://github.com/kky0824', type: 'github' }],
  },
  {
    name: { ko: '김나연', en: 'Nayeon Kim' },
    role: { ko: '사내이사 (CSO) · 디자인 및 전략 기획', en: 'CSO · Design & Strategy Planning' },
    affiliation: { ko: 'GIST 전기전자컴퓨터공학과', en: 'GIST · EECS' },
    group: 'leadership',
    initials: 'NK',
    emails: ['nayeon@rootive.org'],
  },
  {
    name: { ko: '김연주', en: 'Yeonju Kim' },
    role: { ko: '공동창업자 (Senior Planner) · 전략 및 기획', en: 'Co-founder · Senior Planner · Strategy & Planning' },
    affiliation: { ko: 'GIST 전기전자컴퓨터공학과', en: 'GIST · EECS' },
    group: 'leadership',
    initials: 'YK',
    emails: ['joo@rootive.org'],
  },
  {
    name: { ko: '장석우', en: 'Seokwoo Jang' },
    role: { ko: '동아리원 · 개발', en: 'Member · Engineering' },
    affiliation: { ko: 'GIST 전기전자컴퓨터공학과', en: 'GIST · EECS' },
    group: 'project',
    initials: 'SJ',
    emails: ['jang1228@rootive.org'],
    links: [
      { label: 'GitHub', url: 'https://github.com/freaksemicolon', type: 'github' },
      { label: 'Website', url: 'https://www.jangsw.com/', type: 'website' },
    ],
  },
  {
    name: { ko: '이서준', en: 'Seojun Lee' },
    role: { ko: '동아리원 · 기획', en: 'Member · Planning' },
    affiliation: { ko: 'GIST 생명과학과', en: 'GIST · Life Sciences' },
    group: 'project',
    initials: 'SL',
    emails: ['chamadobronx@rootive.org'],
    links: [{ label: 'GitHub', url: 'https://github.com/chamadobronx', type: 'github' }],
  },
  {
    name: { ko: '김동혁', en: 'Donghyeok Kim' },
    role: { ko: '동아리원 · 개발', en: 'Member · Engineering' },
    affiliation: { ko: 'KAIST 새내기과정학부', en: 'KAIST · Freshman Division' },
    group: 'project',
    initials: 'DK',
    emails: ['danielkim8649@rootive.org'],
  },
  {
    name: { ko: '최정원', en: 'Jeongwon Choi' },
    role: { ko: '동아리원 · 개발', en: 'Member · Engineering' },
    affiliation: { ko: 'GIST 도전탐색과정', en: 'GIST · Exploratory Program' },
    group: 'project',
    initials: 'JC',
    emails: ['jeongwonchoi@gm.gist.ac.kr'],
    links: [
      { label: 'GitHub', url: 'https://github.com/cgarden0711', type: 'github' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jeongwon-choi-3479b93b0', type: 'linkedin' },
      { label: 'Website', url: 'https://motivors.com/', type: 'website' },
    ],
  },
  {
    name: { ko: '류동헌', en: 'Dongheon Ryu' },
    role: { ko: '동아리원 · 디자인', en: 'Member · Design' },
    affiliation: { ko: 'GIST AI학과', en: 'GIST · Department of AI' },
    group: 'project',
    initials: 'DR',
    emails: ['design_ryu@rootive.org'],
  },
]

export const links = [
  { label: 'Email', href: 'mailto:board@rootive.org', type: 'email' as const },
  { label: 'GitHub', href: 'https://github.com/freaksemicolon/MyGarden', type: 'github' as const },
]

export function getLocalizedProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
