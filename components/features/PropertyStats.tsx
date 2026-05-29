import styles from './PropertyStats.module.scss';

type Stat = {
  label: string;
  value: string;
};

type Props = {
  stats: Stat[];
};

export default function PropertyStats({ stats }: Props) {
  return (
    <div className={styles.stats}>
      {stats.map((item, index) => (
        <div key={index} className={styles.stats__item}>
          <span className={styles.stats__label}>{item.label}</span>
          <span className={styles.stats__value}>{item.value}</span>
        </div>
      ))}
    </div>
  );
}