import Link from "next/link";
import Image from "next/image";

export default function Perawatan () {
  return (
  <div className="mx-auto py-10 border border-gray-300 shadow-md dark:bg-blue-500">
    <h1 className="text-3xl font-bold pb-4 text-center text-blue-900 dark:text-white">Perawatan Listrik</h1>
    <Image src={"/assets/pemasangan.svg"} alt="Pemasangan Listrik"width={250} height={250} className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-1/4 lg:h-1/4 mx-auto sm:h-1/4 py-8 sm:pb-10 lg:py-2 "/>
    <section className="p-2 mx-auto py-20 bg-blue-300">
      <p className="text-justify mx-10 indent-10 text-lg"> CV Aditya Teknik, penyedia jasa perawatan dan maintenance listrik yang berpusat di Malang, melayani seluruh wilayah Jawa Timur dan daerah perbatasan. Dengan tim teknisi listrik profesional dan berpengalaman, kami memastikan instalasi listrik anda aman, efisien, dan sesuai standar. Layanan perawatan rutin kami membantu mencegah kerusakan, meningkatkan usia peralatan, dan menjaga stabilitas sistem kelistrikan rumah maupun bisnis anda. </p>
    </section>
    <section className="p-4 sm:px-8 py-20 text-justify lg:mx-36 ">
      <h2 className="text-2xl font-semibold py-6 text-blue-950 text-center dark:text-white">Fungsi Maintenance Listrik</h2>
      <ul className="list-disc list-inside md:pl-8 lg:pl-14 dark:text-white text-lg">
        <li className="pb-2">Untuk memperpanjang usia peralatan listrik</li>
        <li className="pb-2">Meningkatkan reliability, availability, dan efisiensi</li>
        <li className="pb-2">Mengurangi risiko terjadinya kerusakan atau kegagalan pada peralatan</li>
        <li className="pb-2">Mengurangi risiko terjadinya kerusakan atau kegagalan pada peralatan</li>
        <li className="pb-2">Mengurangi lama waktu padam karena adanya gangguan pada panel</li>
        <li >Meningkatkan keamanan pada peralatan</li>
      </ul>
    </section>
    <section className="p-4 md:px-8 py-16 text-justify lg:px-16 bg-blue-300">
      <h2 className="text-2xl font-semibold py-4 text-blue-950">Perawatan 4 Jenis :</h2>
      <ul className="list-decimal list-inside py-2 dark:text-black">
        <li className="py-2 ">
          <strong className="text-blue-800 text-xl">Predictive maintenance</strong> : 
          <br />
          <p className="pl-4 text-lg pt-2 indent-8">Pemeliharaan ini dilakukan dengan cara memprediksi kondisi suatu peralatan listrik. Jadi bisa ditentukan kapan dan apakah kemungkinan peralatan listrik atau panel listrik tersebut akan gagal atau tidaknya.</p>
        </li>
        <li className="py-2 ">
          <strong className="text-blue-800 text-xl">Preventive maintenance</strong> : 
          <br />
          <p className="pl-4 pt-2 text-lg indent-8">Sesuai namanya, preventif berarti mencegah. Jadi pemeliharaan ini dilakukan untuk mencegah terjadinya peralatan secara tiba-tiba dan untuk mempertahankan unjuk kerja peralatan yang optimal sesuai dengan usia teknisnya. Pemeliharaan seperti ini bisa dikategorikan sebagai pemeliharaan berdasarkan waktu (time base maintenance). </p>
        </li>
        <li className="py-2">
          <strong className="text-blue-800 text-lg">Corrective maintenance</strong> : 
          <br />
          <p className="pl-4 pt-2 text-lg indent-8">Pemeliharaan ini dilakukan secara berencana pada waktu yang sudah ditentukan. Biasanya saat corrective maintenance ini ada spare part yang sudah rusak kemudian diganti dengan yang lebih baik/baru.</p>
        </li>
        <li className="py-2">
          <strong className="text-blue-800 text-lg">Breakdown maintenance</strong> : 
          <br />
          <p className="pl-4 pt-2 text-lg indent-8">Pemeliharaan ini sifatnya mendadak. Jadi akan dilaksanakan saat kerusakan yang muncul mendadak waktunya dan darurat.</p>
        </li>
      </ul>
    </section>
    <section className="py-14 shadow-lg lg:mx-10 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
      <p className="text-lg font-medium">Harga kami negotable dan sesuai kebutuhan pelanggan dengan mengecek <Link href="/pelayanan/estimasibiaya" className="text-blue-800 hover:text-blue-500">estimasi biaya</Link></p>
    </section>
  </div>
  )
}
