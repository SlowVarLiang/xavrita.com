import { Metadata } from 'next'
import { Game } from './games-data'

export const defaultMetadata: Metadata = {
  title: {
    default: 'Xavrito - Game Guides, Wikis, Builds & Interactive Maps',
    template: '%s | Xavrito'
  },
  description: 'Comprehensive game guides, wikis, build tips, tier lists, and interactive maps for the latest games. Your ultimate gaming companion.',
  keywords: ['game guides', 'wiki', 'walkthroughs', 'build guides', 'tier lists', 'gaming'],
  authors: [{ name: 'Xavrito' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xavrita.com',
    siteName: 'Xavrito',
    title: 'Xavrito - Game Guides, Wikis, Builds & Interactive Maps',
    description: 'Comprehensive game guides, wikis, build tips, tier lists, and interactive maps for the latest games.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xavrito - Game Guides, Wikis, Builds & Interactive Maps',
    description: 'Comprehensive game guides, wikis, build tips, tier lists, and interactive maps for the latest games.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export function generateGameMetadata(game: Game): Metadata {
  const date = new Date()
  const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  
  return {
    title: `${game.metaTitle || game.name} (${monthYear})`,
    description: game.metaDescription || game.description,
    keywords: [game.name, `${game.name} guide`, `${game.name} wiki`, ...(game.categories || [])],
    openGraph: {
      title: `${game.metaTitle || game.name} | Xavrito`,
      description: game.metaDescription || game.description,
      images: game.image ? [{ url: game.image, width: 1200, height: 630 }] : [],
      type: 'website',
    },
    alternates: {
      canonical: `https://xavrita.com/games/${game.slug}/`,
    },
  }
}

export function generateGuideMetadata(guideTitle: string, gameName: string, description: string): Metadata {
  const date = new Date()
  const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  
  return {
    title: `${guideTitle} (${monthYear}) | ${gameName} | Xavrito`,
    description,
    keywords: [guideTitle, gameName, `${gameName} guide`, `${gameName} tips`],
    openGraph: {
      title: `${guideTitle} | ${gameName} | Xavrito`,
      description,
      type: 'article',
    },
  }
}

export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function createVideoGameSchema(game: Game) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.name,
    description: game.description,
    image: game.image,
    genre: game.genres,
    gamePlatform: ['PC', 'Steam'],
    developer: game.developer ? {
      '@type': 'Organization',
      name: game.developer
    } : undefined,
    publisher: game.publisher ? {
      '@type': 'Organization',
      name: game.publisher
    } : undefined,
    url: `https://xavrita.com/games/${game.slug}/`,
  }
}

export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Xavrito',
    url: 'https://xavrita.com',
    logo: 'https://xavrita.com/logo.png',
    description: 'Comprehensive game guides, wikis, build tips, tier lists, and interactive maps.',
    sameAs: [],
  }
}

export function createWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Xavrito',
    url: 'https://xavrita.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://xavrita.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}
