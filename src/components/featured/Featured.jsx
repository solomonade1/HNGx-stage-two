
import React from 'react'
import styles from "./featured.module.css"
import Link from "next/link"
import Image from "next/image"
import movieData from "../../data"
import FeaturedItem from "../featuredItem/FeaturedItem"

const Featured = async () => {

  const API_KEY = process.env.API_KEY;

      

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  const data = await res.json();

  const results = data.results;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2 className={styles.movieHeader}>Featured Movie</h2>
        <Link className={styles.more} href="#">See More
          <Image src="/more.svg" alt="more" width={20} height={20} />
        </Link>
      </div>
      <div className={styles.list}> {
        results.slice(0, 6).map((movie, index) => (
        
            <FeaturedItem key={index} movie={movie} />
      

        ))
      } </div>
    </div>
  )
}

export default Featured