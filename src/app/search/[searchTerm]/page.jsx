// import Result from "@/components/result";

import Featured from "@/components/featured/Featured";
import Results from "@/components/result/Result";
import styles from "./searchTerm.module.css"
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";

export default async function SearchPage({ params }) {
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
    );

    if (!res.ok) {
        throw new Error("Error fetching data");
    }

    const data = await res.json();

    const results = data.results;
    return (
        <div className={styles.container}>
    <div className={styles.wrapper}>
        <Navbar />
        <Hero />
    {results && results.length === 0 && (
                <h1 className={styles.header}>No results found for: <span className={styles.headerText}>{params.searchTerm} </span></h1>
            )}

{results && results.length > 0 && (
                <h1 className={styles.header}>Search Result for: <span className={styles.headerText}>{params.searchTerm} </span> </h1>
            )}

            {results && <Results results={results} />}
    </div>

        </div>
    );
}