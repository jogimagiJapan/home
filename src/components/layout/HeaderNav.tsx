"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/constants/siteConfig";
import { cn } from "@/utils/cn";

const items = [
  { href: siteConfig.links.process.url, label: siteConfig.links.process.title },
  { href: siteConfig.links.concept.url, label: siteConfig.links.concept.title },
  { href: siteConfig.links.profile.url, label: siteConfig.links.profile.title },
  {
    href: siteConfig.links.order.url,
    label: "Order",
    external: true,
  },
] as const;

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7">
      {items.map((item) => {
        const active = "external" in item ? false : pathname === item.href;
        const className = cn(
          "font-sans text-[11px] tracking-[0.16em] transition-colors",
          active ? "text-ink" : "text-muted hover:text-ink"
        );

        if ("external" in item) {
          return (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {item.label}
            </a>
          );
        }

        return (
          <Link key={item.href} href={item.href} className={className}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
