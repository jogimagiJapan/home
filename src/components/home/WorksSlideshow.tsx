"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface WorksSlideshowProps {
  images: string[];
}

export const WorksSlideshow = ({ images }: WorksSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    // Switch images slowly every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <section className="relative w-full mt-4 mb-8">
      {/* 
        This wrapper mimics the dimensions of the Hero component 
        (min-h-[400px] sm:min-h-[500px]) so the images fill the same aspect ratio visually.
      */}
      <div className="relative w-full rounded-2xl overflow-hidden min-h-[400px] sm:min-h-[500px] shadow-md bg-brand-accent/10 isolate">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 pointer-events-none select-none"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 6, ease: "linear" } // slow zoom out effect during the display time
            }}
          >
            <Image
              src={images[currentIndex]}
              alt={`Work ${currentIndex + 1}`}
              fill
              className="object-cover pointer-events-none select-none"
              draggable={false}
              sizes="(max-width: 600px) 100vw, 600px"
              priority={currentIndex === 0} // Load the first image with priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Optional overlay gradient for consistent aesthetic with Hero */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-transparent pointer-events-none" />
        
        {/* Caption/Label to match visual style */}
        <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 pointer-events-none flex flex-col items-start gap-1">
          <span className="font-montserrat text-xs tracking-[0.2em] uppercase text-brand-text/50">
            WORKS
          </span>
        </div>
      </div>
    </section>
  );
};
