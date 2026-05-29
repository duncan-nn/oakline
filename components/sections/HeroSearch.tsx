import Select from '../ui/Select';
import styles from './HeroSearch.module.scss';

export default function HeroSearch() {
  return (
    <section className={styles.hero}>

      <div className={styles.hero__top}>
        <div className={styles.hero__content}>
          <h1 className={`${styles.hero__title} heading-01`}>
            Find Your Dream Property
          </h1>

          <p className={`${styles.hero__desc} text-body-01`}>
            Welcome to OakLine Properties, where your dream property awaits in every corner 
            of our beautiful world. Explore our curated selection of properties, 
            each offering a unique story and a chance to redefine your life. 
            With categories to suit every dreamer, your journey
          </p>

        </div>
      </div>


      <div className={styles.hero__bottom}>
        {/* SEARCH BAR */}
        <div className={styles.hero__search_wrap}>
          <div className={styles.hero__search}>
            <input
              type="text"
              placeholder="Search For A Property"
              className={styles.hero__input}
            />
            <button className={styles.hero__btn}>
              Find Property
            </button>
          </div>
        </div>

        {/* FILTERS */}
        <div className={styles.hero__filters}>
          <Select
            placeholder="Location"
            options={[
              { label: 'Lekki', value: 'lekki' },
              { label: 'Ikoyi', value: 'ikoyi' },
              { label: 'Ajah', value: 'ajah' },
            ]}
          />

          <Select
            placeholder="Property Type"
            options={[
              { label: 'Apartment', value: 'apartment' },
              { label: 'Duplex', value: 'duplex' },
            ]}
          />

          <Select
            placeholder="Pricing Range"
            options={[
              { label: '₦10M - ₦50M', value: 'low' },
              { label: '₦50M - ₦100M', value: 'mid' },
            ]}
          />

          <Select
            placeholder="Property Size"
            options={[
              { label: '2 Bedroom', value: '2' },
              { label: '3 Bedroom', value: '3' },
            ]}
          />

          <Select
            placeholder="Build Year"
            options={[
              { label: '2020+', value: '2020' },
              { label: '2015+', value: '2015' },
            ]}
          />
        </div>
      </div>
    </section>
  );
}