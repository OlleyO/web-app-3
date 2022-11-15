import classNames from "classnames";

import styles from "./styles.module.scss";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  renderIcon(): JSX.Element;
}

const IconButton = ({ renderIcon, className, ...props }: Props) => (
  <button className={classNames(styles["icon-button"], className)} {...props}>
    {renderIcon()}
  </button>
);

export default IconButton;
