import styles from './FeatureCard.module.scss';
import { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  title: string;
  icon: ReactNode;
  href?: string;
};

export default function FeatureCard({ title, icon, href = '#' }: Props) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>

      <p className={styles.title}>{title}</p>

      <span className={styles.arrow}>↗</span>
    </Link>
  );
}