"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ProfileHeroProps {
  images: readonly string[];
}

/**
 * プロフィールページのヘッダー画像セクション（スライドショー機能付き）
 */
export function ProfileHero({ images }: ProfileHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5秒ごとに切り替え

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] shadow-lg isolate bg-brand-bg">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 6, ease: "linear" } // slow zoom out effect
          }}
          className="absolute inset-0"
        >
          {images[currentIndex] ? (
            <Image
              src={images[currentIndex]}
              alt={`Profile Image ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority
              unoptimized={images[currentIndex].endsWith('.webp')} // webpの場合は最適化をOFFにすることもあるが基本はNextImageに任せる
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-brand-accent/20 to-brand-bg flex items-center justify-center">
              <span className="text-brand-text/30 font-montserrat tracking-widest uppercase">
                Image {currentIndex + 1} Missing
              </span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* 映像と同様のオーバーレイで統一感を持たせる */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/40 to-transparent pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-8 left-8 pointer-events-none"
      >
        <div className="w-12 h-[1px] bg-brand-accent/40 mb-4" />
        <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-text/70">
          About
        </h1>
      </motion.div>
    </section>
  );
}
