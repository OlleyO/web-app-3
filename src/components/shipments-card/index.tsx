import { ShipmentsData } from "../../core/types";

import Map from "../../../public/blank-gray-usa.svg";

import styles from "./styles.module.scss";
import Change from "../change";

interface Props {
  data: ShipmentsData;
  wrapperClassName?: string;
}

const ShipmentsCard: React.FC<Props> = ({ data, wrapperClassName }) => {
  return (
    <div className={wrapperClassName}>
      <div className={styles["shipments-card"]}>
        <div className={styles["shipments-card__title"]}>Shipments</div>
        <Map className={styles.map} />
        <div className={styles["shipments-card__bottom"]}>
          <div className={styles.total}>${data.total}</div>
          <Change rise={data.rise} fall={data.fall} />
        </div>
      </div>
    </div>
  );
};

export default ShipmentsCard;
