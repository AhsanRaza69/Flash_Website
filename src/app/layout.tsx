import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import TopHeader from '@/components/topHeader'
import Header from '@/components/Header'
import "slick-carousel/slick/slick.css";
import Footer from '@/components/footer/Footer'
import Uparrow from '@/components/Uparrow'

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Flash – MultiPurpose WordPress Theme',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} w-full`}>
      <TopHeader/>
      <Header/>
        {children}
        <Uparrow/>
        <Footer/>
        </body>
    </html>
  )
}
