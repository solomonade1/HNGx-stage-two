import React from 'react'
import styles from "./topRated.module.css"
import Link from "next/link";
import FeaturedItem from "@/components/featuredItem/FeaturedItem";
import MovieCard from "@/components/movieCard/MovieCard";
import Paginate from "@/components/paginate/Paginate";


async function getTopRatedMovies(page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );
  return res.json();
}
const Page = async ({ searchParams }) => {

  const page = searchParams?.page || 1;

  const topRatedMovies = await getTopRatedMovies(page);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          Top Rated Movies
        </div>
        <div className={styles.list}> {
          topRatedMovies.results.map((movie, index) => (
            <Link key={index} href={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          ))
        }
         </div>
         {/* <Paginate
          currentPage={page < 1 || page > topRatedMovies.total_pages ? 1 : page}
          totalPages={topRatedMovies.total_pages}
          pageType="top-rated"
        /> */}
      </div>
    </div>
  )
}

export default Page