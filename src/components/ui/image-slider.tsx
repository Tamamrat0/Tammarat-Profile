"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = ["/images/slide1.jpeg", "/images/slide2.jpeg"];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
};

export default function ImageSlider() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const imageIndex = ((index % images.length) + images.length) % images.length;

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(([i]) => [i + 1, 1]);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection: number) => {
    setIndex(([i]) => [i + newDirection, newDirection]);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-xl">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={imageIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          onDragEnd={(_, { offset }) => {
            if (offset.x < -50) paginate(1);
            if (offset.x > 50) paginate(-1);
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[imageIndex]}
            alt={`slide-${imageIndex}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-2 ">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex([i, i > imageIndex ? 1 : -1])}
            className={`h-2  rounded-full transition duration-300
              ${i === imageIndex ? "bg-white w-5" : "bg-white/50 w-2"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
