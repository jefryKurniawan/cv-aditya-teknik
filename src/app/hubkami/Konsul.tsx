/* eslint-disable  @typescript-eslint/no-explicit-any */

"use client"
import Image from 'next/image'
import { useState } from 'react'
import { IoMdSend } from "react-icons/io";

export default function Konsul () {
  const [nama, setNama] = useState('')
  const [kategori, setKategori] = useState('')
  const [keterangan, setKeterangan] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const adminNumber = '6281456123367'; 
    const message = `Halo, saya ingin konsultasi.\n\nNama: ${nama}\nKategori Konsultasi: ${kategori}\nKeterangan: ${keterangan}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${adminNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-8 bg-gray-100 dark:bg-blue-900">
      <div className="w-full lg:w-1/2 flex justify-center py-8 lg:mb-0">
        <Image src={"/assets/konsul.svg"} alt="Konsultasi" width={250} height={250} className="transition-all duration-300 ease-in-out w-1/2 hover:scale-105 shadow-lg max-w-full h-auto"/>
      </div>
      <div className="w-full lg:w-1/2 bg-white dark:bg-blue-800 rounded-md shadow-lg p-8 md:p-14">
        <h2 className="text-2xl font-bold py-4 text-center text-gray-800 dark:text-gray-100">Konsultasi</h2>
        <form onSubmit={handleSubmit} className=''>
          <div className="py-4">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"> Nama </label>
            <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-blue-500" placeholder="Masukkan nama Anda" required onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => e.target.setCustomValidity("Masukkan nama anda!")} onInput={(e: React.FormEvent<HTMLInputElement>) => e.currentTarget.setCustomValidity('')} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Kategori Konsultasi </label>
            <select value={kategori} onChange={(e) => setKategori(e.target.value)} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-blue-500" required>
              <option value="nidi_slo">NIDI + SLO</option>
              <option value="kebutuhan_pelanggan">Kebutuhan Pelanggan</option>
              <option value="penambahan_daya">Penambahan Daya</option>
              <option value="n1d1_slo_kolektif">NIDI & SLO Kolektif</option>
              <option value="perluasan_jaringan">Perluasan Jaringan</option>
              <option value="penambahan_jaringan">Penambahan Jaringan Tegangan Rendag</option>
              <option value="pemasangan_listrik">Pemasangan Listrik Baru (Meteran)</option>
              <option value="instalasi_listrik">Instalasi Listrik (Jaringan/Kabel Dalam Rumah)</option>
              <option value="pemasangan_baru_meterang">Pemasangan Listrik Baru (Meteran)</option>
            </select>
          </div>

          <div className="py-4">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"> Keterangan </label>
            <textarea
                value={keterangan}
                onChange={(e) => setKeterangan(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Jelaskan kebutuhan konsultasi Anda"
                required onInvalid={(e: React.InvalidEvent<HTMLTextAreaElement>) => e.target.setCustomValidity("Masukkan keterangan konsultasi anda!")} onInput={(e: React.FormEvent<HTMLTextAreaElement>) => e.currentTarget.setCustomValidity('')}
            ></textarea>
          </div>

          <div className="text-center md:py-6">
            <button type="submit" className="bg-violet-500 hover:text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 py-2 px-6"> Kirim Konsultasi <IoMdSend size="1.5rem" className="ml-2 inline-block vertical-align:middle"/></button>
          </div>
        </form>
      </div>
    </div>
  )
}