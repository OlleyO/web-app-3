import { Stat } from "../../core/types";
import styles from "./styles.module.scss";

import Triangle from "../../../public/triangle.svg";

import formatThousands from "format-thousands";
import Change from "../change";

interface Props {
  data: Stat;
}

const Statistic: React.FC<Props> = ({ data }) => {
  const { title, value, rise, fall } = data;

  return (
    <div className={styles.stat}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{formatThousands(value, ",")}</div>
      <Change rise={rise} fall={fall} />
    </div>
  );
};

export default Statistic;
