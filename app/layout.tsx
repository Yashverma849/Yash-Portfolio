import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yash Verma - Full Stack Developer & AI SaaS Builder',
  description: 'Full Stack Developer specialized in Web Development, AI-powered SaaS, and Modern Frontend Design. Building scalable applications with Next.js, React, and AI integrations.',
  authors: [{ name: 'Yash Verma' }],
  openGraph: {
    title: 'Yash Verma - Full Stack Developer & AI SaaS Builder',
    description: 'Full Stack Developer specialized in Web Development, AI-powered SaaS, and Modern Frontend Design.',
    type: 'website',
    images: ['/src/assets/profile-photo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yashverma_dev',
    images: ['/src/assets/profile-photo.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
