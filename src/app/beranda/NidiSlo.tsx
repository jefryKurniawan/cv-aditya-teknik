import Image from "next/image";
import { IoIosWarning } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function NidiSlo () {
    return (
      <section className="md:p-6 lg:py-10 py-20 dark:bg-blue-600">
        <h1 className="text-3xl font-bold mb-4 text-center dark:text-white">NIDI & SLO</h1>
        <div className="flex flex-wrap justify-center items-center dark:text-white">
            {/* nidi */}
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8 ">
              <h2 className="text-2xl font-bold mb-4 lg:align-top text-center">
                Nomor Induk Data Instalasi (NIDI)
              </h2>
              <p className="text-lg leading-relaxed py-2 text-justify pb-6">
              Kami merupakan badan usaha resmi yang mensupervisi instalasi dan menerbitkan Nomor Induk Data Instalasi (NIDI) yang dapat dipergunakan untuk: pasang baru listrik tegangan rendah, tegangan menengah, dan pembangkit. Kami juga menyediakan jasa pengurusan NIDI untuk berbagai kebutuhan, seperti instalasi listrik baru, perubahan daya listrik, dan lain-lain. Kami dapat menangani untuk provinsi Jawa Timur. Jawa Timur kota maupun hingga perbatasan Jawa Timur, kami akan membantu dan melayani anda.
              </p>
              <p className="text-lg leading-relaxed py-3 text-justify bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-8 shadow-2xl">
                <span className="flex justify-center mb-2">
                  <IoIosWarning className="text-3xl"/>
                </span>
                <span>
                  Hati-hati penipuan mengatas nama CV. Aditya Teknik selain di website ini. 
                </span>
              </p>
            </div>

            {/* slo */}
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8 justify-center">
              <h2 className="text-2xl font-bold mb-4 lg:align-top text-center">Sertifikat Laik Operasi (SLO)</h2>
              <p className="text-lg leading-relaxed mb-4">
                Kami juga menerbitkan SLO untuk pemasangan meter PLN, area kami di  INDONESIA. Termasuk Penerbitan SLO Tegangan Rendah, Tegangan Menengah, Distribusi dan Pembangkit. Biaya terjangkau, tidak ada biaya tersembunyi, dan PASTI TERBIT.
              </p>
              <div className="flex justify-center">
                <Image src={"/assets/large-slo-inkindo_OFOr.png"} alt="sertif" width={150} height={150} className="w-2/3 " />
              </div>
              
            </div>
            <div className="py-2">
              <button className="border-2 border-gray-800 bg-blue-500 px-5 py-2.5 font-medium uppercase text-white hover:bg-blue-900">
                Daftar NIDI SLO Sekarang <MdKeyboardArrowRight size="1.5rem" className="inline-block vertical-align:middle"/>
              </button>
            </div>

          </div>
      </section> 
    )
}






