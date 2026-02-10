import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Service AC Gowa - Kang Service | AC Cleaning & Repair',
  description:
    'Kang Service - spesialis service AC profesional di Gowa. Ahli cuci AC, perbaikan, instalasi, dan isi freon. Rating 4.9★. Hubungi WhatsApp untuk layanan cepat.',
  generator: 'kangservice',
  icons: {
    icon: '/logo.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
