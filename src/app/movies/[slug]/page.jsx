"use client"

import React, { useEffect, useRef, useState } from 'react';
import styles from "./singleMovie.module.css"
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";
import { useParams } from 'next/navigation'
import { formatMinutesToHoursAndMinutes } from "../../../utils/generateMinute";
import YouTubeVideo from "@/components/youTubeVideo/YouTubeVideo";

async function getMovieDetails(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );
  return res.json();
}

async function getMovieCast(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );
  return res.json();
}

async function getMovieTrailer(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/550/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=videos`
  );
  return res.json();
}
//https://api.themoviedb.org/3/movie/550/credits?api_key=00f008917848223dc4d8ff66f51d109c&language=en-US
const Page = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [movie, setMovie] = useState(null)
  const [movieCast, setMovieCast] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [loading, setLoading] = useState(false)

  const params = useParams();

  console.log("Roter => ", params.slug)
  const movieId = params.slug;


  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const movieDetail = await getMovieDetails(movieId);
        const movieCast = await getMovieCast(movieId);
        const movieTrailer = await getMovieTrailer(movieId)

        setMovie(movieDetail);
        setMovieCast(movieCast);
        setTrailer(movieTrailer)
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId])

  console.log("TRAILER => ", trailer)
  const year = movie?.release_date.split("-")[0];
  const movieTime = formatMinutesToHoursAndMinutes(movie?.runtime);
  const movieRate = movie?.vote_average;
  const rating = movieRate ? movieRate.toFixed(1) : null;
  const findDirector = movieCast?.crew.find(item => item.job === "Director")
  const director = findDirector?.name;
  const movieWriters = movieCast?.crew.filter(item => item.department === "Writing")
  let movieWriter = movieWriters;

  const sortedCast = movieCast?.cast.sort((a, b) => b.popularity - a.popularity);
  const topStars = sortedCast?.slice(0, 3);

  const trailerId = trailer?.results[0]?.key
  // const movieStars = movieCast?.cast.filter(item => item.popularity > 20)

  console.log("Stars => ", topStars)
  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const myGener = ["Action", "Sci-fi"]
  const writers = ["Jim Cash", "Jack Epps Jr", "Peter Craig"]
  const stars = ["Tom Cruise", "Jennifer Connelly", "Miles Teller"]

  console.log(videoRef)
  return (
    <div className={styles.container}>
      

     
      {
        loading ? <Image src="/spinner.svg" width={200} height={200} alt="loading" /> :
          <>
           <Sidebar />
            <div className={styles.wrapper}>
              <div className={styles.top}>
                <div className={styles.videoContainer}>
                  {/* <video ref={videoRef} className={styles.video} controls width="640" height="360" onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}>
                    <source src="/trailer.mp4" type="video/mp4" />

                  </video> */}
                  <YouTubeVideo videoId={trailerId} width={640} height={360} title={movie?.title} />
                  {/* <div className={styles.customPlayBtn} onClick={togglePlay}>
                    <div className={styles.playBtn}>
                      {isPlaying ? '⏸️' : '▶️'}
                    </div>
                    <div className={styles.playText}>
                      {isPlaying ? 'Pause' : 'Watch Trailer'}
                    </div>
                  </div> */}
                </div>

              </div>
              <div className={styles.bottom}>
                <div className={styles.bottomContainer}>
                  <div className={styles.bottomLeft}>
                    <div className={styles.bottomLeftTop}>
                      <div className={styles.movieDesc}>
                        <span className={styles.movieTitle} data-testid="movie-title">
                          {movie?.title}
                        </span>
                        <span className={styles.movieYear} data-testid="movie-release-date">
                          •
                          {year}
                        </span>
                        <span className={styles.movieParent}>
                          •
                          PG-13
                        </span>
                        <span className={styles.movieDuration} data-testid="movie-runtime">
                          •
                          {movieTime}
                        </span>
                        {
                          movie?.genres?.map((item, index) => (
                            <span className={styles.movieGenere} key={index}>{item.name}</span>
                          ))
                        }
                      </div>
                      <p className={styles.movieDetails} data-testid="movie-overview">
                        {movie?.overview}
                      </p>
                      <p className={styles.director}>
                        Director: <span className={styles.directorP}> {director}</span>
                      </p>
                      <p className={styles.writers}>
                        Writers: {movieWriter?.map((item, index, array) => (
                          <span key={index} className={styles.writersP}> {item.name}{index !== array.length - 1 && ', '} </span>
                        ))}
                      </p>
                      <p className={styles.stars}>
                        Stars:  {topStars?.map((item, index, array) => (
                          <span key={index} className={styles.starsP}> {item.name}{index !== array.length - 1 && ', '} </span>
                        ))}
                      </p>

                    </div>
                    <div className={styles.bottomLeftBottom}>
                      <div className={styles.rateed}>
                        Top rated movie #65
                      </div>
                      <div className={styles.award}>
                        <span>Awards
                          9 nominations</span>
                        <Image className={styles.expandImg} src="/expand.svg" alt="logo" width={30} height={30} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.bottomRight}>
                    <div className={styles.bottomRightTop}>
                      <div className={styles.feat}>
                        <div className={styles.featWrapper}>
                          <Image className={styles.expandImg} src="/Star.svg" alt="star" width={25} height={25} />
                          <span className={styles.rated}> {rating} {"    |"}</span>
                          <span className={styles.watched}> {movie?.vote_count}k</span>
                        </div>
                      </div>
                      <div className={styles.featListT}>
                        <Image className={styles.expandImg} src="/ticket.svg" alt="star" width={25} height={25} />
                        <span>See Showtimes</span>
                      </div>
                      <div className={styles.featListB}>
                        <Image className={styles.expandImg} src="/List.svg" alt="star" width={25} height={25} />
                        <span>See Showtimes</span>
                      </div>

                    </div>
                    <div className={styles.bottomRightBottom}>
                      <div className={styles.bottomRightBottomWrapper}>
                        <Image className={styles.moreImgs} src="/movies-show.svg" alt="star" width={350} height={180} />
                        <div className={styles.bottomRightBottomText}>
                          <Image className={styles.listImgs} src="/list-b.svg" alt="star" width={25} height={25} />
                          <span className={styles.bestText} >The Best Movies and Shows in September</span>
                        </div>

                      </div>




                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
      }

    </div>
  )
}

export default Page