import { siteConfig } from "@/constants/siteConfig";
import { Frame } from "@/components/layout/Frame";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer className="border-t border-line py-12 sm:py-16">
      <Frame className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-3">
          <Logo className="h-6 w-[128px] sm:h-7 sm:w-[148px]" />
          <p className="font-sans text-[12px] tracking-[0.14em] text-muted">
            {siteConfig.name}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.links.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[11px] tracking-[0.16em] text-muted transition-colors hover:text-ink"
          >
            Instagram
          </a>
          <a
            href={siteConfig.links.email.url}
            className="font-sans text-[11px] tracking-[0.16em] text-muted transition-colors hover:text-ink"
          >
            Email
          </a>
        </div>
      </Frame>
    </footer>
  );
}
