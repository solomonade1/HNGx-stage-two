

import React from 'react';
import styles from "./featuredItem.module.css";
import Image from "next/image";
import Link from "next/link";


async function getMovieDetails(id) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
    );
    return res.json();
}

const FeaturedItem = async ({ movie }) => {
    const year = movie?.release_date.split("-")[0];
    const movieDetail = await getMovieDetails(movie?.id);

    const genre = movieDetail?.genres;
    let country = movieDetail?.production_countries[0]?.name === "United States of America" ? "USA" : movieDetail?.production_countries[0]?.name

    const imdb = Math.round(movie.vote_average)

    // console.log(movieDetail)


    return (
        <Link href={`/movies/${movie.id}`} data-testid="movie-card" className={styles.container}>
            <div className={styles.wrapper}>
                <Image className={styles.favorite} src="/Favorite.svg" alt="imdb" width={30} height={30} />

                <div className={styles.poster}>
                    <Image data-testid="movie-poster" className={styles.posterImg} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path
                        }`} alt={movie.title} width={250} height={220} placeholder="blur"
                        blurDataURL="/spinner.svg"
                    />
                </div>
                <div className={styles.bottom}>
                    <span className={styles.country}> {country}{", "} <span data-testid="movie-release-date"> {year} </span> </span>
                    <h2 className={styles.title} data-testid="movie-title">{movie.title}  </h2>
                    <div className={styles.rating}>
                        <div className={styles.ratingLeft}>
                            <Image src="/imdb.svg" alt="imdb" width={35} height={17} />
                            <span>{movie.vote_count} /100</span>
                        </div>
                        <div className={styles.ratingRight}>
                            <Image src="/tomato.svg" alt="rotten-tomato-rating" width={16} height={17} />
                            <span>{movie.vote_average}%</span>
                        </div>
                    </div>
                    <div>
                        {genre.map((item, index, array) => (
                            <span className={styles.genre} key={index}>
                                {item.name}
                                {index !== array.length - 1 && ', '}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default FeaturedItem