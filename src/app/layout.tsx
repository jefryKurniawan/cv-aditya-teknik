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
  openGraph: {
    url: "https://www.adytia-tehnik.com/",
    type: "website",
    title: "Nidi SLO Indonesia - Jasa Sertifikat Laik Operasi | CV. Aditya Teknik",
    description: "CV. Aditya Teknik menyediakan layanan Nidi SLO di seluruh Indonesia. Sertifikat Laik Operasi (SLO) dengan proses cepat, mudah, dan terpercaya. Hubungi kami sekarang!",
    images: [
      {
        url: "/assets/logo-cv.png",
        width: 500,
        height: 500,
      },
    ],
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/assets/logo/logo-cv" sizes="48x48" />
      </head>
      <body>
        <Navbar/>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
