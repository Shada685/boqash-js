import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'بقش',
  description: 'مرصد بقش الاقتصادي',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={inter.className}>{children}
      
      </body>
    </html>
  )
}
