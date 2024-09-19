import { cn } from "@/lib/utils";
import React, { Children } from "react";

interface Props {
  children: React.ReactNode;
  ClassName?: string;
}

const wrapper = ({ children, ClassName }: Props) => {
  return (
    <div
      className={cn(
        " h-full w-full mx-auto max-w-screen-xl px-4 md:px-8",
        ClassName
      )}
    >
      {children}
    </div>
  );
};

export default wrapper;
