import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import Image from "next/image";
import Konsul from "./Konsul";

export default function Hubkami () {
  return (
    <section className="bg-gray-100 dark:bg-blue-900">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-2xl lg:max-w-4xl mx-auto">
        <div className="lg:w-1/2 text-left lg:pr-8 md:py-14 p-4 sm:px-8">
          <h2 className="text-3xl font-extrabold text-blue-800 dark:text-white">Kami Siap Membantu Anda</h2>
          <p className="pt-2 text-lg text-gray-500 dark:text-white"> Bersama CV Aditya Teknik, Anda tidak hanya mendapatkan layanan, tetapi juga mitra terpercaya dalam setiap proyek listrik Anda. </p>         
        </div>
        <div className="lg:w-1/2 pt-2 lg:mt-0 text-center lg:text-right">
          <Image src={"/assets/contact-us.png"} alt="hubkami" width={250} height={250} loading="lazy" className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"/>
        </div>
      </div>

       {/* Form */}
       <Konsul/>

      {/* alamat */}
      <div className="dark:bg-blue-950 py-6 ">
        <div className="mx-auto w-full border-6 py-0">
          <div className="py-2">
            <h2 className="text-4xl py-2 font-bold text-center text-blue-700 dark:text-white">Alamat Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 lg:pl-6 " >

              {/* maps */}
              <div className="py-4 sm:text-center sm:flex justify-center md:flex p-4 sm:max-w-md">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d165.62290541720657!2d112.63262897288726!3d-7.942534942022509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629a0eb90bad9%3A0xf66ff8d8a482f431!2sCV.%20Adytia%20tehnik%20Kota%20Malang!5e1!3m2!1sid!2sid!4v1731086646064!5m2!1sid!2sid" width="400" height="300" className="border:0;" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>

              {/* alamat */}
              <div className="">
                <div className="max-w-full mx-auto rounded-lg overflow-hidden text-center items-center py-6 lg:pr-6">
                  <div className="px-6 py-2">
                    <h3 className="py-4 text-lg font-semibold text-blue-900 dark:text-white">CV. Aditya Teknik :</h3>
                    <p className="py-1 font-medium text-gray-600 dark:text-white">Jl. Candi Mendut Utara No.II, Mojolangu, Lowokwaru, Malang, Jawa Timur, Indonesia</p>
                  </div>
                  <div className="border-t-4 dark:border-gray-200 border-blue-700 px-6 py-4">
                    <h3 className="py-2 text-lg font-semibold text-blue-900 dark:text-white">Jam Operasional :</h3>
                    {/* offine */}
                    <div className="py-2 text-center ">
                      <p className="text-xl text-blue-800 dark:text-white">Offine :</p>
                      <ul className="pb-4 dark:text-white">
                        <li >Senin - Jumat : 08:00 - 17:00</li>
                        <li >Sabtu : 08:00 - 17:00</li>
                        <li>Minggu : Tutup</li>
                      </ul>
                    </div>
                   {/* online */}
                   <div className="py-4 border-dashed border-t-2 dark:border-gray-200 border-blue-700 text-center dark:text-white ">
                      <p className="text-xl text-blue-800 dark:text-white">Online :</p>
                      <ul className="">
                        <li>Senin - Minggu : 24 Jam </li>
                      </ul>
                    </div>
                    
                  </div>
                  <div className="border-t-4 dark:border-gray-200 border-blue-700 px-6 py-4">
                    <h3 className="text-lg font-semibold text-blue-900 dark:text-white">Kontak :</h3>
                    <div className="text-center pt-2">
                      <Link href="https://www.w3schools.com/" className="inline-block mx-2 text-4xl text-red-500 dark:text-white">
                        <MdEmail />
                      </Link>
                      <Link href="https://www.w3schools.com/" className="inline-block mx-2 text-4xl text-green-500 dark:text-white">
                        <FaWhatsappSquare />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>

  )
};
