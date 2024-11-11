"use client";
import Image from "next/image";
import { CgDanger } from "react-icons/cg";
import Content from "./content";
import Permohonan from "./permohonan";

export default function Persurat () {
  return (
    <div className="w-full dark:bg-blue-800">
      <div className="w-full p-0">
        <h1 className="text-4xl font-extrabold pt-8 pb-2 text-center text-blue-900 dark:text-white ">NIDI & SLO  </h1>
        <Image src={"/assets/slo.svg"} alt="slo" loading="lazy" width={250} height={250} className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-1/4 lg:h-1/4 mx-auto sm:w-1/6 sm:pb-12 lg:pb-6 lg:pt-2 md:w-1/3 pb-6"/>  
        {/* form surat permohonan */}
        <div className="max-w-6xl mx-auto py-20 rounder px-8 pt-6 pb-8 bg-blue-300 shadow-2xl">
          <h3 className="py-6 text-3xl uppercase font-bold text-center text-blue-800 ">Formulir Permohonan Daya Listrik</h3>
          {/* warn1ng */}
          <div className="bg-red-100 border-l-4 border-yellow-500 text-yellow-700 p-6">
            <h3 className="text-2xl font-extrabold pb-2 text-center uppercase">Perhatian<span> <CgDanger size="2.2rem" className="inline-block vertical-align:middle ml-2"/></span> </h3>
            <ol className="border-t-2 border-yellow-500 list-decimal">
              <li className="ml-6 pt-2">Dimohon untuk tidak mengisi data hanya untuk coba-coba (Spam = Blacklist Data).</li>
              <li className="ml-6">Pastikan data yang terisi terkirim ke WhatsApp</li>
              <li className="ml-6">Anda wajib melakukan pembayaran sebelum data diproses.</li>
              <li className="ml-6">Pastikan instalasi listrik dalam rumah telah / sedang dipasang.</li>
              <li className="ml-6">Kami tidak menerima permohonan jika instalasi listrik (Sekering, Lampu, Sakelar, dll) dalam rumah belum ada / bangunan belum ada. Terima Kasih.</li>
            </ol>
          </div>
          <Permohonan/>
        </div>
      </div>
      <div className="w-full p-0 mt-14">
        <Content/>
      </div>
    </div>
  )
}
