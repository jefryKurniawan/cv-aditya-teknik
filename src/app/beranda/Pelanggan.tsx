import Image from "next/image"
import styles from "./Pelanggan.module.css"

export default function Pelanggan () {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <div className={styles.bg2}>
          <div><h2 className={styles.title}>Beberapa Klien Kami</h2></div>
          <div className={styles.container}>
            <div className={styles.slider}>
              {/* pertama */}
              <Image loading="lazy" src={"/assets/client/BRI-logo.png"} width={150} height={10} alt="pelanggan-1" className={styles.image1}/>
              <Image loading="lazy" src={"/assets/client/midfile.png"} width={150} height={10}alt="pelanggan-2" className={styles.image2}/>
              <Image loading="lazy" src={"/assets/client/mve.jpg"} width={100} height={100} alt="pelanggan-3" className={styles.image3}/>
              <Image loading="lazy" src={"/assets/client/sd-blimbing3.png"} width={250} height={50} alt="pelanggan-4" className={styles.image4}/>
              <Image loading="lazy" src={"/assets/client/sdn-mojolangu.png"} width={250} height={50} alt="pelanggan-5" className={styles.image5}/>
              <Image loading="lazy" src={"/assets/client/mbr.png"} width={250} height={20} alt="pelanggan-6" className={styles.image6}/>
              <Image loading="lazy" src={"/assets/client/harmonika.png"} width={200} height={50} alt="pelanggan-7" className={styles.image7}/>
              <Image loading="lazy" src={"/assets/client/gers.png"} width={250} height={100} alt="pelanggan-8" className={styles.image8}/>
              <Image loading="lazy" src={"/assets/client/apr.png"} width={250} height={100} alt="pelanggan-9" className={styles.image9}/>
              <Image loading="lazy" src={"/assets/client/bclr.png"} width={250} height={100} alt="pelanggan-10" className={styles.image10}/>  

              {/* kedua */}
              <Image loading="lazy" src={"/assets/client/BRI-logo.png"} width={150} height={10} alt="pelanggan-1" className={styles.image1}/>
              <Image loading="lazy" src={"/assets/client/midfile.png"} width={150} height={10}alt="pelanggan-2" className={styles.image2}/>
              <Image loading="lazy" src={"/assets/client/mve.jpg"} width={100} height={100} alt="pelanggan-3" className={styles.image3}/>
              <Image loading="lazy" src={"/assets/client/sd-blimbing3.png"} width={250} height={50} alt="pelanggan-4" className={styles.image4}/>
              <Image loading="lazy" src={"/assets/client/sdn-mojolangu.png"} width={250} height={50} alt="pelanggan-5" className={styles.image5}/>
              <Image loading="lazy" src={"/assets/client/mbr.png"} width={250} height={20} alt="pelanggan-6" className={styles.image6}/>
              <Image loading="lazy" src={"/assets/client/harmonika.png"} width={200} height={50} alt="pelanggan-7" className={styles.image7}/>
              <Image loading="lazy" src={"/assets/client/gers.png"} width={250} height={100} alt="pelanggan-8" className={styles.image8}/>
              <Image loading="lazy" src={"/assets/client/apr.png"} width={250} height={100} alt="pelanggan-9" className={styles.image9}/>
              <Image loading="lazy" src={"/assets/client/bclr.png"} width={250} height={100} alt="pelanggan-10" className={styles.image10}/>  
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}