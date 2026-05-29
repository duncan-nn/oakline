import { Property, PropertyType } from '@/lib/types';
import FeatureList from '../features/FeatureList';
import PropertyStats from '../features/PropertyStats';
import styles from './PropertyDetails.module.scss';
import { Zap } from 'lucide-react';

type PropertyDetailProps = {
  property: Property;
  property_types: PropertyType[];
};

export default function PropertyDetails({
  property,
  property_types,
}: PropertyDetailProps) {

  const item_data = property.meta_box.amenities.map((amenity) => ({
    text: amenity,
    icon: <Zap size={16} />,
  }));

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.card}>
          <h2 className={`${styles.card__title} heading-03`}>Description</h2>

          <div className={`${styles.card__text} text-body-01`}
          dangerouslySetInnerHTML={{ __html: property.content.rendered }}>
          </div>

          <PropertyStats
            stats={[
              { label: 'Bedrooms', value: String(property.acf.bedrooms) },
              { label: 'Bathrooms', value: String(property.acf.bathrooms)  },
              { label: 'Area', value: property.acf.size },
            ]}
          />
        </div>

        {/* RIGHT */}
        <div className={styles.card}>
          <h2 className={`${styles.card__title} heading-03`}>
            Key Features and Amenities
          </h2>

          <FeatureList
            items={item_data}
          />
        </div>

      </div>
    </section>
  );
}