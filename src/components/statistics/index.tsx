import { Stat } from "../../core/types";
import Statistic from "../statistic";
import styles from "./styles.module.scss";

interface Props {
  stats: Stat[];
}

const Statistics: React.FC<Props> = ({ stats }) => (
  <div className={styles.stats}>
    {stats.map((stat) => (
      <Statistic key={stat.title} data={stat} />
    ))}
    <button className={styles.add}>+ Add Statistic</button>
  </div>
);

export default Statistics;
