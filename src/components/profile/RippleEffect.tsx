"use client";

import { motion } from "framer-motion";

/**
 * 水面に水滴が落ちたような波紋アニメーション
 */
export function RippleEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{
            scale: [0.8, 2.5],
            opacity: [0, 0.4, 0],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 3,
            ease: "easeOut",
            delay: i * 0.6,
            repeat: Infinity,
            repeatDelay: 2
          }}
          className="absolute w-[200px] h-[200px] border border-brand-accent/20 rounded-full"
        />
      ))}
    </div>
  );
}
