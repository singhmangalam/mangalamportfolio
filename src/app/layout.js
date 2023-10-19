import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Creative Designer & Developer',
  description: '"Welcome to my digital space! I am Kumar Mangalam, a passionate and innovative creative designer and developer. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
