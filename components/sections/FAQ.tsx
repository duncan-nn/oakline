"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FaqCard from "../common/FaqCard";
import Button from "../ui/Button";
import styles from "./FAQ.module.scss";
import { useIsMobile } from "@/hooks/useIsMobile";

const faqs = [
  {
    question: "1 How do I search for properties on OakLine Properties?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    question: "2 What documents do I need to sell my property through OakLine Properties?",
    answer:
      "Find out about the necessary documentation for listing your property with us.",
  },
  {
    question: "3 How can I contact an OakLine Properties agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
  {
    question: "4 How do I search for properties on OakLine Properties?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    question: "5 What documents do I need to sell my property through OakLine Properties?",
    answer:
      "Find out about the necessary documentation for listing your property with us.",
  },
   {
    question: "6 What documents do I need to sell my property through OakLine Properties?",
    answer:
      "Find out about the necessary documentation for listing your property with us.",
  },
];

const ITEMS_PER_PAGE_DESKTOP = 2;
const ITEMS_PER_PAGE_MOBILE = 1;

export default function FAQ() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const isMobile = useIsMobile(); 
  
  const ITEMS_PER_PAGE = isMobile
  ? ITEMS_PER_PAGE_MOBILE
  : ITEMS_PER_PAGE_DESKTOP;

  const totalPages = Math.ceil(faqs.length / ITEMS_PER_PAGE);

  const goNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  

  const visibleFaqs = faqs.slice(
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
            Frequently Asked Questions
          </h2>
          <p className={`${styles.section__subtitle} text-body-01`}>
            Find answers to common questions about our services, listings, and process.
          </p>
        </div>

        <Button href="/" variant="secondary">
          View All FAQ's
        </Button>
      </div>

      {/* Animated Cards */}
      <div className={styles.section__grid}>
        <AnimatePresence mode="wait" custom={direction}>
          {visibleFaqs.map((faq) => {
            const globalIndex = faqs.findIndex(
              (item) => item.question === faq.question
            );

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
                <FaqCard {...faq} />
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