# ROOTIVE Website

루티브 회사 소개 웹사이트입니다. 한국어와 영어를 지원하며 모든 콘텐츠 페이지를 서버에서 렌더링합니다.

## 기술 구성

- React 19 + TypeScript
- TanStack Start + TanStack Router
- Vite
- Tailwind CSS
- Nitro SSR
- Vercel 배포

## 로컬 실행

```bash
bun install
bun run dev
```

기본 주소는 `http://localhost:3000`입니다. `/`는 `/ko`로 이동합니다.

## 주요 경로

- `/ko`, `/en`
- `/ko/projects`, `/en/projects`
- `/ko/projects/:slug`, `/en/projects/:slug`
- `/ko/team`, `/en/team`

## 빌드

```bash
bun run build
bun run start
```

Vercel에서는 `VERCEL` 환경을 감지해 Nitro의 Vercel preset으로 빌드합니다.

## 콘텐츠 수정

사이트 문구, 프로젝트, 팀원과 링크는 `src/content.ts`에서 관리합니다. 콘텐츠의 근거와 공개 범위는 `ROOTIVE_WEBSITE_CONTENT.md`에 정리되어 있습니다.
