import { ProgressData } from "../../core/types";
import Change from "../change";
import styles from "./styles.module.scss";

import formatThousands from "format-thousands";

interface Props {
  data: ProgressData;
  wrapperClassName?: string;
}

const ProgressCard: React.FC<Props> = ({ data, wrapperClassName }) => {
  return (
    <div className={wrapperClassName}>
      <div className={styles["progress-card"]}>
        <div className={styles["progress-card__title"]}>Progress</div>
        <div className={styles["progress-body"]}>
          {data.progresses.map((progress, index) => (
            <div key={index} className={styles["progress-body__item"]}>
              <div
                className={styles.progress}
                style={{
                  height: `${progress}%`,
                }}
              ></div>
            </div>
          ))}
        </div>
        <div className={styles.total}>${formatThousands(data.total, ",")}</div>
        <Change rise={data.rise} fall={data.fall} />
      </div>
    </div>
  );
};

export default ProgressCard;
