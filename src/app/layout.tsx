import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Харилцах самбар',
  description: 'Баяжуулсан оюунт хариулагч',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
