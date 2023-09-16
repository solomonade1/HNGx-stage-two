import React from 'react'
import styles from "./sidebar.module.css"
import Image from "next/image"
import Link from "next/link"

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/" >
            <Image className={styles.lgLogo} s src="/logo-1.svg" alt="logo" width={186} height={50} />
            <Image className={styles.smLogo} src="/tv.svg" alt="logo" width={186} height={50} />
          </Link>

        </div> <div className={styles.lists}>

          <ul className={styles.listItems}>
            <li className={styles.listItem}>
              <Link className={styles.link} href="/">
                <Image className={styles.linkImg} src="/Home.svg" alt="logo" width={25} height={25} />
                <span className={styles.linkText}>Home</span>
              </Link>
            </li>
            <li className={`${styles.listItem} ${styles.active}`}>
              <Link className={styles.link} href="#">
                <Image className={styles.linkImg} src="/projector.svg" alt="logo" width={25} height={25} />
                <span className={`${styles.linkText} ${styles.linkTextActive}`}>Movies</span>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.link} href="#">
                <Image className={styles.linkImg} src="/tv-show.svg" alt="logo" width={25} height={25} />
                <span className={styles.linkText}>Tv Series</span>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.link} href="#">
                <Image className={styles.linkImg} src="/Calendar.svg" alt="logo" width={25} height={25} />
                <span className={styles.linkText}>Upcoming</span>
              </Link>
            </li>

          </ul>
        </div>
        <div className={styles.box}>
          <div className={styles.boxWrapper}>
            <p className={styles.boxTextBold}>
              Play movie quizes
              and earn
              free tickets
            </p>
            <p className={styles.boxText}>
              50k people are playing
              now
            </p>
            <button className={styles.boxBtn}>Start playing</button>
          </div>

        </div>
        <div className={styles.logout}>
          <Link className={styles.link} href="#">
            <Image className={styles.linkImg} src="/Logout.svg" alt="logout" width={25} height={25} />
            <span className={styles.linkText}>Logout</span>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Sidebar