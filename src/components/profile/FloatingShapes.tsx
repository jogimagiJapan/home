"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * 送られてくる「塗りつぶしなし（アウトラインのみ）」の図形パーツ
 * 背景でゆっくりと浮遊・回転し、スクロールに連動した視差効果（パララックス）を加える
 */
export function FloatingShapes() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // スクロールに応じたパララックスオフセット
  const yOffset1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yOffset2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yOffset3 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const shapes = [
    { id: 1, size: 160, x: "5%", y: "10%", duration: 25, delay: 0, border: "border-2", parallax: yOffset1 },
    { id: 2, size: 100, x: "80%", y: "35%", duration: 30, delay: 2, border: "border-[3px]", parallax: yOffset2 },
    { id: 3, size: 280, x: "10%", y: "65%", duration: 45, delay: 5, border: "border-2", parallax: yOffset3 },
    { id: 4, size: 80, x: "75%", y: "80%", duration: 20, delay: 1, border: "border-4", parallax: yOffset1 },
    { id: 5, size: 180, x: "60%", y: "15%", duration: 35, delay: 3, border: "border-[2px]", parallax: yOffset2 },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute border ${shape.border} border-brand-accent/40 rounded-full`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            y: shape.parallax,
          }}
          animate={{
            rotate: [0, 360],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
            delay: shape.delay,
          }}
        />
      ))}
      
      {/* 矩形パーツ */}
      <motion.div
        className="absolute w-56 h-56 border-4 border-brand-accent/30 rounded-[60px] left-[65%] top-[10%]"
        style={{ y: yOffset3 }}
        animate={{
          rotate: [45, 405],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 大きな装飾パーツ */}
      <motion.div
        className="absolute w-96 h-96 border-[1px] border-brand-accent/10 rounded-full left-[50%] top-[70%]"
        style={{ y: yOffset1 }}
        animate={{
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
