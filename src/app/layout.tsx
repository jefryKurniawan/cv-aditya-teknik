import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SLO NIDI Malang",
  description: "CV.Aditya Teknik",
  icons: {
    icon: [
      { 
        url:'/assets/favicon.png', 
        href: '/assets/favicon.png', 
      }
    ]
  }
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="id">
      <head>
        <meta name="google-site-verification" content="f50eP-seUyjSzgTKXHgS2UEBfbBh_98hXzf5l4TFErQ" />
      </head>
      <body>
        <Navbar/>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
