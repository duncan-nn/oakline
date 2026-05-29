import styles from './FeatureList.module.scss';
import { ReactNode } from 'react';

type Item = {
  text: string;
  icon: ReactNode;
};

type Props = {
  items: Item[];
};

export default function FeatureList({ items }: Props) {
  return (
    <div className={styles.list}>
      {items.map((item, index) => (
        <div key={index} className={styles.list__item}>
          <span className={styles.list__icon}>{item.icon}</span>
          <p className={`${styles.list__text} text-body-02`}>{item.text}</p>
        </div>
      ))}
    </div>
  );
}