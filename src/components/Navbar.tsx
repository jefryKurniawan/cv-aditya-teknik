"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";


export default function Navbar () {
  const [isClick, setIsClick] = useState(false);
  const [darkMode, setDarkMode] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect (() => {``
    if (darkMode) {document.documentElement.classList.add("dark")}
    else{document.documentElement.classList.remove("dark")}
  }, [darkMode])

  const toggleNavbar = () => {setIsClick(!isClick)};
  const handleOpen = () => {console.log('handle open dijalankan'); setIsOpen(!isOpen) }
  const handleClose = () => {console.log('handle close dijalankan');setIsOpen(false)}

  return (
    <header>
      <nav className="bg-blue-400 dark:bg-blue-950 p-3">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* mode web navbar */}
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="flex flex-row items-center text-xl font-bold text-white ml-3">
                  <p className="text-2xl font-extrabold uppercase text-white">CV. Aditya Teknik</p>
                </Link>      
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4 text-sm">
                <button onClick={() => setDarkMode(!darkMode)} className="ml-auto ">
                  {darkMode ? (< MdOutlineDarkMode size="1.5rem" className='text-white'/>
                ) : (
                  <MdOutlineLightMode size="1.5rem" />)}
                </button>
                <Link href="/" className="font-bold text-xl transition text-white dark:hover:text-white hover:text-blue-800">Beranda</Link>
                <Link href="#" className='relative group transition-all text-white'>
                  <button  className={`font-bold text-xl flex items-center justify-center w-full px-4 py-2 text-white outline-none focus:outline-none hover:text-blue-800 dark:hover:bg-transparent dark:hover:text-white ${isOpen ? 'font-bold text-xl bg-transparent dark:bg-blue-900' : 'bg-transparent' }`}onClick={() => setIsOpen(!isOpen)}>
                    Pelayanan
                    <FontAwesomeIcon icon={faCaretDown} className="ml-1.5" />
                  </button>
                  {isOpen && (
                    <div className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-md rounded-md w-full">
                      <ul>
                        <li>
                          <Link href="/pelayanan/nidi-slo" className="block px-4 py-2 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md" onClick={handleClose}>NIDI & SLO</Link>
                        </li>
                        <li>
                          <Link href="/pelayanan/pemlistrik" className="block px-4 py-2 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"  onClick={handleClose} >Pemasangan Listrik</Link>
                        </li>
                        <li>
                          <Link href="/pelayanan/pendaya" className="block px-4 py-2 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md" onClick={handleClose}>Penambahan Daya</Link>
                        </li>
                        <li>
                          <Link href="/pelayanan/estimasibiaya" className="block px-4 py-2 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md" onClick={handleClose}>Estimasi Biaya</Link>
                        </li>
                        <li>
                          <Link href="/pelayanan/perawatan"className="block px-4 py-2 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md" onClick={handleClose}>Perawatan</Link>
                        </li>
                        <li>
                          <Link href="/pelayanan/instalasi"className="block px-4 py-2 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md" onClick={handleClose}>Instalasi Listrik</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </Link>
                <Link href="/informasi" className="font-bold text-xl text-white hover:text-blue-800 dark:hover:text-white">Informasi</Link>
                <Link href="/hubkami" className="font-bold text-xl text-white dark:hover:text-white hover:text-blue-800 ">Hubungi Kami</Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className='inline-flex item-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
                {isClick ? ( 
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"fill='none'viewBox='0 0 24 24'stroke='currentColor'>
                    <path strokeLinecap="round" strokeLinejoin="round"strokeWidth={2}d="M6 18L18 6Ml12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"fill='none'viewBox='0 0 24 24'stroke='currentColor'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6h16M4 12h16m-7 6h7"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* mobile navbar */}
        {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <button onClick={() => setDarkMode(!darkMode)} className="mx-auto " >
              {darkMode ? (
                < MdOutlineDarkMode size="1.5rem" className='text-white'/>
              ) : ( 
                <MdOutlineLightMode size="1.5rem"/>
              )}
            </button>
            <Link href="/" className="flex items-center justify-center w-full px-4 py-2 text-white hover:text-blue-800 text-lg font-semibold">Beranda</Link>
            <Link href="#" className='relative block'>
              <button className={`flex items-center justify-center w-full px-4 py-2 text-white  outline-none focus:outline-none hover:text-white dark:hover:text-black dark:hover:bg-white text-lg font-semibold ${isOpen ? 'bg-blue-800 dark:bg-blue-900' : 'bg-transparent' }`} // onClick={() => setIsOpen(!isOpen)}
                onClick={handleOpen}>Pelayanan <FontAwesomeIcon icon={faCaretDown} className="ml-4" />
              </button>
                {isOpen && (
                  <div className="absolute z-50 left-0 bg-white dark:bg-gray-800 shadow-md rounded-md w-full flex justify-center">
                    <ul className='w-full'>
                      <li className='w-full'>
                        <Link href="/pelayanan/nidi-slo"className="block w-full px-4 text-lg py-2 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md" onClick={handleClose}>NIDI & SLO</Link>
                      </li>
                      <li className='w-full'>
                        <Link href="/pelayanan/pemlistrik"className="block w-full px-4 text-lg py-2 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md" onClick={handleClose}>Pemasangan Listrik</Link>
                      </li>
                      <li className='w-full'>
                        <Link href="/pelayanan/pendaya" className="block w-full px-4 text-lg py-2 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md" onClick={handleClose}>Penambahan Daya</Link>
                      </li>
                      <li className='w-full'>
                        <Link href="/pelayanan/estimasibiaya"className="block w-full px-4 text-lg py-2 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md" onClick={handleClose}>Estimasi Biaya</Link>
                      </li>
                      <li className='w-full'>
                        <Link href="/pelayanan/perawatan"className="block w-full px-4 text-lg py-2 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md" onClick={handleClose}>Perawatan</Link>
                      </li>
                      <li className='w-full'>
                        <Link href="/pelayanan/instalasi"className="block w-full px-4 text-lg py-2 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md" onClick={handleClose}>Instalasi Listrik </Link>
                      </li>
                    </ul>
                  </div>
                )}
            </Link>
            <div className={`mt-8 flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out ${isOpen ? 'mt-8' : ''}`}>
              <Link href="/informasi" className="block w-full text-center px-4 pt-4 text-white hover:text-white p-2 text-lg font-semibold">Informasi</Link>
              <Link href="/hubkami" className="block w-full text-center px-4 text-white hover:text-white  p-2 text-lg font-semibold">Hubungi Kami</Link>
            </div>
          </div>
          </div>
        )} 
      </nav>
    </header>
  )
}