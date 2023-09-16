"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./searchBox.module.css"
import Image from "next/image";
export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
    >
      {/* <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords..."
        className={styles.input}
      /> */}
      {/* <button
        disabled={!search}
        type="submit"
        className={styles.button}
      >
        Search
      </button> */}
      <div className={styles.search}>
                <input  value={search}
        onChange={(e) => setSearch(e.target.value)} className={styles.input} type="text" placeholder="What do you want to watch?" />
                <Image onClick={handleSubmit} src="/search.svg" alt="search" width={12} height={12} />
            </div>

    </form>
  );
}