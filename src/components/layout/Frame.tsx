import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface FrameProps {
  children: ReactNode;
  className?: string;
}

export function Frame({ children, className }: FrameProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1080px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}
