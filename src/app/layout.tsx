import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SLO NIDI Malang",
  description: "CV.Aditya Teknik",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/assets/logo/favicon.ico" sizes="any" />
      </head>
      <body>
        <Navbar/>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
