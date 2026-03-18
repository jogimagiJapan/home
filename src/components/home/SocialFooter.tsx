"use client";

import { Instagram, User, Mail } from "lucide-react";
import { siteConfig } from "@/constants/siteConfig";
import Link from "next/link";

const socialLinks = [
  {
    icon: Instagram,
    url: siteConfig.socials.instagram,
    label: "Instagram",
    isExternal: true,
  },
  {
    icon: User,
    url: siteConfig.socials.profile,
    label: "Profile",
    isExternal: siteConfig.socials.profile.startsWith("http"),
  },
  {
    icon: Mail,
    url: siteConfig.socials.email,
    label: "Email",
    isExternal: true,
  },
];

/**
 * フッターコンポーネント
 * SNSアイコンへのリンクとコピーライトを表示
 */
export function SocialFooter() {
  return (
    <footer className="mt-auto flex w-full flex-col items-center gap-6 pt-8 pb-4">
      <div className="flex items-center space-x-6">
        {socialLinks.map(({ icon: Icon, url, label, isExternal }, idx) => {
          const content = <Icon className="h-5 w-5 stroke-[1.5]" />;
          const className = "flex h-12 w-12 items-center justify-center rounded-full border border-brand-accent/20 bg-white shadow-sm transition-all hover:scale-110 hover:border-brand-accent hover:text-brand-accent";

          if (isExternal) {
            return (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={className}
              >
                {content}
              </a>
            );
          }

          return (
            <Link
              key={idx}
              href={url}
              aria-label={label}
              className={className}
            >
              {content}
            </Link>
          );
        })}
      </div>
      <p className="font-montserrat text-xs tracking-widest text-brand-accent/70">
        © {new Date().getFullYear()} jõgi mägi
      </p>
    </footer>
  );
}

