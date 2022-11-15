import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

import Chat from "../../../public/chat.svg";

import Image from "next/image";
import IconButton from "../icon-button";

interface Props {
  fullname: string;
  position: string;
  wrapperClassName?: string;
}

const Person: React.FC<Props> = ({ fullname, position, wrapperClassName }) => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    fetch("https://random.imagecdn.app/42/42").then((res) => setUrl(res.url));
  });

  return (
    <div className={wrapperClassName}>
      <div className={styles["person"]}>
        <div className={styles["person__avatar"]}>
          {url && (
            <Image
              src={url}
              width={42}
              height={42}
              alt="avatar"
              layout="fill"
            />
          )}
        </div>
        <div className={styles["person__info"]}>
          <div className={styles["fullname"]}>{fullname}</div>
          <div className={styles.position}>{position}</div>
        </div>
        <IconButton renderIcon={() => <Chat className={styles.chat} />} />
      </div>
    </div>
  );
};

export default Person;
