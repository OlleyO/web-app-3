import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { forwardRef } from "react";

import styles from "./styles.module.scss";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  renderIcon(): JSX.Element;
  text: string;
  to: string;
  wrapperClassName?: string;
}

const IconLink = forwardRef(
  ({ renderIcon, to, text, wrapperClassName, ...props }: Props, ref: any) => {
    const router = useRouter();

    const isActive = router.pathname === to;

    return (
      <div
        className={classNames(styles["icon-link"], wrapperClassName, {
          [styles["icon-link--active"]]: isActive,
        })}
      >
        {renderIcon()}
        <Link href={to}>
          <a {...props} ref={ref}>
            {text}
          </a>
        </Link>

        <div
          className={classNames(styles["active-marker"], {
            [styles.active]: isActive,
          })}
        />
      </div>
    );
  }
);

IconLink.displayName = "IconLink";

export default IconLink;
