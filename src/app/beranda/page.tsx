"use client"
import React from 'react';
import Hero from './Hero';
import Layanan from './Layanan';
import Rules from './Rules';
import NidiSlo from './NidiSlo';
// import Pelanggan from './Pelanggan';

export default function Beranda () {
  return (
    <div className='w-full h-full'>
      <Hero/>
      {/* <Pelanggan /> */}
      <NidiSlo />
      <Layanan />
      <div className='lg:py-28 lg:px-20 dark:bg-blue-800'>
        <Rules />
      </div>
    </div>
  )
}


   