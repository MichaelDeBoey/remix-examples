import cx from "clsx";
import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";

const MaxContainer = forwardRef<HTMLDivElement, MaxContainerProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        className={cx(className, "ui--max-container")}
        {...props}
      >
        {children}
      </div>
    );
  },
);
MaxContainer.displayName = "MaxContainer";

interface MaxContainerOwnProps {}

interface MaxContainerProps
  extends MaxContainerOwnProps,
    Omit<ComponentPropsWithRef<"div">, keyof MaxContainerOwnProps> {}

export type { MaxContainerProps };
export { MaxContainer };
