import styles from './StatCard.module.scss';

type Props = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: Props) {
  return (
    <div className={styles.card}>
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
}