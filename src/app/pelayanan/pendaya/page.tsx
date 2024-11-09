"use client"
import Image from "next/image";
import Link from "next/link";
import React, {  useState } from "react";

export default function Pendaya () {
  const [kwhId, setKwhId] = useState('');
  const [paymentType, setPaymentType] = useState('pascabayar');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const message = `ID KWH Meter: ${kwhId}, Jenis Pembayaran: ${paymentType}`;
    const whatsappUrl = `https://wa.me/<your-phone-number>?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-blue-700">
      <div className="lg:py-8 text-center">
        <h1 className="text-3xl font-bold pt-8 pb-2 text-blue-900 dark:text-white">Penambahan Daya</h1>
        <Image src="/assets/penambahan.svg" alt="tambah" loading="lazy" width={250} height={250} className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-1/4 lg:h-1/4 mx-auto sm:w-1/6 md:w-1/3 lg:pb-0 lg:pt-2 pb-6" />  
      </div>

      <div className="bg-blue-300 shadow-md rounded px-4 sm:px-8 py-20 lg:py-18 ">
        <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-900">Syarat dan Ketentuan</h2>
        <ul className="text-lg md:pl-8 pt-4 text-justify">
          <li className="pb-2">Mengisi formulir permohonan yang dapat diunduh di situs web PLN atau diambil di kantor PLN terdekat.</li>
          <li className="pb-2">Membayar biaya administrasi yang besarnya tergantung pada jenis permohonan.</li>
          <li className="pb-2">Menyerahkan dokumen yang diperlukan, seperti KTP, KK, dan surat kuasa (jika diperlukan).</li>
        </ul>
      </div>

      <div className="p-4 md:py-16 sm:px-8 lg:py-32">
        <h2 className=" text-2xl font-bold pb-2 dark:text-white">Cara Mengajukan Permohonan</h2>
        <ol className="dark:text-white pl-8 pt-4 text-lg">
          <li className="pb-2">Mengunjungi kantor PLN terdekat dan mengisi formulir permohonan.</li>
          <li className="pb-2">Membayar biaya administrasi dan menyerahkan dokumen yang diperlukan.</li>
          <li className="pb-2">Menunggu proses verifikasi dan pengolahan permohonan.</li>
        </ol>
      </div>

      <div className="bg-blue-300 py-12">
        <h2 className="text-2xl font-bold text-center pt-6 text-black">Form Penambahan Daya</h2>
        <div className="flex flex-col items-center lg:flex-row md:flex-col sm:flex-col ">
          <div className=" md:w-full sm:w-full lg:mx-auto lg:mr-16 lg:w-3/5 justify-center items-center">
            <div className="w-full p-10 sm:w-full lg:order-2 md:order-1 sm:order-1">
              <form onSubmit={handleSubmit} className="p-8 border-4 border-blue-600 shadow-2xl rounded-md">
                <div className="">
                  <h3 className="font-semibold pt-2 pb-6 text-blue-900 text-center">Permohonan Penambahan Daya</h3>
                  <label htmlFor="kwhId" className="block text-sm font-medium text-black">ID KWH Meter :</label>
                  <input type="text"id="kwhId" value={kwhId} onChange={(e) => setKwhId(e.target.value)} className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-900 sm:text-sm" required  onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => e.target.setCustomValidity("Masukkan ID KWH anda!")} onInput={(e: React.FormEvent<HTMLInputElement>) => e.currentTarget.setCustomValidity('')}
  /> 
                </div>
                <div className="py-6">
                  <label className="block text-sm font-medium text-black">Jenis Pembayaran :</label>
                  <div className="mt-2 text-center">
                    <label className="inline-flex items-center">
                      <input  type="radio" name="paymentType" value="pascabayar" checked={paymentType === 'pascabayar'} onChange={(e) => setPaymentType(e.target.value)} className="form-radio"/>
                      <span className="ml-2">Pascabayar</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input type="radio" name="paymentType" value="prabayar" checked={paymentType === 'prabayar'}  onChange={(e) => setPaymentType(e.target.value)} className="form-radio"/>
                      <span className="ml-2">Prabayar</span>
                    </label>
                  </div>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Ajukan Permohonan
                </button>
              </form>
            </div>
          </div>
          
          <div className="lg:w-2/5 lg:ml-16 lg:mr-auto md:w-full sm:w-full p-6 lg:order-1 md:order-2 sm:order-2">
            <Image src="/assets/form.svg" alt="tambah" loading="lazy" width={400} height={400} className="transition-all duration-300 ease-in-out hover:scale-105 w-full rounded-3xl"/>
          </div>
        </div>
      </div>

      <section className="lg:py-10 md:p-6 sm:p-2 ">
        <p className="text-center bg-blue-100 border-l-8 border-blue-400 text-blue-700 p-8 shadow-2xl">Harga kami negotable dan sesuai kebutuhan pelanggan dengan mengecek.
          <Link href="/pelayanan/estimasibiaya" className="text-orange-400 hover:text-orange-600"> Konsultasi sekarang</Link>
        </p>
      </section>
    </div>
  )
}

