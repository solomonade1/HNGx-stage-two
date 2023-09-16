"use client"

import React, { useEffect, useState } from 'react'
import styles from "./navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import SearchBox from "../searchBox/SearchBox"

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          setIsSticky(scrollY > 0); // Change to scrollY > 0 to make it sticky once it leaves the top
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <div className={`${styles.container} ${isSticky ? styles.sticky : ''}`}>
            <div className={styles.logo}>
                <Link href="/">
                <Image src="/Logo.svg" className={styles.lgLogo} alt="logo" width={186} height={50} />
                <Image className={styles.smLogo} src="/tv.svg" alt="logo" width={90} height={40} />
                </Link>
               
            </div>
           <SearchBox />
            <div className={styles.links}>
                <Link className={styles.signIn} href="#">Sign in</Link>
                <Image src="/Menu.svg" alt="menu" width={36} height={36} />
            </div>
        </div>
    )
}

export default Navbar