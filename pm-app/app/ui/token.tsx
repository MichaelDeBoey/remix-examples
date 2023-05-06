import cx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

import { IconX } from "~/ui/icons";

export function Token({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span className={cx(className, "ui--token")} {...props}>
      {children}
    </span>
  );
}

export function TokenDismissButton({
  children,
  className,
  type = "button",
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      aria-label="Dismiss"
      className={cx(className, "ui--token__dismiss-button")}
      type={type}
      {...props}
    >
      <IconX className={cx(className, "ui--token__dismiss-icon")} />
    </button>
  );
}
