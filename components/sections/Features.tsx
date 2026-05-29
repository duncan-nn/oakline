import FeatureCard from '../features/FeatureCard';
import styles from './Features.module.scss';
import { Home, Wallet, Building2, Sparkles } from 'lucide-react';

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <FeatureCard
          title="Find Your Dream Home"
          icon={<Home size={20} />}
          href="/propertylist"
        />

        <FeatureCard
          title="Unlock Property Value"
          icon={<Wallet size={20} />}
          href="/propertylist"
        />

        <FeatureCard
          title="Effortless Property Management"
          icon={<Building2 size={20} />}
          href="/propertylist"
        />

        <FeatureCard
          title="Smart Investments, Informed Decisions"
          icon={<Sparkles size={20} />}
          href="/propertylist"
        />

      </div>
    </section>
  );
}