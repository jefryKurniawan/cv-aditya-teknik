/* eslint-disable  @typescript-eslint/no-explicit-any */

import { useState } from "react"
import { IoMdSend } from "react-icons/io";

export default function Permohonan () {
    const [formData, setFormData] = useState({
        nik: "",nama: "",provinsi: "",kab: "",kec: "",kel: "",rt: "",rw: "",no: "",daya: "", kode: "",peruntukan: "",pernyataan: false,
    })

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const adminNumber = '6281456123367';

        const { nik, nama, no, provinsi, kab, kec, kel, rt,rw, kode, daya, peruntukan, } = formData;
    
        const message = `------Permohonan NIDI SLO------\nNIK: ${nik}\nNama Lengkap: ${nama}\nNo Whatsapp: ${no}\nProvinsi: ${provinsi}\nKabupaten: ${kab}\nKecamatan: ${kec}\nKelurahan: ${kel}\nRT: ${rt}\nRW: ${rw}\nNo rumah / blok: ${kode}\nDaya PLN: ${daya} VA\nPeruntukan: ${peruntukan}\nPernyataan: Dengan ini menyatakan bahwa instalasi / IML pemanfaatan tenaga listrik tegangan rendah dengan data diatas TELAH TERPASANG OLEH PEMILIK sesuai dengan standar Instalasi listrik yang berlaku.\n------Terima Kasih------`;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${adminNumber}?text=${encodedMessage}`;
    
        window.open(whatsappURL, '_blank');
      }
    
    return (
        <div>
            <form onSubmit={handleSubmit} className="py-4 space-y-2 mx-auto md:max-w-2xl sm:max-w-sm text-center ">
                <div className="pt-2 ">
                    <label htmlFor="" className="block text-lg font-medium text-gray-900">Nama (Pribadi/Instansi/Perusahaan/Sekolah)</label>
                    <input type="text" value={formData.nama} onChange={(e) => setFormData({ ...formData, nama: e.target.value })} className="block w-full px-3.5 py-2  ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" placeholder="Upin" required onInvalid={(e:React.InvalidEvent<HTMLInputElement>) => e.target.setCustomValidity("Masukan nama anda!")} onInput={(e:React.FormEvent<HTMLInputElement>) => e.currentTarget.setCustomValidity('')}/>
                </div>
                <div className="py-0 ">
                    <label htmlFor="" className="block text-lg font-medium text-gray-900">NIK</label>
                    <input type="text" value={formData.nik} onChange={(e) => setFormData({ ...formData, nik: e.target.value })} className="block w-full px-3.5 py-2  ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" placeholder="35200***********" required onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => e.target.setCustomValidity("Masukan NIK anda!")} onInput={(e: React.FormEvent<HTMLInputElement>) => e.currentTarget.setCustomValidity('')}/>

                </div>
                <div className="">
                    <label htmlFor="" className="block text-lg font-medium text-gray-900">No Whatsapp</label>
                    <input type="text" value={formData.no} onChange={(e) => setFormData({ ...formData, no: e.target.value })} className="block w-full px-3.5 py-2  ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" placeholder="0857*******" required onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => e.target.setCustomValidity("Masukan no WhatsApp anda!")} onInput={(e: React.FormEvent<HTMLInputElement>) => e.currentTarget.setCustomValidity('')}/>
                </div>

                <div className="pt-4 ">
                    <p className="text-lg">Alamat Instalasi</p>
                    <div className="pt-1 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="" 
                            className="block text-lg font-medium text-gray-900">Provinsi</label>
                            <input type="text" value={formData.provinsi} onChange={(e) => setFormData({ ...formData, provinsi: e.target.value })}  className="block w-full px-3.5 py-2  ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" placeholder="Jawa Timur" required onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => e.target.setCustomValidity("Masukan provinsi anda!")} onInput={(e: React.FormEvent<HTMLInputElement>) => e.currentTarget.setCustomValidity('')}/>
                            
                        </div>
                        <div>
                            <label htmlFor="" className="block text-lg font-medium text-gray-900">Kabupaten</label>
                            <input type="text" value={formData.kab} onChange={(e) => setFormData({ ...formData, kab: e.target.value })}  className="block w-full px-3.5 py-2  ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" placeholder="Malang" required onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => e.target.setCustomValidity("Masukan kabupaten anda!!")} onInput={(e: React.FormEvent<HTMLInputElement>) => e.currentTarget.setCustomValidity('')}/>

                        </div>
                        <div>
                            <label htmlFor="" className="block text-lg font-medium text-gray-900">Kecamatan</label>
                            <input type="text" value={formData.kec} onChange={(e) => setFormData({ ...formData, kec: e.target.value })}  className="block w-full px-3.5 py-2  ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" placeholder="Lowokwaru" required onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => e.target.setCustomValidity("Masukan kecamatan anda!!")} onInput={(e: React.FormEvent<HTMLInputElement>) => e.currentTarget.setCustomValidity('')}/>

                        </div>
                        <div>
                            <label htmlFor="" className="block text-lg font-medium text-gray-900">Kelurahan</label>
                            <input type="text" value={formData.kel} onChange={(e) => setFormData({ ...formData, kel: e.target.value })} className="block w-full px-3.5 py-2  ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" placeholder="Mojolangu" required onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => e.target.setCustomValidity("Masukan Kelurahan Anda!!")} onInput={(e: React.FormEvent<HTMLInputElement>) => e.currentTarget.setCustomValidity('')}/>

                        </div>
                        
                        <div>
                            <label htmlFor="" className="block text-lg font-medium text-gray-900">RT</label>
                            <input type="text" value={formData.rt} onChange={(e) => setFormData({ ...formData, rt: e.target.value })} className="block w-full px-3.5 py-2  ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" placeholder="06" required onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => e.target.setCustomValidity("Masukan RT anda!!")} onInput={(e: React.FormEvent<HTMLInputElement>) => e.currentTarget.setCustomValidity('')}/>

                        </div>
                        <div>
                            <label htmlFor="" className="block text-lg font-medium text-gray-900">RW</label>
                            <input type="text" value={formData.rw} onChange={(e) => setFormData({ ...formData, rw: e.target.value })} className="block w-full px-3.5 py-2  ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" placeholder="02" required onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => e.target.setCustomValidity("Masukan RW anda!!")} onInput={(e: React.FormEvent<HTMLInputElement>) => e.currentTarget.setCustomValidity('')}/>
                        </div>
                        <div>
                            <label htmlFor="" className="block text-lg font-medium text-gray-900">Kode POS</label>
                            <input type="text" value={formData.kode} onChange={(e) => setFormData({ ...formData, kode: e.target.value })} className="block w-full px-3.5 py-2  ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" placeholder="65142" required onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => e.target.setCustomValidity("Masukan kode pos anda!!")} onInput={(e: React.FormEvent<HTMLInputElement>) => e.currentTarget.setCustomValidity('')}/>
                        </div>
                    </div>
                </div>

                <div className="pt-4 grid grid-cols-1 gap-x-4 gap-y- sm:grid-cols-2">
                    <div>
                        <label htmlFor="" className="block ">Daya PLN (VA) NIDI + SLO</label>
                        <select className="block w-full px-3.5 py-2  ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" value={formData.daya} onChange={(e) => setFormData({ ...formData, daya: e.target.value })} required onInvalid={(e: React.InvalidEvent<HTMLSelectElement>) => e.target.setCustomValidity("Masukan Daya PLN Anda!")} onInput={(e: React.FormEvent<HTMLSelectElement>) => e.currentTarget.setCustomValidity('')}>
                            <option value="">Pilih Daya</option><option value="450">450VA Rp.70.000</option><option value="900">900VA Rp.100.000</option> <option value="1300">1.300VA Rp.140.000</option><option value="2200">2.200VA Rp.160.000</option> <option value="3500">3.500VA Rp.170.000</option><option value="4400">4.400VA Rp.240.000</option><option value="5500">5.500VA Rp.265.000</option><option value="6600">6.600VA Rp.296.000</option><option value="7700">7.700VA Rp.420.000</option><option value="10600">10.600VA Rp.450.000</option><option value="11000">11.000VA Rp.470.000</option> <option value="13200">13.200VA Rp.650.000</option><option value="16500">16.500VA Rp.700.000</option><option value="23000">23.000VA Rp.978.000</option> <option value="33200">33.200VA Rp.1,112.000</option><option value="41000">41.000VA Rp.1,410.000</option> <option value="53000">53.000VA Rp.1,800.000</option> <option value="66000">66.000VA Rp.2,500.000</option> <option value="82500">82.500VA Rp.2,550.000</option><option value="105000">105.000VA Rp.2,660.000</option><option value="131200">131.200VA Rp.3,330.000</option><option value="147000">147.000VA Rp.3,700.000</option> <option value="164000">164.000VA Rp.4,150.000</option><option value="197000">197.000VA Rp.14.775.000</option>
                        </select>
                    </div>    
                    
                    <div>
                        <label htmlFor="" className="block text-lg font-medium text-gray-900">Peruntukan</label>
                        <select name="" id="" className="block w-full px-3.5 py-2  ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" value={formData.peruntukan} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, peruntukan: e.target.value })} required onInvalid={(e:React.InvalidEvent<HTMLSelectElement>) => e.target.setCustomValidity("Masukkan Peruntukan Anda!")} onInput={(e:React.FormEvent<HTMLSelectElement>) => e.currentTarget.setCustomValidity('') }>
                            <option value="">Pilih Peruntukan</option> <option value="Rumah-Tangga">Rumah Tangga</option> <option value="Bisnis">Bisnis</option> <option value="Industri">Industri</option><option value="Publik">Publik</option> <option value="Sosial">Sosial</option>
                        </select>
                    </div>
                </div>

                <div className="py-6">
                    <label htmlFor="" className="text-center block pb-2 text-xl">Pernyataan</label>
                    <div className="flex items-start gap-2">
                        <input type="checkbox"
                        checked={formData.pernyataan}
                        onChange={() => setFormData({...formData, pernyataan: !formData.pernyataan})} required
                        onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => e.target.setCustomValidity("Anda harus menyatakan persetujuan!")} onInput={(e: React.FormEvent<HTMLInputElement>) => e.currentTarget.setCustomValidity('')} className=""/> 
                        <p className="text-gray-700 text-lg indent-2 text-justify ">Dengan ini menyatakan bahwa instalasi / IML pemanfaatan tenaga listrik tegangan rendah dengan data diatas TELAH TERPASANG OLEH PEMILIK sesuai dengan standar Instalasi listrik yang berlaku. </p>
                    </div>
                </div>

                <div className="text-center py-6">
                    <button type="submit" className="bg-violet-500 hover:text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 py-2 px-6">Kirim Permohonan <IoMdSend size="1.5rem" className="ml-2 inline-block vertical-align:middle"/></button>
                </div>

            </form>
        </div>
    )
}