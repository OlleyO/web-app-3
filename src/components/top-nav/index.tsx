import IconButton from "../icon-button";
import styles from "./styles.module.scss";

import Ellipses from "../../../public/white-ellipses.svg";
import Folders from "../../../public/folders.svg";
import Settings from "../../../public/not-gear-settings.svg";
import Upload from "../../../public/upload.svg";
import Envelop from "../../../public/envelop.svg";
import Earth from "../../../public/planet-earth.svg";

import SearchInput from "../search-input";
import classNames from "classnames";
import Profile from "../profile";

interface Props {
  onToggleLeftNav(): void;
}

const TopNav: React.FC<Props> = ({ onToggleLeftNav }) => (
  <nav className={styles["top-nav"]}>
    <div className={classNames(styles["button-group"], styles.left)}>
      <div className={styles["button-group__item"]}>
        <IconButton
          className={styles["menu-button"]}
          renderIcon={() => <Ellipses />}
          onClick={onToggleLeftNav}
        />
      </div>
      <div className={styles["button-group__item"]}>
        <IconButton renderIcon={() => <Folders />} />
      </div>
      <div className={styles["button-group__item"]}>
        <IconButton renderIcon={() => <Settings />} />
      </div>
    </div>
    <SearchInput
      type="round"
      placeholder="Search Anything here..."
      wrapperClassName={styles["search-wrapper"]}
    />
    <div className={styles["right-part"]}>
      <div className={classNames(styles["button-group"], styles.right)}>
        <div className={styles["button-group__item"]}>
          <IconButton renderIcon={() => <Upload />} />
        </div>
        <div className={styles["button-group__item"]}>
          <IconButton renderIcon={() => <Envelop />} />
        </div>
        <div className={styles["button-group__item"]}>
          <IconButton renderIcon={() => <Earth />} />
        </div>
      </div>

      <Profile
        profile={{
          fullname: "John Doe",
          position: "Software Engineer",
        }}
      />
    </div>
  </nav>
);

export default TopNav;
