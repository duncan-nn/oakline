"use client";

import Image from "next/image";
import styles from "./PropertyCard.module.scss";
import Button from "../ui/Button";

import { Bed, Bath } from 'lucide-react';
import { Property, PropertyType } from "@/lib/types";
import { useEffect, useState } from "react";
import { formatPrice } from "@/lib/util";

// type PropertyCardProps = {
//   title: string;
//   description: string;
//   image: string;
//   beds: number;
//   baths: number;
//   type: string;
//   price: string;
// };
// const DEFAULT_IMAGE = "/images/properties/default.png";

// function isValidImage(url?: string) {
//   return typeof url === "string" && url.trim() !== "";
// }

type PropertyCardProps = {
  property: Property;
  property_types: PropertyType[];
};



export default function PropertyCard({
  property,
  property_types,
}: PropertyCardProps) {
  // const [bgImage, setBgImage] = useState(DEFAULT_IMAGE);

  // useEffect(() => {
  //   setBgImage(
  //     isValidImage(property.image?.[0])
  //       ? product.image[0]
  //       : DEFAULT_IMAGE
  //   );
  // }, [product.image]);
  const featuredImage =
          property._embedded?.["wp:featuredmedia"]?.[0]
            ?.source_url;

  const propertyTypeId = property.property_types?.[0];

  const propertyType = property_types.find(
    (type) => type.id === propertyTypeId
  );
  
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        {featuredImage && (
        <Image 
        src={featuredImage} 
        alt={property.title.rendered} 
        fill />
        )}
      </div>

      <div className={styles.card__content}>
        <h3 className={`${styles.card__title} heading-03`}>{property.title.rendered}</h3>
        <div className={`${styles.card__description} text-body-01 `} 
        dangerouslySetInnerHTML={{ __html: property.excerpt.rendered }}></div>

        <div className={`${styles.card__meta}`}>
          <span className={styles.card__meta_item}>
            <span className={styles.card__icon_text}>
              {propertyType?.name}
            </span>
          </span>
          <span className={styles.card__meta_item}>
            <Bed size={16} className={styles.card__icon}/><span className={styles.card__icon_text}>{property.acf.bedrooms}-Bedroom</span>
          </span>
          <span className={styles.card__meta_item}>
            <Bath size={16} className={styles.card__icon} /><span className={styles.card__icon_text}>{property.acf.bathrooms}-Bathroom</span>
          </span>
        </div>

        <div className={styles.card__footer}>
          <span className={styles.card__price}>
            {formatPrice(property.acf.price)}
          </span>
          <Button href={`/property/${property.slug}`} >View Property Details</Button>
        </div>
      </div>
    </div>
  );
}