import { PiCertificateDuotone } from "react-icons/pi";
import { TbSunElectricity } from "react-icons/tb";
import { GrHostMaintenance } from "react-icons/gr";
import { MdOutlinePriceCheck } from "react-icons/md";
import { GiElectricalResistance } from "react-icons/gi";
import { CiCircleInfo } from "react-icons/ci";
import { RiLoginCircleFill } from "react-icons/ri";
import { MdAddTask } from "react-icons/md";
import Link from "next/link";

interface CardProps { heading: string; description: string; icon: JSX.Element; className: string; button: JSX.Element;}

function Card1({ heading, description, icon, className, button}: CardProps) {
  return (
    <div className={`flex gap-4 rounded-none shadow-sm p-6 ${className}`}>
      <div className="min-w-max">{icon}</div>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white">{heading}</h3>
        <p className="leading-8 font-semibold text-white">{description}</p>
        <button className="relative border-2 border-gray-800 bg-transparent px-5 py-2.5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-600 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">{button}</button>
      </div>
    </div>
  )
}

export default function Layanan () {
  return (
    <div className="bg-[url('/assets/bg/tukang.jpg')] bg-cover bg-center bg-fixed py-20">
      <h3 className="flex justify-center text-4xl font-extrabold py-6 text-white ">Layanan</h3>
      <div className=" grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 p-3 pt-12 py-2 sm:p-8">
        
        <Card1
          className="backdrop-blur-xl bg-yellow-400/30 my-auto"
          heading="Sertifikat NIDI SLO"
          description="Pengakuan resmi kemampuan Anda dalam bidang pendidikan dan pelatihan. Dapatkan sertifikat yang diakui secara nasional dan internasional."
          icon={<PiCertificateDuotone size="5rem" className="text-[#fcfcfc]"/>}
          button={
            <Link href="/pelayanan/persurat">
                Daftar Sekarang <RiLoginCircleFill size="1.5rem" className="inline-block vertical-align:middle"/>
            </Link>
              
          }
        />

        <Card1
          className="backdrop-blur-xl bg-white/30 my-auto"
          heading="Pemasangan Listrik"
          description="Pemasangan instalasi listrik baru adalah langkah penting yang harus dilakukan dengan hati-hati untuk menghindari risiko korsleting dan kebakaran. Listrik adalah kebutuhan dasar yang mendukung aktivitas sehari-hari, mulai dari penerangan hingga pengisian daya perangkat elektronik."
          icon={<TbSunElectricity size="4rem" className="text-[#f3b926]" />}
          button={
            <Link href="/pelayanan/pemlistrik">
                Selengkapnya<CiCircleInfo size="1.5rem" className="inline-block vertical-align:middle ml-3"/>
            </Link>
          }
        />
        <Card1
          className="backdrop-blur-xl bg-white/30 my-auto"
          heading="Penambahan Daya"
          description="Meningkatkan kapasitas listrik rumah atau bisnis Anda dengan mudah dan cepat. Dapatkan penambahan daya yang aman, efisien, dan sesuai kebutuhan Anda. Proses mudah, biaya terjangkau, dan dukungan teknis yang profesional."
          icon={<MdAddTask size="4rem" className="text-[#ff4242]" />}
          button={
            <Link href="/pelayanan/pendaya">
              Selengkapnya<CiCircleInfo size="1.5rem" className="inline-block vertical-align:middle ml-3"/>
            </Link>
          }
        />

        <Card1
          className="backdrop-blur-xl bg-white/30 my-auto"
          heading="Perawatan"
          description="Perawatan Rutin listrik untuk daerah kota Batu Malang Dan sekitarnya, Kami memiliki tukang listrik yang handal dan profesional."
          icon={<GrHostMaintenance size="4rem" className="text-[#7845f8]" />}
          button={
            <Link href="/pelayanan/perawatan">
                Selengkapnya<CiCircleInfo size="1.5rem" className="inline-block vertical-align:middle ml-3"/>
            </Link>
          }
        />
        <Card1
          className="backdrop-blur-xl bg-white/30 my-auto"
          heading="Instalasi Listrik"
          description="Pemasangan instalasi listrik baru adalah langkah penting yang harus dilakukan dengan hati-hati untuk menghindari risiko korsleting dan kebakaran. Listrik adalah kebutuhan dasar yang mendukung aktivitas sehari-hari, mulai dari penerangan hingga pengisian daya perangkat elektronik."
          icon={<GiElectricalResistance size="4rem" className="text-[#79bff8] " />}
          button={
            <Link href="/pelayanan/instalasi">
              Selengkapnya<CiCircleInfo size="1.5rem" className="inline-block vertical-align:middle ml-3"/>
            </Link>
          }
        />
        <Card1
          className="backdrop-blur-xl bg-white/30 my-auto"
          heading="Estimasi Biaya"
          description="Dapatkan perkiraan biaya penambahan daya yang akurat dan transparan. Kami membantu Anda menghitung biaya yang diperlukan untuk meningkatkan kapasitas listrik Anda dengan efektif dan efisien"
          icon={<MdOutlinePriceCheck size="4rem" className="text-[#44fa4d]" />}
          button={
            <Link href="/pelayanan/estimasibiaya">
              Selengkapnya<CiCircleInfo size="1.5rem" className="inline-block vertical-align:middle ml-3"/>
            </Link>
          }
        />
      </div>
    </div>
  )
}

