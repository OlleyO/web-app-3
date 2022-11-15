import styles from "./styles.module.scss";
import Triangle from "../../../public/triangle.svg";

interface Props {
  rise: number;
  fall: number;
  wrapperClassName?: string;
}

const Change: React.FC<Props> = ({ rise, fall, wrapperClassName }) => (
  <div className={wrapperClassName}>
    <div className={styles.change}>
      <div className={styles.rise}>
        <Triangle className={styles.triangle} />
        <div>{rise}</div>
      </div>
      <div className={styles.fall}>
        <Triangle className={styles.triangle} />
        <div>{fall}</div>
      </div>
    </div>
  </div>
);
export default Change;
