import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Hero () {
  return (
    <div className="w-full h-full dark:bg-blue-600 items-center grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-8 lg:py-20 lg:px-8" data-aos="fade-right" data-aos-duration="800" >
      <div className="lg:px-24 md:px-24 sm:pl-2 py-8 p-4 sm:px-8">
        <h1 className='text-4xl py-4 font-extrabold text-left text-blue-800 dark:text-white'>Nidi SLO Indonesia - Jasa Sertifikat Laik Operasi Terpercaya</h1>
        <p className="text-xl text-gray-500 md:py-6 py-6 dark:text-white">CV. Aditya Teknik adalah mitra terpercaya untuk layanan Sertifikat Laik Operasi (SLO) di seluruh Indonesia. Kami memberikan solusi cepat, profesional, dan dengan biaya yang kompetitif. Dapatkan sertifikasi listrik Anda sekarang!</p>
        <div className="py-2">
          <Link href="/pelayanan/nidi-slo" className=" border-2 border-gray-800 bg-blue-500 px-5 py-2.5 font-medium uppercase text-white hover:bg-blue-900">
            Daftar Sekarang <MdKeyboardArrowRight size="1.5rem" className="inline-block vertical-align:middle"/>
          </Link>
        </div>
      </div>

      <div className="pb-8 overflow-hidden">
        <Image id="heroImg" className="w-full md:mx-auto sm:mx-auto select-none pointer-events-none" src={'/assets/slo.png'} alt="Jasa Nidi SLO" width={300} height={300} loading='lazy'/>
      </div>
    </div>
  );
};
