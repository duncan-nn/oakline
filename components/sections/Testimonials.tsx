"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TestimonialCard from "../common/TestimonialCard";
import Button from "../ui/Button";
import styles from "./Testimonials.module.scss";
import { useIsMobile } from "@/hooks/useIsMobile";

const testimonials = [
  {
    title: "Exceptional Service!",
    content:
      "Our experience with OakLine Properties was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    name: "Wade Warren",
    location: "USA, California",
    avatar: "/images/testimonial/user1.png",
  },
  {
    title: "Efficient and Reliable",
    content:
      "OakLine Properties provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    name: "Emelie Thomson",
    location: "USA, Florida",
    avatar: "/images/testimonial/user2.jpg",
  },
  {
    title: "Trusted Advisors",
    content:
      "The OakLine Properties team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    name: "John Mans",
    location: "USA, Nevada",
    avatar: "/images/testimonial/user3.jpg",
  },
  {
    title: "2 Exceptional Service!",
    content:
      "Our experience with OakLine Properties was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    name: "Wade Warren",
    location: "USA, California",
    avatar: "/images/testimonial/user1.png",
  },
  {
    title: "2 Efficient and Reliable",
    content:
      "OakLine Properties provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    name: "Emelie Thomson",
    location: "USA, Florida",
    avatar: "/images/testimonial/user2.jpg",
  },
  {
    title: "Trusted Advisors",
    content:
      "The OakLine Properties team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    name: "John Mans",
    location: "USA, Nevada",
    avatar: "/images/testimonial/user3.jpg",
  },
];

const ITEMS_PER_PAGE_DESKTOP = 2;
const ITEMS_PER_PAGE_MOBILE = 1;

export default function Testimonials() {
    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  
    const isMobile = useIsMobile(); 
    
    const ITEMS_PER_PAGE = isMobile
    ? ITEMS_PER_PAGE_MOBILE
    : ITEMS_PER_PAGE_DESKTOP;
  
    const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  
    const goNext = () => {
      setDirection(1);
      setCurrentPage((prev) => (prev + 1) % totalPages);
    };
  
    const goPrev = () => {
      setDirection(-1);
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    useEffect(() => {
      setCurrentPage((prev) => Math.min(prev, totalPages - 1));
    }, [ITEMS_PER_PAGE, totalPages]);
  
    const startIndex = currentPage * ITEMS_PER_PAGE;
    
  
    const visibleTestimonials = testimonials.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );
  
    const variants = {
      enter: (dir: number) => ({
        x: dir > 0 ? 40 : -40,
        opacity: 0,
        scale: 0.98,
        filter: "blur(4px)",
      }),
      center: {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      },
      exit: (dir: number) => ({
        x: dir > 0 ? -40 : 40,
        opacity: 0,
        scale: 0.98,
        filter: "blur(4px)",
      }),
    };
  
  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={`${styles.section__header} header-01`}>
        <div>
          <h2 className={`${styles.section__title} heading-02`}>
            What Our Clients Say
          </h2>
          <p className={`${styles.section__subtitle} text-body-01`}>
            Read the success stories and heartfelt testimonials from our valued clients.
          </p>
        </div>

        <Button href="/" variant="secondary">View All Testimonials</Button>
      </div>

      {/* Cards */}
      {/* <div className={styles.section__grid}>
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </div> */}

      {/* Animated Cards */}
      <div className={styles.section__grid}>
        <AnimatePresence mode="wait" custom={direction}>
          {visibleTestimonials.map((tes, index) => {
            const globalIndex = startIndex + index;

            return (
              <motion.div
                key={globalIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <TestimonialCard {...tes} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className={styles.section__footer}>
        <span>
          {String(currentPage + 1).padStart(2, "0")} of{" "}
          {String(totalPages).padStart(2, "0")}
        </span>

        <div className={styles.section__nav}>
          <button onClick={goPrev} aria-label="Previous FAQ">
            ←
          </button>

          <button onClick={goNext} aria-label="Next FAQ">
            →
          </button>
        </div>
      </div>
    </section>
  );
}