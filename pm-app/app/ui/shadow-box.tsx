import cx from "clsx";
import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";

const ShadowBox = forwardRef<HTMLDivElement, ShadowBoxProps>((props, ref) => {
  const { pad, ...domProps } = props;
  return (
    <div
      ref={ref}
      {...domProps}
      className={cx(props.className, "ui--shadow-box", {
        [`ui--shadow-box--pad-0${pad}`]: pad != null,
      })}
    />
  );
},
);
ShadowBox.displayName = "ShadowBox";

interface ShadowBoxProps extends ComponentPropsWithRef<"div"> {
  pad?: 1 | 2 | 3;
}

export type { ShadowBoxProps };
export { ShadowBox };
