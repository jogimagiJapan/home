"use client";

import { useState } from "react";
import Image from "next/image";
import type { BusinessCardPage } from "@/constants/cards";
import { cn } from "@/utils/cn";

type BusinessCardProps = {
  card: BusinessCardPage;
};

export function BusinessCard({ card }: BusinessCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex w-full max-w-[22rem] flex-col items-center gap-5">
      <div
        className="relative w-full [perspective:1200px]"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped((v) => !v);
          }
        }}
      >
        <div
          role="button"
          tabIndex={0}
          aria-label={flipped ? "名刺の表を表示" : "名刺の裏を表示"}
          aria-pressed={flipped}
          onClick={() => setFlipped((v) => !v)}
          className={cn(
            "relative aspect-[609/1024] w-full cursor-pointer transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4a4a4a]",
            flipped && "[transform:rotateY(180deg)]",
          )}
        >
          {/* Front */}
          <div className="absolute inset-0 overflow-hidden [backface-visibility:hidden]">
            <Image
              src={card.frontImage}
              alt="名刺 表 — jõgi mägi / 河岡 秀海"
              fill
              priority
              sizes="(max-width: 480px) 90vw, 352px"
              className="pointer-events-none object-contain"
              draggable={false}
            />
          </div>

          {/* Back */}
          <div className="absolute inset-0 overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <Image
              src={card.backImage}
              alt="名刺 裏 — 音の刺繍 / つむぐね"
              fill
              sizes="(max-width: 480px) 90vw, 352px"
              className="pointer-events-none object-contain"
              draggable={false}
            />
          </div>
        </div>

        {/* Hotspots sit above the flip surface so links stay clickable */}
        {!flipped ? (
          <a
            href={card.links.email}
            aria-label="メールを送る"
            className="absolute inset-x-[12%] bottom-[7%] z-10 h-[9%] rounded-sm"
          />
        ) : (
          <>
            <a
              href={card.links.home}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ホームページを開く"
              className="absolute inset-x-[8%] top-[5%] z-10 h-[18%] rounded-sm"
            />
            <a
              href={card.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagramを開く"
              className="absolute inset-x-[8%] bottom-[5%] z-10 h-[16%] rounded-sm"
            />
          </>
        )}
      </div>

      <p className="text-center text-[0.7rem] tracking-[0.18em] text-[#6a6a6a]">
        {flipped ? "タップで表に戻す" : "タップで裏を見る"}
      </p>

      <nav
        aria-label="連絡先"
        className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.75rem] tracking-[0.12em] text-[#4a4a4a]"
      >
        <a
          href={card.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 transition-opacity hover:opacity-60 hover:underline"
        >
          Instagram
        </a>
        <a
          href={card.links.email}
          className="underline-offset-4 transition-opacity hover:opacity-60 hover:underline"
        >
          Email
        </a>
        <a
          href={card.links.home}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 transition-opacity hover:opacity-60 hover:underline"
        >
          Home
        </a>
      </nav>
    </div>
  );
}
