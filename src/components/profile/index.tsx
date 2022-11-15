import { useEffect, useState } from "react";
import { Profile as ProfileType } from "../../core/types";

import Ellipses from "../../../public/ellipses.svg";

import Image from "next/image";

import styles from "./styles.module.scss";
import IconButton from "../icon-button";

interface Props {
  profile: ProfileType;
}

const Profile: React.FC<Props> = ({ profile }) => {
  const [avatar, setAvatar] = useState<string>("");

  useEffect(() => {
    fetch("https://random.imagecdn.app/72/72").then((res) =>
      setAvatar(res.url)
    );
  }, []);

  return (
    <div className={styles["profile"]}>
      <div className={styles["profile__avatar"]}>
        {avatar && (
          <Image
            src={avatar}
            alt="avatar"
            layout="fill"
            width={72}
            height={72}
          />
        )}
      </div>
      <div className={styles["profile__info"]}>
        <div className={styles["fullname"]}>{profile.fullname}</div>
        <div className={styles.position}>{profile.position}</div>
      </div>

      <IconButton renderIcon={() => <Ellipses className={styles.dots} />} />
    </div>
  );
};

export default Profile;
