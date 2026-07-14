import type { Metadata } from 'next'
import { Inter, Playfair_Display, IBM_Plex_Mono } from 'next/font/google'
import Script from 'next/script'

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

export const metadata: Metadata = {
  title: {
    default: 'Xavrito - Free HTML5 Games',
    template: '%s | Xavrito'
  },
  description: 'Play free HTML5 browser games instantly. No downloads. No signups. Just fun.',
  keywords: ['HTML5 games', 'free games', 'browser games', 'mini games', 'online games'],
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
    description: 'Play free HTML5 browser games instantly.',
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
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    colors: {
                      void: '#FAFAF9',
                      surface: '#FFFFFF',
                      border: '#E7E5E4',
                      'accent-violet': '#8b5cf6',
                      'accent-cyan': '#22d3ee',
                      'accent-amber': '#f59e0b',
                      'text-primary': '#1C1917',
                      'text-muted': '#78716C',
                    },
                    fontFamily: {
                      display: ['var(--font-display)', 'system-ui', 'sans-serif'],
                      body: ['var(--font-body)', 'system-ui', 'sans-serif'],
                      mono: ['var(--font-mono)', 'monospace'],
                    },
                  }
                }
              }
            `
          }}
        />
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          ::selection {
            background: #F97316;
            color: white;
          }
          body {
            background-color: #FAFAF9;
          }
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #FAFAF9;
          }
          ::-webkit-scrollbar-thumb {
            background: #E7E5E4;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #F97316;
          }
        `}</style>

        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZQESXXPK9H" strategy="afterInteractive" />
        <Script id="ga-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZQESXXPK9H');
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
      </head>
      <body className="min-h-screen flex flex-col antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
