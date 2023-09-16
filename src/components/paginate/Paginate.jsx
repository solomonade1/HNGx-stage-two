import Link from "next/link";
import styles from "./paginate.module.css"



const Paginate = ({ currentPage, totalPages, pageType }) => {
  return (
    <div className={styles.paginate}>
      {currentPage > 1 && (
        <Link
          href={`/movies/${pageType}/?page=${currentPage - 1}`}
          className={`${styles.paginateLink} ${styles.prev}`}
        >
          Prev
        </Link>
      )}
      {currentPage < totalPages && (
        <Link
          href={`/movies/${pageType}/?page=${currentPage + 1}`}
          className={`${styles.paginateLink} ${styles.next}`}
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Paginate;
