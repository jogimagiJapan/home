import Image from "next/image";
import { siteConfig } from "@/constants/siteConfig";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/utils/cn";

export function BrandLogos({
  className,
  logoClassName,
  tsumuguneClassName,
}: {
  className?: string;
  logoClassName?: string;
  tsumuguneClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 sm:gap-4", className)}>
      <Logo className={logoClassName} />
      <a
        href={siteConfig.links.tsumuguneInstagram.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={siteConfig.links.tsumuguneInstagram.title}
        className={cn(
          "relative block h-7 w-7 shrink-0 opacity-90 transition-opacity hover:opacity-100 sm:h-8 sm:w-8",
          tsumuguneClassName
        )}
      >
        <Image
          src={siteConfig.logoTsumugune}
          alt="tsumugune"
          fill
          className="object-contain"
          sizes="32px"
        />
      </a>
    </div>
  );
}
