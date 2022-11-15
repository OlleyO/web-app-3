import Link from "next/link";

import styles from "./styles.module.scss";

const Page404 = () => (
  <div className={styles.page}>
    <h1>404</h1>
    <p>Page not found</p>
    <Link href="/">Go back to the website</Link>
  </div>
);

export default Page404;
