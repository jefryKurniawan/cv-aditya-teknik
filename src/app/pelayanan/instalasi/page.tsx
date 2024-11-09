import Image from "next/image";
import { IoMdWarning } from "react-icons/io";

export default function InstalasiListrik () {
  return (
    <div className="flex flex-col min-h-screen dark:bg-blue-700">
      <div className="py-8 ">
        <h1 className="text-3xl font-bold lg:py-10 pb-6 text-center text-blue-900 dark:text-white ">Instalasi Listrik</h1>
        <Image src={"/assets/plug-in.png"} width={250} height={250} alt="instalasi-listrik" loading="lazy" className="transition-all mx-auto duration-300 ease-in-out hover:scale-105 lg:w-1/6 lg:h-1/6 md:w-1/4 sm:w-1/6 lg:pb-12 "/>
      </div>
      <section className="py-16 p-4 lg:px-8 text-justify sm:px-8 bg-blue-300 ">
          <h3 className="text-2xl font-semibold py-6">Pemasangan Instalasi Listrik</h3>
          <p className="pl-2 pb-8 indent-6 text-lg">Pemasangan instalasi listrik baru adalah langkah penting yang harus dilakukan dengan hati-hati untuk menghindari risiko korsleting dan kebakaran. Listrik adalah kebutuhan dasar yang mendukung aktivitas sehari-hari, mulai dari penerangan hingga pengisian daya perangkat elektronik.</p>
          <p className="pl-2 pb-4 indent-6 text-lg">Perlu diingat bahwa PLN hanya bertanggung jawab untuk menyediakan pasokan listrik dan meteran khusus. Pemasangan instalasi listrik di rumah adalah tanggung jawab pemilik rumah. Jika Anda sedang merenovasi atau membangun rumah baru, kami menawarkan layanan instalasi listrik yang aman dan efisien. Tim teknisi kami yang berpengalaman dan profesional akan memastikan pemasangan dilakukan sesuai dengan standar keamanan tinggi, menjamin pemasangan yang bebas dari potensi bahaya.</p>
      </section>
      <section className="py-12 p-4 lg:px-20 md:mx-auto sm:px-4 ">
        <h2 className="text-2xl font-semibold pt-8 pb-4 dark:text-white text-blue-900">5 Alasan Penting Instalasi Listrik Benar</h2>
        <ol className="list-disc list-inside pl-5 dark:text-white text-lg">
          <li className="py-2">Menurunkan risiko korsleting</li>
          <li className="py-2">Menurunkan risiko kebakaran</li>
          <li className="py-2">Mencegah pemborosan listrik</li>
          <li className="py-2">Peralatan elektronik aman dari kerusakan</li>
          <li className="py-2">Hemat tagihan listrik bulanan</li>
        </ol>
      </section>
      <section className="lg:py-24 lg:mx-auto md:p-6 sm:p-2 bg-blue-300  p-4 sm:px-8 text-justify">
        <h2 className="text-2xl pt-12 pb-2 font-semibold text-blue-900 text-center">Biaya Pasang Baru PLN</h2>
        <p className="indent-6 text-lg pt-2">Biaya Pasang Baru PLN adalah faktor penting yang harus dipertimbangkan saat melakukan instalasi listrik baru. Berikut adalah beberapa biaya yang perlu diperhatikan:</p>
        <ul className="list-disc list-inside pl-2 py-4 text-lg">
          <li className="pb-2">Biaya Penyambungan (BP): Biaya untuk proses penyambungan listrik dari jaringan PLN ke rumah Anda.</li>
          <li className="pb-2">Uang Jaminan Langganan (UJL): Jaminan yang harus dibayar sebagai bentuk komitmen untuk penggunaan listrik.</li>
          <li className="pb-2">Biaya Materai: Biaya administrasi untuk dokumen terkait pemasangan.</li>
          <li className="pb-2">Token Listrik Perdana: Untuk listrik prabayar, Anda harus membeli token listrik minimal Rp 5.000 sebagai persiapan awal.</li>
        </ul>
        <p className="indent-6 pt-0 pb-12 text-lg">Pastikan untuk memeriksa tarif dan ketentuan terbaru dari PLN untuk menghindari biaya tambahan yang tidak terduga dan memastikan proses instalasi berjalan dengan lancar.</p>
      </section>

      <section className="py-4 lg:p-10 md:p-6 sm:p-2 text-lg">
        <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-8 shadow-2xl">Masalah listrik dapat berisiko tinggi dan berbahaya<IoMdWarning size="1.5rem" className="ml-2 inline-block vertical-align:middle"/> <br /> <br />  Percayakan penanganannya kepada ahli untuk memastikan keamanan dan kenyamanan anda</p>
        
      </section>
    </div>
  );
};

  