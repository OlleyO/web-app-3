import classNames from "classnames";
import { PropsWithChildren, useState } from "react";
import LeftNav from "../left-nav";
import TopNav from "../top-nav";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  const [navOpen, setNavOpen] = useState(true);

  const handleToggleNav = () => setNavOpen(!navOpen);

  return (
    <div
      className={classNames(styles.layout, { [styles["nav-open"]]: navOpen })}
    >
      <LeftNav open={navOpen} />
      <TopNav onToggleLeftNav={handleToggleNav} />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
