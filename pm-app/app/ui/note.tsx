import cx from "clsx";
import type { PropsWithChildren } from "react";

export function Note({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return <div className={cx(className, "ui--note")}>{children}</div>;
}
