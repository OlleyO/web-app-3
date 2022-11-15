import styles from "./styles.module.scss";

import Ellipses from "../../../public/ellipses.svg";
import { GraphDataSingleElement } from "../../core/types";
import IconButton from "../icon-button";
import classNames from "classnames";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { nFormatter } from "../../utils";

interface Props {
  title: string;
  data: GraphDataSingleElement[];
  dataFor: "month" | "day" | "year";
  wrapperClassName?: string;
  onDataForChange(dataFor: "month" | "day" | "year"): void;
}

const GraphCard: React.FC<Props> = ({
  title,
  data,
  dataFor,
  wrapperClassName,
  onDataForChange,
}) => {
  const buttonOptions = ["month", "day", "year"];

  const colors = ["var(--red)", "var(--purple)", "var(--blue)"];

  const CustomDot = (props: any) => {
    const { cx, cy, stroke } = props;

    return (
      <svg width="8" height="8" x={cx - 4} y={cy - 4} fill={stroke}>
        <rect width="8" height="8" />
      </svg>
    );
  };

  return (
    <div className={wrapperClassName}>
      <div className={styles.graphCard}>
        <div className={styles.graphCard__top}>
          <div className={styles.graphCard__title}>{title}</div>
          <div className={styles.graphCard__control}>
            {buttonOptions.map((option) => (
              <button
                key={option}
                className={classNames(
                  styles.graphCard__control__button,
                  dataFor === option && styles.graphCard__control__button_active
                )}
                onClick={() => onDataForChange(option)}
              >
                {option}
              </button>
            ))}
            <IconButton
              className={styles["options-button"]}
              renderIcon={() => <Ellipses />}
            />
          </div>
        </div>
        <div className={styles.graphCard__graph}>
          <ResponsiveContainer
            className={styles["responsive-container"]}
            width="100%"
            height="100%"
          >
            <LineChart
              data={data}
              margin={{ top: 0, left: 0, right: 4, bottom: 0 }}
            >
              <XAxis
                tickLine={false}
                axisLine={false}
                dataKey={"name"}
                height={22}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                domain={[
                  (dataMin: number) => dataMin - dataMin * 0.5,
                  (dataMax: number) => dataMax + dataMax * 0.1,
                ]}
                tickFormatter={(value) => nFormatter(value)}
                width={42}
              />
              <CartesianGrid vertical={false} />
              {Object.keys(data[0])
                .filter((key) => key.match(/^value\d*$/gm))
                .map((key, index) => (
                  <Line
                    key={key}
                    dataKey={key}
                    stroke={colors[index]}
                    dot={<CustomDot />}
                  />
                ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
