import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import styles from "./styles.module.scss";

import Change from "../change";
import { RevenueData } from "../../core/types";

interface Props {
  data: RevenueData;
  wrapperClassName?: string;
}

const RevenueCard: React.FC<Props> = ({ data, wrapperClassName }) => {
  return (
    <div className={wrapperClassName}>
      <div className={styles.revenueCard}>
        <div className={styles.revenueCard__title}>Revenue Per Hour</div>

        <div className={styles.progress}>
          <CircularProgressbarWithChildren
            value={data.revenue}
            styles={buildStyles({
              backgroundColor: "#fff",
              trailColor: "#E9E9E9",
              pathColor: "url(#gradient-fill)",
              strokeLinecap: "round",
            })}
          >
            <div className={styles.value}>{`$${data.revenue}`}</div>
          </CircularProgressbarWithChildren>
        </div>
        <Change rise={data.rise} fall={data.fall} />
      </div>

      <svg
        viewBox="0 0 800 200"
        width="0"
        height="0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient-fill" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#6c5cb5" />

            <stop offset="0.14285714285714285" stopColor="#755fbb" />

            <stop offset="0.2857142857142857" stopColor="#7e62c1" />

            <stop offset="0.42857142857142855" stopColor="#8864c8" />

            <stop offset="0.5714285714285714" stopColor="#9167cd" />

            <stop offset="0.7142857142857142" stopColor="#9b69d3" />

            <stop offset="0.8571428571428571" stopColor="#a56cd9" />

            <stop offset="1" stopColor="#af6ede" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default RevenueCard;
