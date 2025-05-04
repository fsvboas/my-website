import { classNames } from "@/src/app/[locale]/utils/class-names";
import React from "react";

type ColumnProps = React.HTMLAttributes<HTMLDivElement>;

export const Column: React.FC<ColumnProps> = React.forwardRef<
  HTMLInputElement,
  ColumnProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames("flex flex-col", className)}
      {...props}
    >
      {children}
    </div>
  );
});

Column.displayName = "Column";
