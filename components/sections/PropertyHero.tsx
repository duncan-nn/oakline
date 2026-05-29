import styles from './PropertyHero.module.scss';
import { MapPin } from 'lucide-react';

type Props = {
  title: string;
  location: string;
  price: string;
};

export default function PropertyHero({ title, location, price }: Props) {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__left}>
        <h1 className={`${styles.hero__title} heading-02`}>{title}</h1>
        <div className={styles.hero__location_wrap}>
          <MapPin size={16} className={styles.hero__icon}/>
          <span className={styles.hero__location}>{location}</span>
        </div>
      </div>

      <div className={styles.hero__right}>
        <span className={styles.hero__priceLabel}>Price</span>
        <h3 className={styles.hero__price}>{price}</h3>
      </div>
    </div>
  );
}