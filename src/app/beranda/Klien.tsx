'use client';

import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface KlienProps {
  items: string[];
}

const Klien: React.FC<KlienProps> = ({ items }) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollAnimation = () => {
      if (isPaused || !scrollContainer) return;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
      requestAnimationFrame(scrollAnimation);
    };

    const animationFrame = requestAnimationFrame(scrollAnimation);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <div
      className="overflow-hidden whitespace-nowrap relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={scrollRef}
        className="flex space-x-8 animate-scroll"
        style={{ display: 'inline-flex' }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={clsx(
              'flex items-center text-xl justify-center bg-gray-200 px-4 py-2 rounded-sm text-gray-800 shadow-md'
            )}
          >
            {item}
          </div>
        ))}
        {/* Duplicate items to create an infinite scroll illusion */}
        {items.map((item, index) => (
          <div
            key={`duplicate-${index}`}
            className={clsx(
              'flex items-center justify-center text-xl bg-gray-200 px-4 py-2 rounded-lg text-gray-800 shadow-md'
            )}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  const data = [
    'Bank Rakyat Indonesia','Seluruh Rayon PLN Malang Raya','Midfile New Height of Living','Malang Villa Estate','Sekolah Dasar Negeri Blimbing 3','Sekolah Dasar Negeri Mojolangu','Malang Bhayangkara Residence','Harmonika', 'Green Elok Residence Singosari', 'Asrikaton Pakis Residence','Bunga Citra Lestari Residence','Bank Rakyat Indonesia','Seluruh Rayon PLN Malang Raya','Midfile New Height of Living','Malang Villa Estate','Sekolah Dasar Negeri Blimbing 3','Sekolah Dasar Negeri Mojolangu','Malang Bhayangkara Residence','Harmonika', 'Green Elok Residence Singosari', 'Asrikaton Pakis Residence','Bunga Citra Lestari Residence','Bank Rakyat Indonesia','Seluruh Rayon PLN Malang Raya','Midfile New Height of Living','Malang Villa Estate','Sekolah Dasar Negeri Blimbing 3','Sekolah Dasar Negeri Mojolangu','Malang Bhayangkara Residence','Harmonika', 'Green Elok Residence Singosari', 'Asrikaton Pakis Residence','Bunga Citra Lestari Residence',
  ];

  return (
    <div className="bg-[url('/assets/bg/8884395.jpg')] bg-cover bg-center bg-fixed p-8  dark:bg-blue-500 ">
      <h1 className="text-4xl font-bold mb-4 text-center">Klien Kami</h1>
      <Klien items={data} />
    </div>
  );
}
