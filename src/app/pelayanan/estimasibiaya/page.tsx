"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EstimasiBiaya {daya: number;nidi: string; slo: string; total: string;}

export default function EstimasiBiaya () {
  const dataBiaya: EstimasiBiaya[] = [
    { daya: 450, nidi: "Rp 40,000", slo: "Rp 40,000", total: "Rp 70,000" },
    { daya: 900, nidi: "Rp 60,000", slo: "Rp 60,000", total: "Rp 100,000" },
    { daya: 1300, nidi: "Rp 95,000", slo: "Rp 95,000", total: "Rp 140,000" },
    { daya: 2200, nidi: "Rp 110,000", slo: "Rp 110,000", total: "Rp 160,000" },
    { daya: 3500, nidi: "Rp 115,000", slo: "Rp 115,000", total: "Rp 170,000" },
    { daya: 4400, nidi: "Rp 132,000", slo: "Rp 132,000", total: "Rp 240,000" },
    { daya: 5500, nidi: "Rp 165,000", slo: "Rp 165,000", total: "Rp 265,000" },
    { daya: 6600, nidi: "Rp 198,000", slo: "Rp 198,000", total: "Rp 296,000" },
    { daya: 7700, nidi: "Rp 231,000", slo: "Rp 231,000", total: "Rp 420,000" },
    { daya: 10600, nidi: "Rp 265,000", slo: "Rp 265,000", total: "Rp 450,000" },
    { daya: 11000, nidi: "Rp 275,000", slo: "Rp 275,000", total: "Rp 470,000" },
    { daya: 13200, nidi: "Rp 330,000", slo: "Rp 330,000", total: "Rp 650,000" },
    { daya: 16500, nidi: "Rp 412,000", slo: "Rp 412,000", total: "Rp 700,000" },
    { daya: 23000, nidi: "Rp 575,000", slo: "Rp 575,000", total: "Rp 978,000"},
    { daya: 33000, nidi: "Rp 660,000", slo: "Rp 660,000", total: "Rp 1,112,000"},
    { daya: 41500, nidi: "Rp 830,000", slo: "Rp 830,000", total: "Rp 1,410,000"},
    { daya: 53000, nidi: "Rp 1,060,000",slo: "Rp 1,060,000",total: "Rp 1,800,000" },
    { daya: 66000, nidi: "Rp 1,320,000", slo: "Rp 1,320,000", total: "Rp 2,500,000" },
    { daya: 82500, nidi: "Rp 1,350,000", slo: "Rp 1,350,000", total: "Rp 2,550,000" },
    { daya: 105000, nidi: "Rp 1,575,000", slo: "Rp 1,575,000", total: "Rp 2,660,000"  },
    { daya: 131000, nidi: "Rp 1,965,000", slo: "Rp 1,965,000",  total: "Rp 3,330,000" },
    { daya: 147000, nidi: "Rp 2,205,000", slo: "Rp 2,205,000", total: "Rp 3,700,000" },
    { daya: 164000,nidi: "Rp 2,460,000", slo: "Rp 2,460,000", total: "Rp 4,150,000" },
    { daya: 197000, nidi: "Rp 2,955,000", slo: "Rp 2,955,000", total: "Rp 14,755,000" },
  ];

  return (
    <div className="w-auto mx-auto dark:bg-gray-900 ">
      <div className="bg-gray-100 py-4 text-center dark:bg-blue-600   ">
        <h1 className="text-2xl font-bold pt-10 text-blue-900 dark:text-white"> Estimasi Biaya</h1>
        <Image src={"/assets/price.png"} width={250} height={250} alt="estimasi" loading="lazy" className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-1/4 mx-auto sm:h-1/4 lg:pb-0"/>
        <p className="p-4 sm:px-8 text-lg text-justify py-12 pb-8 lg:py-28 bg-blue-800 text-white indent-8 lg:px-24">
        Perkirakan biaya instalasi dan perawatan listrik dengan layanan estimasi biaya dari CV Aditya Teknik. Dengan estimasi biaya yang transparan dan akurat, anda dapat merencanakan anggaran kelistrikan untuk rumah atau bisnis Anda dengan mudah. Dapatkan konsultasi dan estimasi biaya kelistrikan terbaik untuk memastikan efisiensi dan keamanan sistem kelistrikan anda
        </p>
        
        {/* table daftar biaya pelayanan */}
        <div className="flex-grow overflow-y-auto pt-6 dark:text-white ">
          <h4 className="text-2xl sm:pt-12 sm:pb-2 font-semibold text-blue-800 dark:text-white lg:py-10">Daftar Estimasi Harga</h4>
          <div className="max-w-4xl w-full mx-auto rounded-lg shadow-md dark:bg-blue-900 bg-gray-100">
            <div className="overflow-x-auto p-4 sm:px-8">
              <table className="min-w-full bg-blue-100 border border-blue-300 dark:bg-blue-900 rounded-lg">
                <thead className="">
                  <tr className="text-blue-700">
                    <th className="border-b px-4 text-left md:text-center dark:text-white w-1/12">No</th>
                    <th className="border-b px-4 text-left md:text-center dark:text-white w-1/4">Daya (VA)</th>
                    <th className="border-b px-4 text-left md:text-center dark:text-white w-1/4">NIDI</th>
                    <th className="border-b px-4 text-left md:text-center dark:text-white w-1/4">SLO </th>
                    <th className="border-b px-4 text-left md:text-center dark:text-white w-1/4"> Harga Nidi + SLO</th>
                  </tr>
                </thead>
                <tbody>
                  {dataBiaya.map((row, index) => (
                  <tr key={index} className={`  bg-gray-100 dark:bg-blue-800`}>
                    <td className="border-b px-4 py-2 dark:text-white">{index + 1}</td>
                    <td className="border-b px-4 py-2 dark:text-white"> {row.daya}</td>
                    <td className="border-b px-4 py-2 dark:text-white"> {row.nidi} </td>
                    <td className="border-b px-4 py-2 dark:text-white"> {row.slo} </td>
                    <td className="border-b px-4 py-2 dark:text-white">{row.total}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <section className="py-14 shadow-lg lg:mx-10 bg-blue-100 border-l-4 border-blue-900 text-blue-900 p-4 sm:px-8" role="alert">
          <p className="text-lg font-medium">Harga kami negotable dan sesuai kebutuhan pelanggan dengan mengkonsultasikan <Link href="/pelayanan/estimasibiaya" className="text-yellow-500 hover:text-yellow-600">kepada kami</Link></p>
        </section>
      </div>
    </div>
  );
};

