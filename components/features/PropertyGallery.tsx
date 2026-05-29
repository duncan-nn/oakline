'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './PropertyGallery.module.scss';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  images: string[];
};

export default function PropertyGallery({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 1.05,
      filter: 'blur(6px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 1.05,
      filter: 'blur(6px)',
    }),
  };

  return (
    <div className={styles.gallery}>
      
      {/* THUMBNAILS */}
      <div className={styles.gallery__thumbs}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${styles.gallery__thumb} ${
              index === activeIndex ? styles['gallery__thumb--active'] : ''
            }`}
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1);
              setActiveIndex(index);
            }}
          >
            <Image src={img} alt="property" fill />
          </div>
        ))}
      </div>

      {/* MAIN IMAGES */}
      <div className={styles.gallery__main}>
        
        {/* MAIN IMAGE */}
        <div className={styles.gallery__image}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              className={styles.gallery__imageInner}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src={images[activeIndex]}
                alt="property main"
                fill
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SECONDARY IMAGE */}
        <div className={styles.gallery__image}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`secondary-${activeIndex}`}
              className={styles.gallery__imageInner}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.05,
              }}
            >
              <Image
                src={images[(activeIndex + 1) % images.length]}
                alt="property secondary"
                fill
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* CONTROLS */}
      <div className={styles.gallery__controls}>
        <button onClick={handlePrev}>
          <ArrowLeft size={16} />
        </button>

        <div className={styles.gallery__dots}>
          {images.map((_, i) => (
            <span
              key={i}
              className={`${styles.gallery__dot} ${
                i === activeIndex ? styles['gallery__dot--active'] : ''
              }`}
            />
          ))}
        </div>

        <button onClick={handleNext}>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}