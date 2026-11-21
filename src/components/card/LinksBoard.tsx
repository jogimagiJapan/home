"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Copy, ExternalLink } from "lucide-react";
import type { LinksPageConfig } from "@/constants/linksPage";
import { cn } from "@/utils/cn";

type LinksBoardProps = {
  page: LinksPageConfig;
};

export function LinksBoard({ page }: LinksBoardProps) {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  async function copyUrl(url: string) {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      window.setTimeout(() => {
        setCopiedUrl((current) => (current === url ? null : current));
      }, 1600);
    } catch {
      // Clipboard may be unavailable; ignore quietly.
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-[26rem] flex-col gap-8">
      <header className="flex flex-col items-center gap-3 text-center">
        {page.logo ? (
          <div className="relative h-16 w-16 overflow-hidden">
            <Image
              src={page.logo}
              alt=""
              fill
              priority
              sizes="64px"
              className="object-contain"
            />
          </div>
        ) : null}
        <div>
          {page.subtitle ? (
            <p className="font-sans text-[0.7rem] tracking-[0.28em] text-[#6a6a6a] uppercase">
              {page.subtitle}
            </p>
          ) : null}
          <h1 className="mt-2 text-2xl font-medium tracking-[0.08em]">
            {page.title}
          </h1>
        </div>
      </header>

      <ul className="flex flex-col gap-3">
        {page.items.map((item) => {
          const copied = copiedUrl === item.url;

          return (
            <li
              key={item.url}
              className="border border-[#bdbdbd] bg-[#cfcfcf]/70 px-4 py-4"
            >
              <div className="min-w-0">
                <p className="font-sans text-[0.72rem] tracking-[0.18em] text-[#5a5a5a] uppercase">
                  {item.label}
                </p>
                <p className="mt-1 text-[0.95rem] tracking-[0.04em] text-[#3a3a3a]">
                  {item.description}
                </p>
                <p className="mt-2 truncate font-mono text-[0.65rem] tracking-[0.02em] text-[#6a6a6a]">
                  {item.url}
                </p>
              </div>

              <div className="mt-4 flex gap-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 bg-[#4a4a4a] px-3 py-2.5 text-[0.75rem] tracking-[0.12em] text-white transition-opacity hover:opacity-85"
                >
                  <ExternalLink className="size-3.5" aria-hidden />
                  {item.openLabel}
                </a>
                <button
                  type="button"
                  onClick={() => copyUrl(item.url)}
                  aria-label={`${item.label}のURLをコピー`}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 border border-[#4a4a4a] px-3 py-2.5 text-[0.75rem] tracking-[0.12em] text-[#4a4a4a] transition-colors",
                    copied && "bg-[#4a4a4a] text-white",
                  )}
                >
                  {copied ? (
                    <Check className="size-3.5" aria-hidden />
                  ) : (
                    <Copy className="size-3.5" aria-hidden />
                  )}
                  {copied ? "コピー済" : "コピー"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
