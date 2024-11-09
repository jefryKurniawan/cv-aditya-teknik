import { useState } from "react";
import { IoSend } from "react-icons/io5";


export default function Form () {
  const [formData, setFormData] = useState({
    nik: "",nama: "",provinsi: "",kabupaten: "",kecamatan: "",kelurahan: "",rt: "",rw: "",noRumah: "",daya: "",peruntukan: "",pernyataan: false,
  });

  const [errors, setErrors] = useState({
    nik: false,nama: false,provinsi: false,kabupaten: false,kecamatan: false,kelurahan: false,rt: false, rw: false, noRumah: false, daya: false,peruntukan: false,pernyataan: false,
  });
 
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if ((name === "daya" || name === "rt" || name === "rw") && (isNaN(Number(value)) || Number(value) < 0)) { return;}
    setFormData({ ...formData, [name]: value,});
    if (value) {setErrors((prevErrors) => ({...prevErrors, [name]: false,})) }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { ...errors };
      Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof typeof formData]) { newErrors[key as keyof typeof newErrors] = true; hasError = true;}
    });
    setErrors(newErrors);

    if (!hasError) {
      const { nik, nama, provinsi, kabupaten, kecamatan,kelurahan, rt,rw,noRumah,daya, peruntukan, } = formData;
      const message = `------Permohonan NIDI SLO------\nNIK: ${nik}\nNama Lengkap: ${nama}\nProvinsi: ${provinsi}\nKabupaten: ${kabupaten}\nKecamatan: ${kecamatan}\nKelurahan: ${kelurahan}\nRT: ${rt}\nRW: ${rw}\nNo rumah / blok: ${noRumah}\nDaya PLN: ${daya} VA\nPeruntukan: ${peruntukan}\nPernyataan: Dengan ini menyatakan bahwa instalasi / IML pemanfaatan tenaga listrik tegangan rendah dengan data diatas TELAH TERPASANG OLEH PEMILIK sesuai dengan standar Instalasi listrik yang berlaku.\n------Terima Kasih------`;
      const whatsappUrl = `https://wa.me/6285816375213?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    };
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit} className="border-4 border-red-500">
        <div className="py-4 lg:px-4 ">
          <label htmlFor="nama" className="block text-gray-700 text-md font-medium pb-2">Nama Lengkap (Pemohon) :</label>
          <input name="nama" type="text" value={formData.nama} onChange={handleInputChange} className={`shadow appearance-none border ${errors.nama ? "border-red-500" : ""}rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="Masukkan Nama`}/>{errors.nama && ( <p className="text-red-500 text-sm italic dark:text-white ml-2">Nama tidak boleh kosong.</p> )}
        </div>

        {/* alamat */}
        <div className="flex flex-wrap">
          <div className="py-4 px-4 lg:w-1/2 md:w-full sm:w-full ">
            <label htmlFor="provinsi" className="block text-gray-700 text-md font-medium py-2">Provinsi :</label>
            <input name="provinsi" type="text" value={formData.provinsi} onChange={handleInputChange} className={`shadow appearance-none border ${ errors.provinsi ? "border-red-500" : "" } rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}placeholder="Masukkan Provinsi"/>
             {errors.provinsi && (<p className="text-red-500 text-sm italic dark:text-white ml-2">Provinsi tidak boleh kosong.</p>)}
          </div>

          <div className="py-4 px-4 lg:w-1/2 md:w-full sm:w-full ">
            <label htmlFor="kabupaten" className="block text-gray-700 text-md font-medium py-2">Kabupaten :</label>
            <input name="kabupaten" type="text"value={formData.kabupaten}onChange={handleInputChange}className={`shadow appearance-none border ${errors.kabupaten ? "border-red-500" : "" } rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}
              placeholder="Masukkan Kabupaten/Kota"/>{errors.kabupaten && ( <p className="text-red-500 text-sm italic dark:text-white ml-2">Kabupaten/Kota tidak boleh kosong.</p>)}
          </div>

          <div className="py-4 px-4 lg:w-1/2 md:w-full sm:w-full ">
            <label htmlFor="kecamatan" className="block text-gray-700 text-md font-medium py-2">Kecamatan :</label>
              <input name="kecamatan"type="text"value={formData.kecamatan} onChange={handleInputChange}className={`shadow appearance-none border ${errors.kecamatan ? "border-red-500" : ""
                } rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`} placeholder="Masukkan Kecamatan"/>
                {errors.kecamatan && ( <p className="text-red-500 text-sm italic dark:text-white ml-2">Kecamatan tidak boleh kosong.</p>
              )}
          </div>

          <div className="py-4 px-4 lg:w-1/2 md:w-full sm:w-full " >
            <label htmlFor="kelurahan" className="block text-gray-700 text-md font-medium py-2" >Kelurahan : </label>
            <input name="kelurahan" type="text" value={formData.kelurahan} onChange={handleInputChange} className={`shadow appearance-none border ${ errors.kelurahan ? "border-red-500" : "" } rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`} placeholder="Masukkan Kelurahan/Desa"/>
              {errors.kelurahan && (<p className="text-red-500 text-sm italic dark:text-white ml-2">Kelurahan/Desa tidak boleh kosong.</p> )}
          </div>

          <div className="py-4 px-4 lg:w-1/2 md:w-full sm:w-full">
            <label htmlFor="rt" className="block text-gray-700 text-md font-medium py-2">RT : </label>
            <input name="rt" type="text" value={formData.rt} onChange={handleInputChange} className={`shadow appearance-none border ${errors.rt ? "border-red-500" : "" } rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}placeholder="Masukkan RT"/>
              {errors.rt && (<p className="text-red-500 text-sm italic dark:text-white ml-2">RT tidak boleh kosong. </p>)}
          </div>

          <div className="py-4 px-4 lg:w-1/2 md:w-full sm:w-full">
            <label htmlFor="rw" className="block text-gray-700 text-md font-medium py-2">RW : </label>
            <input name="rw" type="text" value={formData.rw} onChange={handleInputChange} className={`shadow appearance-none border ${errors.rw ? "border-red-500" : ""} rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`} placeholder="Masukkan RW" />
              {errors.rw && (<p className="text-red-500 text-sm italic dark:text-white ml-2">RW tidak boleh kosong. </p>)}
          </div>

          <div className="py-4 lg:px-4 w-full">
            <label htmlFor="noRumah" className="block text-gray-700 text-md font-medium py-2">No Rumah / Blok : </label>
            <input name="noRumah"type="text"value={formData.noRumah} onChange={handleInputChange} className={`shadow appearance-none border ${errors.noRumah ? "border-red-500" : "" } rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`} placeholder="Masukkan No Rumah / Blok"/>
              {errors.noRumah && ( <p className="text-red-500 text-sm italic dark:text-white ml-2"> No Rumah / Blok tidak boleh kosong.</p>)}
          </div>
        </div>

        {/* daya pln */}
        <div className="py-4 lg:px-4">
          <label htmlFor="daya" className="block text-gray-700 text-md font-medium py-2">Daya PLN (VA) NIDI + SLO :</label>
          <select name="daya" value={formData.daya} onChange={handleInputChange} className={`shadow appearance-none border ${errors.daya ? "border-red-500" : ""} rounded-lg text-sm font-medium w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block p-2.5`}id="">
            <option value="">Silahkan Pilih Daya</option> <option value="450">450VA Rp.85.000</option><option value="900">900VA Rp.150.000</option> <option value="1300">1.300VA Rp.225.000</option><option value="2200">2.200VA Rp.330.000</option> <option value="3500">3.500VA Rp.455.000</option><option value="4400">4.400VA Rp.572.000</option><option value="5500">5.500VA Rp.715.000</option><option value="6600">6.600VA Rp.858.000</option><option value="7700">7.700VA Rp.1.001.000</option><option value="10600">10.600VA Rp.1.325.000</option><option value="11000">11.000VA Rp.1.375.000</option> <option value="13200">13.200VA Rp.1.650.000</option><option value="16500">16.500VA Rp.2.062.000</option><option value="23000">23.000VA Rp.2.300.000</option> <option value="33200">33.200VA Rp.3.135.000</option><option value="41000">41.000VA Rp.3.942.000</option> <option value="53000">53.000VA Rp.5.035.000</option> <option value="66000">66.000VA Rp.6.270.000</option> <option value="82500">82.500VA Rp.6.187.000</option><option value="105000">105.000VA Rp.7.875.000</option><option value="131200">131.200VA Rp.9.825.000</option><option value="147000">147.000VA Rp.11.025.000</option> <option value="164000">164.000VA Rp.12.300.000</option><option value="197000">197.000VA Rp.14.775.000</option>
          </select>
            {errors.daya && ( <p className="text-red-500 text-sm italic dark:text-white ml-2">Daya tidak boleh kosong.</p>)}
        </div>

        <div className="py-2 lg:px-4 pb-8">
          <label htmlFor="peruntukan" className="block text-gray-700 text-md font-medium py-2">Peruntukan : </label>
          <select name="peruntukan"value={formData.peruntukan}onChange={handleInputChange} id="" className={`shadow appearance-none border ${ errors.peruntukan ? "boder-red-500" : ""} rounded-lg text-sm font-medium w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block p-2.5`}>
            <option value="">Pilih Peruntukan</option> <option value="Rumah Tangga">Rumah Tangga</option> <option value="Bisnis">Bisnis</option> <option value="Industri">Industri</option><option value="Publik">Publik</option> <option value="Sosial">Sosial</option>
          </select>
            {errors.peruntukan && (<p className="text-red-500 text-sm italic dark:text-white ml-2">Peruntukan tidak boleh kosong.</p>)}
        </div>

        {/* checkbox */}
        <div className="py-4 lg:px-4">
          <p className="text-gray-700 text-md font-medium"> Pernyataan</p>
          <div className="flex items-center ml-2">
            <input type="checkbox" name="pernyataan"checked={formData.pernyataan}
              // value={formData.pernyataan}
              onChange={() => setFormData({ ...formData, pernyataan: !formData.pernyataan })
              }className="mr-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-400"/> 
              <p className="text-gray-700 text-sm">Dengan ini menyatakan bahwa instalasi / IML pemanfaatan tenaga listrik tegangan rendah dengan data diatas TELAH TERPASANG OLEH PEMILIK sesuai dengan standar Instalasi listrik yang berlaku. </p>
          </div>{errors.pernyataan && ( <p className="text-red-500 text-sm italic dark:text-white ml-8">Anda harus mencentang pernyataan ini. </p>)}
        </div>

        <div className="flex items-center justify-between lg:px-4 py-6">
          <button onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-800 hover:text-white font-medium uppercase p-4 rounded-none focus:outline-none focus:shadow-outline shadow-inner">
              Kirim Permohonan
              <span><IoSend size="1rem" className="inline-block vertical-align:middle ml-2"/> </span>
          </button>
        </div>
      </form>
    </>
  )
}

