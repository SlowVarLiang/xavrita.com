import type { Metadata } from 'next'
import { Inter, Playfair_Display, IBM_Plex_Mono, Bebas_Neue } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Xavrito - Free HTML5 Games',
    template: '%s | Xavrito'
  },
  description: 'Play free HTML5 browser games instantly. No downloads. No signups. Just fun. Discover the best free HTML5 games for every category — puzzle, action, arcade, and more.',
  keywords: ['free HTML5 games', 'HTML5 games', 'free games', 'browser games', 'mini games', 'online games'],
  authors: [{ name: 'Xavrito' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xavrito.com',
    siteName: 'Xavrito',
    title: 'Xavrito - Free HTML5 Games',
    description: 'Play free HTML5 browser games instantly. No downloads. No signups. Just fun.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Xavrito - Free HTML5 Games',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xavrito - Free HTML5 Games',
    description: 'Play free HTML5 browser games instantly.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://xavrito.com/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0FMSKS2EMD" strategy="afterInteractive" />
        <Script id="ga-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0FMSKS2EMD');
          `}
        </Script>

        {/* Plausible Analytics */}
        <Script async src="https://plausible.io/js/pa-g5P0ZxaYfVoCTc8KV0Lqr.js" strategy="afterInteractive" />
        <Script id="plausible-init" strategy="afterInteractive">
          {`
            window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
            plausible.init()
          `}
        </Script>

        {/* JSON-LD Structured Data */}
        <Script id="jsonld-website" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Xavrito",
            "url": "https://xavrito.com",
            "description": "Play free HTML5 browser games instantly. No downloads. No signups.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://xavrito.com/?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>
        <Script id="jsonld-organization" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Xavrito",
            "url": "https://xavrito.com",
            "description": "Free HTML5 games platform — instant play, no downloads required."
          })}
        </Script>
      </head>
      <body className={`min-h-screen flex flex-col antialiased ${inter.variable} ${playfair.variable} ${ibmPlexMono.variable} ${bebasNeue.variable}`}>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
