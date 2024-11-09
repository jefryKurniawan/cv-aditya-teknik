import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "NIDI SLO JATIM",
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
      <body>
        <Navbar/>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
