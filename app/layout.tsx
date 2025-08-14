import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '狗米整理｜民宿清潔服務 - 宜蘭專業民宿整理',
  description: '專業民宿清潔服務，標準化SOP、照片驗收、每月督導抽查。服務宜蘭全區，讓您的民宿保持最佳狀態。',
  keywords: '民宿清潔,宜蘭民宿,房務清潔,民宿整理,清潔服務',
  authors: [{ name: '狗米整理' }],
  creator: '狗米整理',
  publisher: '瓏會算有限公司',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tanban00018173-ship-it.github.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '狗米整理｜民宿清潔服務',
    description: '專業民宿清潔服務，標準化SOP、照片驗收、每月督導抽查。',
    url: 'https://tanban00018173-ship-it.github.io/GOMI-Vacation-Rental-Cleaning-Service/',
    siteName: '狗米整理',
    images: [
      {
        url: '/LOGO.png',
        width: 1200,
        height: 630,
        alt: '狗米整理 Logo',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '狗米整理｜民宿清潔服務',
    description: '專業民宿清潔服務，標準化SOP、照片驗收、每月督導抽查。',
    images: ['/LOGO.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Single Page Apps for GitHub Pages
              // MIT License
              // https://github.com/rafgraph/spa-github-pages
              // This script takes the current url and converts the path and query
              // string into just a query string, and then redirects the browser
              // to the new url with only a query string and hash fragment.
              var pathSegmentsToKeep = 1;

              var l = window.location;
              l.replace(
                l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
                l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
                l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
                (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
                l.hash
              );
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
