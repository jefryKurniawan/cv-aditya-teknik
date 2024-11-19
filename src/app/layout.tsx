import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nidi SLO Indonesia - Jasa Sertifikat Laik Operasi | CV. Aditya Teknik",
  description: "CV. Aditya Teknik menyediakan layanan Nidi SLO di seluruh Indonesia. Sertifikat Laik Operasi (SLO) dengan proses cepat, mudah, dan terpercaya. Hubungi kami sekarang!",
  keywords: ["Nidi SLO","Nidi SLO Indonesia", "Sertifikat Laik Operasi Indonesia", "Jasa SLO","Jasa Nidi", "CV Aditya Teknik"],
  icons: {
    icon: "/favicon.ico",
  },
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
