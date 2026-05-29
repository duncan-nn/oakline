"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropertyCard from "../common/PropertyCard";
import Button from "../ui/Button";
import styles from "./FeaturedProperties.module.scss";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Property, PropertyType } from "@/lib/types";
// const properties = [
//   {
//     title: "Seaside Serenity Villa",
//     description:
//       "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
//     image: "/images/featured/villa.jpg",
//     beds: 4,
//     baths: 3,
//     type: "Villa",
//     price: "$550,000",
//   },
//   {
//     title: "Metropolitan Haven",
//     description:
//       "A chic and fully-furnished 2-bedroom apartment with panoramic city views.",
//     image: "/images/featured/apartment.jpg",
//     beds: 2,
//     baths: 2,
//     type: "Villa",
//     price: "$550,000",
//   },
//   {
//     title: "Rustic Retreat Cottage",
//     description:
//       "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.",
//     image: "/images/featured/building.jpg",
//     beds: 3,
//     baths: 3,
//     type: "Villa",
//     price: "$550,000",
//   },
//   {
//     title: "2 Seaside Serenity Villa",
//     description:
//       "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
//     image: "/images/featured/villa.jpg",
//     beds: 4,
//     baths: 3,
//     type: "Villa",
//     price: "$550,000",
//   },
// ];
type PropertyListProps = {
  properties: Property[];
  property_types: PropertyType[];
};

const ITEMS_PER_PAGE_DESKTOP = 2;
const ITEMS_PER_PAGE_MOBILE = 1;

export default function FeaturedProperties({ 
  properties,
  property_types,
}: PropertyListProps
) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const isMobile = useIsMobile(); 

  const ITEMS_PER_PAGE = isMobile
  ? ITEMS_PER_PAGE_MOBILE
  : ITEMS_PER_PAGE_DESKTOP;

  const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);

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


  const visibleProperties = properties.slice(
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
    <section className={`${styles.section}`}>
      <div className={`${styles.section__header} header-01`}>
        <div>
          <h2 className={`${styles.section__title} heading-02`}>Featured Properties</h2>
          <p className={`${styles.section__subtitle} text-body-01`}>
            Explore our handpicked selection of featured properties. Each listing offers a glimpse 
            into exceptional homes and investments available through OakLine Properties.
          </p>
        </div>

        <Button href="/propertylist" variant="secondary">View All Properties</Button>
      </div>

      {/* <div className={styles.section__grid}>
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div> */}
      {/* Animated Cards */}
      <div className={styles.section__grid}>
        <AnimatePresence mode="wait" custom={direction}>
          {visibleProperties.map((pro, index) => {
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
                <PropertyCard 
                key={pro.id}
                property_types={property_types} 
                property={pro} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

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