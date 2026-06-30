import type { Metadata } from 'next'
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { defaultMetadata, createOrganizationSchema, createWebSiteSchema } from '@/lib/seo'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  ...defaultMetadata,
  alternates: {
    canonical: 'https://xavrita.com/',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(createOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(createWebSiteSchema()) }}
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    colors: {
                      void: '#0c0c10',
                      surface: '#131318',
                      border: '#1f1f28',
                      'accent-violet': '#8b5cf6',
                      'accent-cyan': '#22d3ee',
                      'accent-amber': '#f59e0b',
                      'text-primary': '#f1f5f9',
                      'text-muted': '#64748b',
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
            background: #8b5cf6;
            color: #f1f5f9;
          }
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #0c0c10;
          }
          ::-webkit-scrollbar-thumb {
            background: #1f1f28;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #8b5cf6;
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
      <body className="font-body bg-void text-text-primary min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
