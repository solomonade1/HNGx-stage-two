import React from 'react'
import styles from "./footer.module.css"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {

  return (
    <div className={styles.container}>
      <div className={styles.socials}>
      <Image src="/facebook.svg" alt="facebook" width={24} height={24} />
        <Image src="/instagram.svg" alt="instagram" width={24} height={24} />
        <Image src="/twitter.svg" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.svg" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.links}>
      <Link href="#">Conditions of Use</Link>
      <Link href="#">Privacy and Policy</Link>
      <Link href="#">Press Room</Link>
    </div>
    <div className={styles.copy}>
    © 2021 MovieBox by Solomon Adegboyega
    </div>
    </div>
  )
}

export default Footer