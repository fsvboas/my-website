import { classNames } from "@/app/utils/class-names";
import React from "react";

type FlexProps = React.HTMLAttributes<HTMLDivElement>;

export const Flex: React.FC<FlexProps> = React.forwardRef<
  HTMLInputElement,
  FlexProps
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={classNames("flex", className)} {...props}>
      {children}
    </div>
  );
});

Flex.displayName = "Flex";
