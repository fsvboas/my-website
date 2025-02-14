import { classNames } from "@/app/utils/class-names";
import React from "react";

type RowProps = React.HTMLAttributes<HTMLDivElement>;

export const Row: React.FC<RowProps> = React.forwardRef<
  HTMLInputElement,
  RowProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames("flex flex-row", className)}
      {...props}
    >
      {children}
    </div>
  );
});

Row.displayName = "Row";
