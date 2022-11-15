import styles from "./styles.module.scss";

import Search from "../../../public/search.svg";
import Edit from "../../../public/edit.svg";
import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  type: "round" | "plain";
  wrapperClassName?: string;
}

const SearchInput: React.FC<Props> = ({
  type,
  className,
  wrapperClassName,
  ...props
}) => (
  <div
    className={classNames(
      styles["search-input"],
      styles[type],
      wrapperClassName
    )}
  >
    <input
      type="text"
      className={classNames(
        className,
        styles["search-input__input"],
        styles[type]
      )}
      {...props}
    />
    <Search className={styles["search-input__icon"]} />
    <Edit className={styles["search-input__icon-edit"]} />
  </div>
);

export default SearchInput;
