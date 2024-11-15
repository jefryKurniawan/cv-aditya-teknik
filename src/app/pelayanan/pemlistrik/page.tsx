import Image from "next/image";
import Link from "next/link";

export default function Pemlistrik () {
  return (
    <div className="lg:w-full mx-auto lg:py-10 dark:bg-blue-500">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-900 pt-8 pb-0 dark:text-white">Pemasangan Listrik</h1>
      <Image src="/assets/pemasangan.svg"alt="Pemasangan Listrik" width={200}height={200} className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-1/4 mx-auto sm:w-1/6 md:w-1/3 "/>
      <section className="p-4 md:py-16 sm:px-8 py-12 lg:p-10 lg:py-20 bg-blue-800 text-justify">
        <h3 className="text-2xl font-semibold text-white">Pemasangan instalasi Listrik Baru</h3>
        <p className="py-6 pl-2 text-lg text-white indent-8"> Pemasangan instalasi listrik baru adalah langkah penting yang harus dilakukan dengan hati-hati untuk menghindari risiko korsleting dan kebakaran. Listrik adalah kebutuhan dasar yang mendukung aktivitas sehari-hari, mulai dari penerangan hingga pengisian daya perangkat elektronik.</p>
        <p className="pl-2 text-lg text-white indent-8"> Perlu diingat bahwa PLN hanya bertanggung jawab untuk menyediakan pasokan listrik dan meteran khusus. Pemasangan instalasi listrik di rumah adalah tanggung jawab pemilik rumah. Jika Anda sedang merenovasi atau membangun rumah baru, kami menawarkan layanan instalasi listrik yang aman dan efisien. Tim teknisi kami yang berpengalaman dan profesional akan memastikan pemasangan dilakukan sesuai dengan standar keamanan tinggi, menjamin pemasangan yang bebas dari potensi bahaya.</p>
      </section>
      <section className="lg:py-16 p-4 sm:px-8 py-16 md:ml-16">
        <h2 className="text-2xl font-semibold py-4 text-blue-800 dark:text-white">5 Alasan Penting Instalasi Listrik Benar</h2>
        <ul className="list-disc list-inside pl-5 dark:text-white text-lg">
          <li className="pb-1">Menurunkan risiko korsleting</li>
          <li className="pb-1">Menurunkan risiko kebakaran</li>
          <li className="pb-1">Mencegah pemborosan listrik</li>
          <li className="pb-1">Peralatan elektronik aman dari kerusakan</li>
          <li className="">Hemat tagihan listrik bulanan</li>
        </ul>
      </section>
      <section className="lg:p-10 lg:py-20 bg-blue-800 p-4 sm:px-8 py-14">
        <h2 className="text-xl font-semibold text-white">Biaya Pasang Baru PLN</h2>
        <p className="py-6 text-white text-lg">Biaya Pasang Baru PLN adalah faktor penting yang harus dipertimbangkan saat melakukan instalasi listrik baru. 
          <p className="text-lg pt-6 text-white">Biaya yang perlu diperhatikan :</p>
        </p>
        <ul className="list-disc list-inside pl-4 pb-10 text-white text-lg">
          <li className="pb-1">Biaya Penyambungan (BP) : Biaya untuk proses penyambungan listrik dari jaringan PLN ke rumah Anda.</li>
          <li className="pb-1">Uang Jaminan Langganan (UJL) : Jaminan yang harus dibayar sebagai bentuk komitmen untuk penggunaan listrik.</li>
          <li className="pb-1">Biaya Materai : Biaya administrasi untuk dokumen terkait pemasangan.</li>
          <li className="pb-1">Token Listrik Perdana : Untuk listrik prabayar, Anda harus membeli token listrik minimal Rp 5.000 sebagai persiapan awal.</li>
        </ul>
        <p className="border rounded-sm p-4 border-gray-500 shadow-lg bg-blue-300">Pastikan untuk memeriksa tarif dan ketentuan terbaru dari PLN untuk menghindari biaya tambahan yang tidak terduga dan memastikan proses instalasi berjalan dengan lancar.</p>
      </section>
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 py-12 px-9" role="alert">
        <strong >Peringatan</strong>
        <p>Jangan biarkan masalah listrik mengganggu aktivitas Anda. Hubungi kami untuk mendapatkan layanan perbaikan listrik korsleting yang profesional.<Link href="/hubkami" className="text-blue-700 hover:text-blue-500"> Konsultasi</Link></p>
      </div>
    </div>
  )
}
