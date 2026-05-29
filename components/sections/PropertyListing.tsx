import { Property, PropertyType } from "@/lib/types";
import PropertyCard from "../common/PropertyCard";
import Button from "../ui/Button";
import styles from "./PropertyListing.module.scss";

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
//     {
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
// ];
type PropertyListProps = {
  properties: Property[];
  property_types: PropertyType[];
};

export default function PropertyListing({ 
  properties,
  property_types,
}: PropertyListProps
) {
  

  return (
    <section className={`${styles.section}`}>

      <div className={styles.section__grid}>
        {properties.map((property) => (
          <PropertyCard 
          key={property.id}
          property_types={property_types} 
          property={property} />
        ))}
      </div>
    </section>
  );
}