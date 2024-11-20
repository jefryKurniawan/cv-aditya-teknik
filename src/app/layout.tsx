import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Nidi SLO Indonesia - Jasa Sertifikat Laik Operasi | CV. Aditya Teknik",
  description: "CV. Aditya Teknik menyediakan layanan Nidi SLO di seluruh Indonesia. Sertifikat Laik Operasi (SLO) dengan proses cepat, mudah, dan terpercaya. Hubungi kami sekarang!",
  keywords: ["Nidi SLO","Nidi SLO Indonesia", "Sertifikat Laik Operasi Indonesia", "Jasa SLO","Jasa Nidi","Adytia Tehnik", "SLO NIDI P. Nanang KOTA MALANG","CV Aditya Teknik","SLO NIDI LISTRIK AGEN AREA JAWA TIMUR", "SLO NIDI LISTRIK AGEN AREA JAWA TIMUR", "Daftar NIDI SLO", "Layanan NIDI & SLO", "SLO Instalasi Listrik – Jasa Pengurusan NIDI SLO PLN", "Jasa Penerbitan NIDI SLO PLN | Bermohon NIDI Mudah", "Jasa SLO - Jasa Pengurusan dan Pembuatan Sertifikasi", "nidi slo satu paket bisa dipakai untuk daftar listrik pln baru", "Jual Sertifikat Laik Operasi (SLO) PLN dan NIDI (Jawa Timur)", "Jasa SLO NIDI Surabaya dan Sekitarnya", "Daftar NIDI - Jagoan Listrik - Tukang Listrik Malang", "Daftar SLO DJK", "Biaya NIDI SLO PLN - SLO Instalasi Listrik", "Tarif NIDI SLO - NIDI PLN", "Jasa SLO NIDI Siduarjo dan Sekitarnya", "Daftar NIDI SLO Listrik Online", "Jasa Penerbitan NIDI SLO PLN ", "adytiatehnik", "adytia tehnik", "Adytia Tehnik Indonesia"],
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
        url: "https://www.adytia-tehnik.com/assets/logo/nidi-slo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    siteName: "CV. Aditya Teknik",
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="id">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/assets/logo/nidi-slo.png" sizes="48x48" />
        <meta name="email" content="buchorimakmur8@gmail.com" />
        <meta property="og:email" content="buchorimakmur8@gmail.com" />
        <meta property="og:phone_number" content="+6281456123367" />
        <meta
          property="og:url"
          content="https://shopee.co.id/buchorijaya?categoryId=100642&entryPoint=ShopByPDP&itemId=27067418869"
        />
      </Head>
      <body>
        <Navbar/>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
