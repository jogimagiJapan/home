import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";
import { cn } from "@/utils/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("relative block h-7 w-[148px] sm:h-8 sm:w-[168px]", className)}
    >
      <Image
        src={siteConfig.logo}
        alt={`${siteConfig.artist} ${siteConfig.artistKana}`}
        fill
        priority
        className="object-contain object-left"
      />
    </Link>
  );
}
