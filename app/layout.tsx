import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kajaanin Keskussairaala - Hoitokutsu css uiux',
  description: 'Hoitokutsu css uiux, NEXTJS, TAILWINDCSS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
