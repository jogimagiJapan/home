"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export interface LinkCardProps {
  title: string;
  description: string;
  url: string;
  className?: string;
  index?: number;
}

const organicShapes = [
  "60% 40% 30% 70% / 60% 30% 70% 40%",
  "40% 60% 70% 30% / 40% 40% 60% 60%",
  "50% 50% 20% 80% / 25% 80% 20% 75%",
  "84% 16% 26% 74% / 73% 36% 64% 27%",
];

const gradients = [
  "bg-gradient-to-br from-rose-200/40 to-teal-100/30",
  "bg-gradient-to-tr from-indigo-200/40 to-sky-100/30",
  "bg-gradient-to-bl from-amber-200/30 to-orange-100/30",
  "bg-gradient-to-tl from-emerald-200/40 to-cyan-100/30",
];

const alignments = [
  "self-start ml-4",
  "self-end mr-4 mt-[-2rem]",
  "self-center ml-[-2rem] mt-[-3rem]",
  "self-end mr-6 mt-[-4rem]",
];

/**
 * 有機的な形状のリンクカードコンポーネント (アイコン状)
 * - 1:1の比率に近づけ、中央にテキストを配置
 * - Stagger と浮遊感を強調
 */
export function LinkCard({
  title,
  description,
  url,
  className,
  index = 0,
}: LinkCardProps) {
  const shape = organicShapes[index % organicShapes.length];
  const gradient = gradients[index % gradients.length];
  const alignment = alignments[index % alignments.length];

  return (
    <motion.a
      href={url}
      target={url.startsWith("http") ? "_blank" : "_self"}
      rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative flex flex-col justify-center items-center text-center overflow-hidden shadow-sm backdrop-blur-md transition-all shrink-0 w-52 h-52 sm:w-60 sm:h-60",
        gradient,
        alignment,
        className
      )}
      style={{
        borderRadius: shape,
        padding: "clamp(1rem, 3vw, 2rem)",
      }}
      // Entrance + Floating animation
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        opacity: 1, 
        y: [0, -8, 0],
      }}
      transition={{ 
        opacity: { duration: 0.8, delay: 0.15 * index, ease: "easeOut" },
        y: { 
          duration: 4 + (index % 3), 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.2 * index
        }
      }}
      // Tap / Hover Sink Effect
      whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex flex-col gap-1 z-10 relative px-2">
        <h2 className="font-montserrat text-xl sm:text-2xl font-bold tracking-wide text-brand-text/90 group-hover:text-brand-text transition-colors">
          {title}
        </h2>
        <p className="font-noto-sans-jp text-xs sm:text-sm text-brand-text/60 leading-relaxed group-hover:text-brand-text/80 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Subtle overlay glow on hover */}
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
    </motion.a>
  );
}
