import FeaturedItem from "../featuredItem/FeaturedItem";
import MovieCard from "../movieCard/MovieCard";
import styles from "./result.module.css"

export default function Results({ results }) {
  return (
    <div className={styles.customGrid}>
      {results.map((result) => (
        <MovieCard key={result.id} movie={result} />
      ))}
    </div>
  );
}