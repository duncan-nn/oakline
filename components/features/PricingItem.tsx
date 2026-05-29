import styles from './PricingItem.module.scss';

type Props = {
  label: string;
  value: string;
  note?: string;
};

export default function PricingItem({ label, value, note }: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.item__top}>
        <span className={styles.item__label}>{label}</span>
        <span className={styles.item__value}>{value}</span>
      </div>

      {note && <span className={styles.item__note}>{note}</span>}
    </div>
  );
}