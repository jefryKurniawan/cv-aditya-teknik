import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";

export default function Rules () {
    const [accordionOpen, setAccordionOpen] = useState(false)
    const [accordionOpen2, setAccordionOpen2] = useState(false)
    const [accordionOpen3, setAccordionOpen3] = useState(false)
    const [accordionOpen4, setAccordionOpen4] = useState(false)

    return (
        <div className='p-4 bg-blue-100 rounded-lg shadow-2xl'>
            <div className='text-center py-12'>
                <h2 className='text-3xl font-bold text-blue-900'>Alur Proses NIDI SLO</h2>
            </div>

            {/* accordion 1 */}
            <div>
                <div className="py-2">
                    <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full">
                        <span className='flex items-center'>
                            <RiNumber1 />
                            <span className='ml-4 text-xl font-semibold text-blue-800'>Instalasi Listrik Rumah</span>
                        </span>
                        <span className='mr-4'>
                            {accordionOpen ? <span><FaMinus /></span> : <span><FaPlus /></span>}
                        </span>
                    </button>
                </div>
                <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0' }`}>
                    <div className="overflow-hidden ml-8 py-2 font-medium text-lg">Siapkan instalasi listrik di dalam rumah atau bangunan. Pastikan sekering, lampu, stop kontak, saklar, dan kabel tufur terpasang.</div>
                </div>
            </div>

            {/* accordion 2 */}
            <div>
                <div className="py-2">
                    <button onClick={() => setAccordionOpen2(!accordionOpen2)} className="flex justify-between w-full">
                        <span className='flex items-center'>
                            <RiNumber2 />
                            <span className='ml-4 text-xl font-semibold text-blue-800'>Daftar NIDI & SLO</span>
                        </span>
                        <span className='mr-4'>
                            {accordionOpen2 ? <span><FaMinus /></span> : <span><FaPlus /></span>}
                        </span>
                    </button>
                </div>
                
                <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen2 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0' }`}>
                    <div className="overflow-hidden ml-8 py-2 font-medium text-lg">Daftar NIDI dan SLO dengan mengisi permohonan NIDI SLO beserta data apa saja yang dibutuhkan dan pastikan bangunan yang telah selesai dipasang.</div>
                </div>
            </div>

            {/* accordion 3 */}
            <div>
                <div className="py-2">
                    <button onClick={() => setAccordionOpen3(!accordionOpen3)} className="flex justify-between w-full">
                        <span className='flex items-center'>
                            <RiNumber3 />
                            <span className='ml-4 text-xl font-semibold text-blue-800'>Daftar Listrik Di PLN Mobile</span> 
                        </span>
                        <span className='mr-4'>
                            {accordionOpen3 ? <span><FaMinus /></span> : <span><FaPlus /></span>}
                        </span>
                    </button>
                </div>
                <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen3 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0' }`}>
                    <div className="overflow-hidden ml-8 py-2 font-medium text-lg">Setelah NIDI & SLO sudah terbit, silahkan mengisi form permohonan listrik melalui PLN Mobile, Isi Data dan No SLO kemudian Pembayaran.</div>
                </div>
            </div>

            {/* accordion 4 */}
            <div>
                <div className="py-2">
                    <button onClick={() => setAccordionOpen4(!accordionOpen4)} className="flex justify-between w-full">
                        <span className='flex items-center'>
                            <RiNumber4 className=''/>
                            <span className='ml-4 text-xl font-semibold text-blue-800'>Listrik Terpasang</span>
                        </span>
                        <span className='mr-4'>
                            {accordionOpen4 ? <span><FaMinus /></span> : <span><FaPlus /></span>}
                        </span>
                    </button>
                </div>
                <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen4 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0' }`}>
                    <div className="overflow-hidden ml-8 py-2 font-medium text-lg">Setelah pembayaran pemasangan akan dilakukan PLN, dalam beberapa hari pihak PLN akan datang dan melakukan pemasangan meteran listrik.</div>
                </div>
            </div>
        </div>
    )
}

// export default Rules;