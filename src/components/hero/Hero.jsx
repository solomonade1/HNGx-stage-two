import React from 'react'
import styles from "./hero.module.css"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  const ratingNumber = [1, 2, 3, 4, 5]
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.leftTitle}>
          John Wick 3 : Parabellum
        </h2>
        <div className={styles.leftMiddle}>
          <div className={styles.leftMiddleLeft}>
            <Image src="/imdb.svg" alt="imdb" width={35} height={17} />
            <span>8.60/10</span>
          </div>
          <div className={styles.leftMiddleRight}>
            <Image src="/tomato.svg" alt="rotten-tomato-rating" width={16} height={17} />
            <span>97%</span>
          </div>
        </div>
        <p className={styles.leftDesc}>John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
        <Link href="#"><Image src="/watch-btn.svg" alt="watch-btn" width={170} height={36} /> </Link>
      </div>
      <div className={styles.right}>
        {
          ratingNumber.map((number, index) => (
            <div className={styles.ratingNumber} key={index}>
              {number}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Hero