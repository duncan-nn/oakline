import Footer from "../common/Footer";
import Button from "../ui/Button";
import styles from "./CTAFooter.module.scss";

export default function CTAFooter() {
  return (
    <section className={styles.section}>
      {/* CTA */}
      <div className={`${styles.section__wrap}`}>
        <div className="section-container container-main">
          <div className={`${styles.section__cta} header-01`}>
            <div>
              <h2 className={`${styles.section__title} heading-02`}>
                Start Your Real Estate Journey Today
              </h2>
              <p className={`${styles.section__text} text-body-01`}>
                Find answers to common questions about OakLine's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
              </p>
            </div>

            <Button href="/propertylist">Explore Properties</Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}