import cx from "clsx";
import type { ComponentPropsWithRef, ElementType } from "react";
import {
  createContext,
  forwardRef,
  Fragment,
  useContext,
  useMemo,
} from "react";

const LevelContext = createContext<HeadingLevel>(
  1
);



function useHeadingLevelContext() {
  return useContext(LevelContext);
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ as: asProp, children, ...props }, ref) => {
    const Wrapper = asProp || Fragment;
    const level = useHeadingLevelContext();
    const ctx = useMemo(() => Math.min(level + 1, 6) as HeadingLevel, [level],
    );

    return (
      <Wrapper {...(asProp ? ({ ref, ...props } as any) : null)}>
        <LevelContext.Provider value={ctx}>{children}</LevelContext.Provider>
      </Wrapper>
    );
  },
);
Section.displayName = "Section";

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: asProp, level: levelProp, ...props }, ref) => {
    const level = useHeadingLevelContext();
    const Comp: ElementType = asProp
      ? asProp === "title"
        ? "h1"
        : asProp
      : (`h${level}` as "h2");

    return (
      <Comp
        ref={ref}
        {...props}
        className={cx(props.className, {
          [`h${levelProp}`]: levelProp,
        })}
      />
    );
  },
);
Heading.displayName = "Heading";

interface HeadingProps extends ComponentPropsWithRef<"h1"> {
  level?: HeadingLevel;
  as?: "title" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

interface SectionProps extends ComponentPropsWithRef<"section"> {
  as?: "section" | "div";
}

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type { SectionProps, HeadingProps };
export { Section, Heading, useHeadingLevelContext };
