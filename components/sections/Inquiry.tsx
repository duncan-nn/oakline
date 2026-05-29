import { Property } from '@/lib/types';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';
import Input2 from '../ui/Input2';
import TextArea from '../ui/TextArea';
import styles from './Inquiry.module.scss';
import { MapPin } from 'lucide-react';

type InquiryProps = {
  property: Property;
};

export default function Inquiry({property,}: InquiryProps) {
  const WhatsAppNumber = 15550284893;
  const whatsappMessage = encodeURIComponent(
  `I'm interested in property: ${property.slug}`
  );
  const whatsappUrl = `https://wa.me/${WhatsAppNumber}?text=${whatsappMessage}`;
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.left}>
          <h2 className={`${styles.title} heading-02`}>
            Inquire About {property.title.rendered}
          </h2>

          <p className={`${styles.text} text-body-01`}>
            Interested in this property?
          </p>
          <a 
          href={whatsappUrl} 
          className="whatsapp_cta" 
          target="_blank">
            Chat with us on WhatsApp
          </a>
          <p className={`${styles.text} text-body-01`}>
            Or fill out the form below, and our real estate experts will get back to you with more details.
          </p>
        </div>

        {/* RIGHT */}
        <div className={styles.formCard}>

          <div className={styles.grid}>
            <Input2 label="First Name" placeholder="Enter First Name" />
            <Input2 label="Last Name" placeholder="Enter Last Name" />
            <Input2 label="Email" placeholder="Enter your Email" type="email" />
            <Input2 label="Phone" placeholder="Enter Phone Number" />
          </div>

          {/* Selected Property */}
          <div className={styles.field}>
            <label className={styles.label}>Selected Property</label>
            <div className={styles.property}>
              <span>{property.title.rendered}</span>
              <MapPin size={16} />
            </div>
          </div>

          <TextArea label="Message" placeholder="Enter your Message here..." />

          <div className={styles.footer}>
            <Checkbox label="I agree with Terms of Use and Privacy Policy" />

            <button className={styles.button}>
              Send Your Message
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}