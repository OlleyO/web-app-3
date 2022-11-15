import { FeedPerson } from "../../core/types";
import styles from "./styles.module.scss";

import Image from "next/image";

interface Props {
  data: FeedPerson[];
  wrapperClassName?: string;
}

const FeedCard: React.FC<Props> = ({ data, wrapperClassName }) => {
  return (
    <div className={wrapperClassName}>
      <div className={styles.feedCard}>
        <div className={styles.title}>Customers Feed</div>
        <div className={styles.feedCard__person}>
          <div className={styles.feedCard__person__avatar}>
            {data[0] && data[0].photo && (
              <Image
                src={data[0].photo}
                alt={data[0]?.fullname}
                width={42}
                height={42}
                layout="fixed"
              />
            )}
            <div className={styles["last-seen"]}>{data[0]?.lastSeen}</div>
          </div>
          <div className={styles.messages}>
            <div className={styles.message}>
              <span className={styles.fullname}>{data[0]?.fullname}</span>
              {data[0]?.messages[0]}
            </div>
            <div className={styles["other-messages"]}>
              {data[0]?.messages.slice(1).map((message, index) => (
                <div key={index} className={styles.message}>
                  <span className={styles.fullname}>{data[0]?.fullname}</span>
                  {message}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.feedCard__person}>
          <div className={styles.feedCard__person__avatar}>
            {data[1] && data[1].photo && (
              <Image
                src={data[1].photo}
                alt={data[1]?.fullname}
                width={42}
                height={42}
                layout="fixed"
              />
            )}

            <div className={styles["last-seen"]}>{data[1]?.lastSeen}</div>
          </div>
          <div className={styles.messages}>
            <div className={styles.message}>
              <span className={styles.fullname}>{data[1]?.fullname}</span>
              {data[1]?.messages[0]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
