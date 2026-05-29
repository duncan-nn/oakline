import { Property } from '@/lib/types';
import PricingGroup from '../features/PricingGroup';
import styles from './PricingDetails.module.scss';
import { formatPrice } from '@/lib/util';

type PricingDetailsProps = {
  property: Property;
};

export default function PricingDetails({
  property,
}: PricingDetailsProps) {

  const additional_fees = property.meta_box.additional_fees.map((add_fee) => ({
    label: add_fee[0],
    value: formatPrice(Number(add_fee[1])),
    note: add_fee[2],
  }));

  const monthly_cost = property.meta_box.monthly_cost.map((mon_co) => ({
    label: mon_co[0],
    value: formatPrice(Number(mon_co[1])),
    note: mon_co[2],
  }));


  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h2 className="heading-02">Comprehensive Pricing Details</h2>
          <p className="text-body-01">
            At OakLine Properties, transparency is key. Below, we break down the pricing for this property.
          </p>
        </div>

        {/* NOTE */}
        <div className={styles.note}>
          <div className={styles.note_head}>
            <span className={`${styles.note_title} text-body-02`}>Note</span>
          </div> 
          <span className={`${styles.note_text}`}>The figures provided are estimates and may vary.</span>
        </div>

        <div className={styles.layout}>

          {/* LEFT */}
          <div className={styles.price}>
            <span>Listing Price</span>
            <h3 className="heading-03">{formatPrice(property.acf.price)}</h3>
          </div>

          {/* RIGHT */}
          <div className={styles.groups}>

            <PricingGroup
              title="Additional Fees"
              items={additional_fees}
            />

            <PricingGroup
              title="Monthly Costs"
              items={monthly_cost}
            />

          </div>

        </div>

      </div>
    </section>
  );
}