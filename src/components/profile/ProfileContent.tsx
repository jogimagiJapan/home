"use client";

import { Container } from "@/components/layout/Container";
import { ProfileHero } from "@/components/profile/ProfileHero";
import { FloatingShapes } from "@/components/profile/FloatingShapes";
import { SocialFooter } from "@/components/home/SocialFooter";
import { siteConfig } from "@/constants/siteConfig";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion, Variants } from "framer-motion";

import { RippleEffect } from "@/components/profile/RippleEffect";

interface ProfileContentProps {
  profileImages: string[];
}

/**
 * プロフィールページの本体（Webマガジン風の高品位UI）
 */
export function ProfileContent({ profileImages }: ProfileContentProps) {
  const { profile } = siteConfig;

  // アニメーション設定：スクロールに合わせた優雅な出現
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.215, 0.61, 0.355, 1.0], // cubic-out
      }
    }
  };

  return (
    <Container className="relative overflow-visible pb-32">
      {/* 背景装飾：視認性を高めたパララックス付与 */}
      <FloatingShapes />

      {/* ナビゲーション */}
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-8 left-8 z-50 mix-blend-difference hidden md:block"
      >
        <Link
          href="/"
          className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white hover:opacity-60 transition-opacity"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
      </motion.nav>

      {/* モバイル用ナビゲーション */}
      <div className="flex md:hidden justify-start mb-8">
        <Link href="/" className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-accent">
          <ArrowLeft size={14} /> Back
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <ProfileHero images={profileImages} />
      </motion.div>

      <motion.main
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-40 py-24 md:py-40"
      >
        {/* Intro Section: Asymmetric Layout */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-8 md:col-start-1">
            <motion.div variants={itemVariants} className="flex flex-col gap-6 relative group">
              <RippleEffect />
              <span className="font-montserrat text-xs tracking-[0.5em] uppercase text-brand-accent/60">
                {profile.title}
              </span>
              <h2 className="font-noto-sans-jp text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] text-brand-text [text-wrap:balance] relative z-10 whitespace-pre-wrap">
                {profile.subtitle.split("").map((char, i) => (
                  char === "\n" ? <br key={i} /> : <span key={i} className="inline-block">{char}</span>
                ))}
              </h2>
            </motion.div>
          </div>

          <div className="md:col-span-5 md:col-start-8 mt-4 md:mt-20">
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-brand-accent/40" />
                <span className="font-playfair text-xl font-bold text-brand-text/60">
                  {profile.director.name}
                </span>
              </div>
              <p className="font-noto-sans-jp text-base sm:text-lg leading-relaxed text-brand-text/80 font-medium whitespace-pre-wrap">
                {profile.director.bio}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Dynamic Sections with alternating patterns */}
        {profile.sections.map((section, sIdx) => {
          const isEven = sIdx % 2 === 0;
          return (
            <section
              key={sIdx}
              className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start"
            >
              {/* Title Column */}
              <div className={isEven ? "md:col-span-11 md:col-start-2" : "md:col-span-11 md:col-start-1"}>
                <motion.div
                  variants={itemVariants}
                  className="relative group mb-12"
                >
                  <RippleEffect />
                  <h3 className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-brand-text/10 transition-colors group-hover:text-brand-text/20 relative z-10 whitespace-pre-wrap">
                    {section.title}
                  </h3>
                  <div className="absolute -bottom-4 left-0 w-32 h-[1px] bg-brand-accent/20" />
                </motion.div>
              </div>

              {/* Content Column: Heavily offset */}
              <div className={isEven ? "md:col-span-7 md:col-start-6" : "md:col-span-7 md:col-start-2"}>
                <div className="flex flex-col gap-12">
                  {section.content.map((para, pIdx) => (
                    <motion.p
                      key={pIdx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={itemVariants}
                      className="font-noto-sans-jp text-lg sm:text-xl leading-[1.9] text-brand-text/80 font-medium [text-wrap:pretty]"
                    >
                      {/* 単語・句単位での禁則保護：inline-blockを多用せずともtext-wrap:pretty/balanceで制御しつつ
                          特に重要な箇所への適用を想定（今回は文全体をバランス良く）*/}
                      {para}
                    </motion.p>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Closing Quote: Huge & Centered with Parallax decoration */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="relative py-40 border-t border-brand-accent/5 flex justify-center items-center"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
            <div className="w-[300px] h-[300px] border-[10px] border-brand-accent/5 rounded-full" />
          </div>
          <p className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold text-center text-brand-accent/20 leading-tight md:max-w-4xl [text-wrap:balance]">
            "Translating the invisible into the tactile."
          </p>
        </motion.section>
      </motion.main>

      <SocialFooter />
    </Container>
  );
}
