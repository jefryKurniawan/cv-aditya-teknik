import Image from "next/image";
import Link from "next/link";
import React from "react";  
import { MdOutlineSupportAgent } from "react-icons/md";

export default function Informasi () {
  return (
    <div className="dark:bg-blue-900 border-b-8 mb-0"> 
      <div className="flex p-12 flex-col lg:flex-row justify-between items-center max-w-2xl lg:max-w-4xl mx-auto">
        <div className="lg:w-1/2 text-left lg:pr-8">
          <h1 className="text-3xl font-extrabold text-blue-800 dark:text-white">Tentang CV Aditya Teknik</h1>
          <h2 className="text-xl font-semibold py-4 text-blue-500 dark:text-white">Komitmen Kami untuk Layanan Listrik Berkualitas</h2>
          <p className="pt-1 text-lg text-gray-500 dark:text-white">Dengan pengalaman bertahun-tahun di industri, kami bangga menjadi mitra terpercaya dalam setiap proyek listrik, baik untuk kebutuhan rumah tangga maupun bisnis.</p> 
        </div>
        <div className="lg:w-1/2 pt-8 lg:mt-0 text-center lg:text-right pb-10">
          <Image src={"/assets/information.svg"} alt="foto-informasi"width={250} height={250} loading="lazy" className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"/>
        </div>      
      </div>

      <div className="bg-[url('/assets/bg/electrical-pillar.jpg')] bg-cover bg-center bg-fixed py-24 backdrop-filter backdrop-brightness-0 md:text-center lg:text-left px-4 sm:px-8">
        <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative">
            <h1 className="text-6xl font-extrabold text-white text-center">Sejarah</h1>
            <div className="py-10">
              <p className="max-w-xl text-justify py-6 indent-8 drop-shadow-sm-sm mx-auto text-2xl text-white">
                CV Aditya Teknik, didirikan di Malang pada tahun 2018, telah berkembang menjadi salah satu perusahaan jasa kelistrikan terkemuka di Jawa Timur. Dengan komitmen pada kualitas dan layanan pelanggan yang optimal, perusahaan kami menyediakan berbagai layanan kelistrikan yang inovatif dan terpercaya.
              </p>
              <p className="max-w-xl text-justify py-6 indent-8 mx-auto text-2xl text-white">
                Berawal dari usaha kecil yang melayani area lokal Malang, CV Aditya Teknik kini melayani pelanggan di seluruh wilayah Jawa Timur. Dengan tim profesional yang berpengalaman, kami memastikan setiap proyek, baik skala kecil maupun besar, dikerjakan dengan standar keamanan dan efisiensi yang tinggi.
              </p>
              <p className="max-w-xl text-justify indent-8 mx-auto text-2xl text-white">
                Dalam perjalanan lebih dari lima tahun ini, kami terus memperluas layanan kami untuk memenuhi kebutuhan pelanggan, mulai dari instalasi kelistrikan hingga perawatan jaringan listrik. CV Aditya Teknik selalu berinovasi untuk memberikan solusi kelistrikan terbaik bagi pelanggan di Jawa Timur.
              </p>
            </div>
          </div>
      </div>

      <div className="flex py-12 flex-col lg:flex-row justify-between items-center max-w-2xl lg:max-w-6xl mx-auto">
        <div className="lg:w-1/2 mt-8 lg:py-12 text-center lg:text-right">
          <Image src={"/assets/goals.svg"}  alt="foto-informasi"  width={250} height={250} loading="lazy" className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"/>
        </div>          

        <div className="lg:w-1/2 text-right lg:pl-0 py-6 px-4 sm:px-8">
          <h1 className="text-4xl text-center font-extrabold text-blue-900 dark:text-white ">Visi dan Misi CV Aditya Teknik</h1>
          <ul className=" max-w-xl py-6 lg:pl-8 lg:pr-0 text-left mx-auto text-lg dark:text-white">
            <li className="py-4 ">
              <p className="text-2xl py-2 font-bold text-blue-800 dark:text-white">Visi :</p>
              <p className="pl-6 text-lg font-semibold text-justify text-blue-800 dark:text-white">Menjadi penyedia layanan listrik terdepan di Jawa Timur yang dikenal karena kualitas tinggi, keandalan, dan komitmen terhadap keunggulan. Dengan berpusat di Malang, kami bertekad untuk memberikan layanan yang melampaui harapan pelanggan dan menjadi mitra utama dalam proyek kelistrikan di wilayah Jawa Timur.</p>
            </li>
            <li className="py-4 ">
              <p className="text-2xl py-2 font-bold text-blue-800 dark:text-white">Misi :</p>
              <p className="pl-6 text-justify font-semibold text-lg dark:text-white text-blue-800 ">Memberikan solusi kelistrikan yang inovatif dan berkelanjutan dengan penekanan pada keselamatan, kualitas, dan kepuasan pelanggan. Kami terus berinovasi dan memperluas layanan kami untuk memenuhi kebutuhan kelistrikan di seluruh Jawa Timur, dengan memanfaatkan teknologi terbaru dan tim ahli yang profesional.</p>
            </li>
          </ul>
        </div>
      </div>
     
      <div className="bg-[url('/assets/bg/tim-mossholder.jpg')] bg-cover bg-center bg-fixed backdrop-filter backdrop-brightness-0 py-24 text-center">
      <div className=" absolute inset-0 bg-black opacity-50"></div>
        <div className="relative px-4 sm:px-14">
          <h1 className="text-6xl font-extrabold text-white">Nilai-Nilai Perusahaan</h1>
          <ul className="max-w-xl py-6 text-left mx-auto text-lg">
            <li className="py-6">
              <strong className="text-2xl font-bold text-white ">Profesionalisme : </strong> <br />
              <p className="pl-3 max-w-xl font-bold text-left text-white indent-8">Kami bekerja dengan standar tertinggi untuk memastikan hasil terbaik.</p>
            </li>
            <li className="py-6">
              <strong className="text-2xl font-semibold text-white">Kepercayaan : </strong> <br />
              <p className="pl-3 max-w-xl font-semibold text-left text-white indent-8">Membangun hubungan jangka panjang dengan pelanggan melalui layanan yang jujur dan transparan.</p>
            </li>
            <li className="py-6">
              <strong className="text-2xl font-bold text-white">Inovasi :</strong> <br />
              <p className="pl-3 max-w-xl font-semibold text-left text-white indent-8">Terus mencari cara baru untuk meningkatkan layanan dan memenuhi kebutuhan pelanggan.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full bg-gray-100 p-12 text-center dark:bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 pb-4 dark:text-white">Hubungi Kami</h2>
          <p className="text-lg text-gray-600 py-8 dark:text-white">Silakan hubungi kami jika Anda memiliki pertanyaan atau ingin mengetahui lebih lanjut tentang layanan kami.</p>
          <Link className="bg-blue-500 uppercase hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4" href="/hubkami"
          >Konsultasi <MdOutlineSupportAgent size={"2.5rem"} className="pl-2 inline-block vertical-align:middle"/></Link>
        </div>
      </div>
    </div>
  )
};

