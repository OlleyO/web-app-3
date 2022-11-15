import { Task } from "../../core/types";
import styles from "./styles.module.scss";

import Checked from "../../../public/checked.svg";
import Clock from "../../../public/wall-clock.svg";
import dayjs from "dayjs";

interface Props {
  data: Task[];
  wrapperClassName?: string;
}

const TasksCard: React.FC<Props> = ({ data, wrapperClassName }) => (
  <div className={wrapperClassName}>
    <div className={styles.cards}>
      <div className={styles["card-title"]}>Todays Tasks</div>
      {data.map((item, index) => (
        <div className={styles.card} key={index}>
          <label className={styles.radio}>
            <input type="checkbox" />
            <span className={styles.icon}>
              <Checked className={styles.check} />
            </span>
            <span className={styles.title}>{item.title}</span>
          </label>
          <div className={styles["desc-con"]}>
            <div className={styles.description}>{item.description}</div>
          </div>
          <div className={styles.time}>
            <Clock className={styles.clock} />
            <div className={styles["time-value"]}>
              {dayjs(item.time).format("h:mm A")}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TasksCard;
