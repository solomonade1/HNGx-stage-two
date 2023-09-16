

import Hero from "@/components/hero/Hero";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import SearchBox from "@/components/searchBox/SearchBox";


export default function Home() {
  return <div className={styles.container}>
    <div className={styles.wrapper}>
      <Navbar />
      <Hero />
      <Featured />
      <Footer />
    </div>

  </div>;
}
