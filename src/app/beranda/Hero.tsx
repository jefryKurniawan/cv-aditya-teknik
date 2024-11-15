import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Hero () {
  return (
    <div className="w-full h-full dark:bg-blue-600 items-center grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-8 lg:py-20 lg:px-8" data-aos="fade-right" data-aos-duration="800" >
      <div className="lg:px-24 md:px-24 sm:pl-2 py-8 p-4 sm:px-8">
        <h1 className='text-4xl py-4 font-extrabold text-left text-blue-800 dark:text-white'>Dapatkan NIDI & SLO</h1>
        <p className="text-xl text-gray-500 md:py-6 py-6 dark:text-white">Tanpa ribet, proses cepat dan mudah, hanya dalam beberapa menit.</p>
        <div className="py-2">
          <Link href="/pelayanan/persurat" className=" border-2 border-gray-800 bg-blue-500 px-5 py-2.5 font-medium uppercase text-white hover:bg-blue-900">
            Daftar Sekarang <MdKeyboardArrowRight size="1.5rem" className="inline-block vertical-align:middle"/>
          </Link>
        </div>
      </div>

      <div className="pb-8 overflow-hidden">
        <Image id="heroImg" className="w-full md:mx-auto sm:mx-auto select-none pointer-events-none" src={'/assets/pln.png'} alt="hero-img" width={300} height={300}/>
      </div>
    </div>
  );
};
