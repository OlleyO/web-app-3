import styles from "./styles.module.scss";

import Logo from "../../../public/logo.svg";
import Logout from "../../../public/power-button.svg";
import Home from "../../../public/home.svg";
import Statistics from "../../../public/statistics.svg";
import Users from "../../../public/user.svg";
import Settings from "../../../public/settings.svg";
import Queries from "../../../public/queries.svg";
import Link from "next/link";
import classNames from "classnames";
import IconLink from "../icon-link";
import IconButton from "../icon-button";

const paths = [
  {
    name: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    name: "Statistics",
    path: "/statistics",
    icon: <Statistics />,
  },
  {
    name: "Users",
    path: "/users",
    icon: <Users />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Settings />,
  },
  {
    name: "Queries",
    path: "/queries",
    icon: <Queries />,
  },
];

interface Props {
  open: boolean;
}

const LeftNav: React.FC<Props> = ({ open }) => (
  <nav
    className={classNames(styles["left-nav"], {
      [styles.open]: open,
    })}
  >
    <div className={styles["left-nav__logo"]}>
      <Logo className={styles.logo} />
    </div>
    <ul className={styles["left-nav__list"]}>
      {paths.map(({ name, path, icon }) => (
        <li key={name}>
          <IconLink
            wrapperClassName={styles["left-nav__item"]}
            text={name}
            to={path}
            renderIcon={() => icon}
          />
        </li>
      ))}
    </ul>
    <div className={styles["left-nav__logout"]}>
      <IconButton renderIcon={() => <Logout />} />
    </div>
  </nav>
);

export default LeftNav;
