"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/constants/siteConfig";

/**
 * ヒーローセクションコンポーネント
 * - 背景のループ動画
 * - メインのステートメント（Montserrat / Playfair Display）
 * - サブステートメント（Noto Sans JP）
 */
export function Hero() {
  return (
    <section className="relative w-full rounded-2xl overflow-hidden aspect-[9/16] sm:aspect-video flex flex-col justify-end p-6 md:p-8 isolate shadow-md">
      {/* Background Video (with placeholder support) */}
      <div className="absolute inset-0 -z-10 bg-brand-accent/20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 mix-blend-multiply"
        >
          <source src={siteConfig.videoPlaceholder} type="video/mp4" />
        </video>
        {/* レイヤーオーバーレイで文字の視認性を高める */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-brand-bg/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-4 text-brand-text"
      >
        <span className="font-montserrat text-xs tracking-[0.2em] uppercase text-brand-accent">
          {siteConfig.name}
        </span>
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          {siteConfig.statements.main}
        </h1>
        <p className="font-noto-sans-jp text-sm sm:text-base leading-relaxed text-brand-text/80 whitespace-pre-wrap max-w-[90%] font-medium">
          {siteConfig.statements.sub}
        </p>
      </motion.div>
    </section>
  );
}
