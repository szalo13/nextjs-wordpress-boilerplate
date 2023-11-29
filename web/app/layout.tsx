import './globals.css'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ["latin"], weight: ["300", "500", "600", "700","800", "900"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
