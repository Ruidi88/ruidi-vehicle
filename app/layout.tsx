import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LocaleProvider } from '@/components/locale-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: {
    default: 'Ruidi Mobility - Global OEM/ODM Mobility Scooter Manufacturer',
    template: '%s | Ruidi Mobility'
  },
  description: 'Since 1999, Ruidi has been a leading mobility scooter manufacturer, providing OEM/ODM solutions to distributors in 50+ countries. CE, FDA, ISO 13485 certified.',
  keywords: ['mobility scooter manufacturer', 'OEM scooter', 'ODM scooter', 'wholesale mobility scooter', 'China scooter factory', 'elderly mobility solutions'],
  authors: [{ name: 'Zhejiang Ruidi Vehicle Industry Co., Ltd.' }],
  creator: 'Ruidi Mobility',
  publisher: 'Ruidi Mobility',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'ja_JP'],
    url: 'https://ruidiscooter.com',
    siteName: 'Ruidi Mobility',
    title: 'Ruidi Mobility - Global OEM/ODM Mobility Scooter Manufacturer',
    description: 'Since 1999, Ruidi has been a leading mobility scooter manufacturer, providing OEM/ODM solutions to distributors in 50+ countries.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ruidi Mobility - Premium Mobility Scooters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ruidi Mobility - Global OEM/ODM Mobility Scooter Manufacturer',
    description: 'Since 1999, Ruidi has been a leading mobility scooter manufacturer, providing OEM/ODM solutions to distributors in 50+ countries.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e3a5f' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LocaleProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppButton />
        </LocaleProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
