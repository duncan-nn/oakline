import styles from './PricingGroup.module.scss';
import PricingItem from './PricingItem';

type Item = {
  label: string;
  value: string;
  note?: string;
};

type Props = {
  title: string;
  items: Item[];
};

export default function PricingGroup({ title, items }: Props) {
  return (
    <div className={styles.group}>
      <div className={styles.group__header}>
        <h3 className="heading-03">{title}</h3>
        <button className={styles.group__button}>Learn More</button>
      </div>

      <div className={styles.group__grid}>
        {items.map((item, index) => (
          <PricingItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}