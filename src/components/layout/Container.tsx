import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * 最大幅 600px の1カラム制約とPC時のセンタリングを担うレイアウトコンポーネント
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[600px] md:max-w-[1400px] min-h-screen",
        "bg-brand-bg px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-20",
        "flex flex-col gap-8 md:gap-16 relative",
        className
      )}
    >
      {children}
    </div>
  );
}
