import StatCard from '../common/StatCard';
import Button from '../ui/Button';
import Features from './Features';
import styles from './HomeHero.module.scss';
import Image from 'next/image';


export default function HomeHero() {
  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.container}`}>

        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h1 className={`${styles.left__left_h1} heading-01`}>
            Discover Your Dream <br /> Property with OakLine
          </h1>

          <p className={`${styles.left__left_p} text-body-01`}>
            Your journey to finding the perfect property begins here.
            Explore our listings to find the home that matches your dreams.
          </p>

          <div className={styles.actions}>
            <Button href="/" variant="ghost">Learn More</Button>
            <Button href="/propertylist">Browse Properties</Button>
          </div>

          <div className={styles.stats}>
            <StatCard value="200+" label="Happy Customers" />
            <StatCard value="10k+" label="Properties For Clients" />
            <StatCard value="16+" label="Years of Experience" />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <Image
            src="/images/hero-house4.jpg"
            alt="Luxury House"
            fill
            className={styles.image}
          />
        </div>
      </div>

      <div className={"container-03"}>
        <Features />
      </div>
    </section>
  );
}