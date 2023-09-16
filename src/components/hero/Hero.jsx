"use client"

import React, { useEffect, useState } from 'react'
import styles from "./hero.module.css"
import Image from "next/image"
import Link from "next/link"



const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
const [movies, setMovies] = useState([])
const [error, setError] = useState(null); 
const [isLoading, setIsLoading] = useState(false)

const goToSlide = (index) => {
  setCurrentIndex(index);
};

const nextSlide = () => {
  const newIndex = (currentIndex + 1) % movies.length;
  setCurrentIndex(newIndex);
};

const prevSlide = () => {
  const newIndex = (currentIndex - 1 + movies.length) % movies.length;
  setCurrentIndex(newIndex);
};

useEffect(() => {

 const fetchMovies = async() => {
  setIsLoading(true)
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 10000 } }
    );
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    console.log("Data => ", data)
    // Assuming the API response is an array of image URLs
    setMovies(data);

  } catch (error) {
    setError(error.message);
  
  } finally {
    setIsLoading(false);
  }
 };

 fetchMovies()
}, []);

useEffect(() => {
  const interval = setInterval(nextSlide, 10000); // Auto-advance every 10 seconds

  return () => {
    clearInterval(interval); // Cleanup when the component unmounts
  };
}, [currentIndex]);

console.log(movies, "MOVIEEE")
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