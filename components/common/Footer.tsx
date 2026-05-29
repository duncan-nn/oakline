import Input from "../ui/Input";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__wrap}`}>
        <div className={`${styles.footer__top}`}>
          {/* Brand + Newsletter */}
          <div className={styles.footer__brand}>
            <h3 className={styles.footer__logo}>OakLine Properties</h3>
            <Input placeholder="Enter Your Email" />
          </div>

          {/* Links */}
          <div className={styles.footer__links}>
            <div>
              <h4 className={styles.footer__title}>Home</h4>
              <ul>
                <li>Hero Section</li>
                <li>Features</li>
                <li>Properties</li>
                <li>Testimonials</li>
                <li>FAQ's</li>
              </ul>
            </div>

            <div>
              <h4 className={styles.footer__title}>About Us</h4>
              <ul>
                <li>Our Story</li>
                <li>Our Works</li>
                <li>How It Works</li>
                <li>Our Team</li>
                <li>Our Clients</li>
              </ul>
            </div>

            <div>
              <h4 className={styles.footer__title}>Properties</h4>
              <ul>
                <li>Portfolio</li>
                <li>Categories</li>
              </ul>
            </div>

            <div>
              <h4 className={styles.footer__title}>Services</h4>
              <ul>
                <li>Valuation Mastery</li>
                <li>Strategic Marketing</li>
                <li>Negotiation Wizardry</li>
                <li>Closing Success</li>
                <li>Property Management</li>
              </ul>
            </div>

            <div>
              <h4 className={styles.footer__title}>Contact Us</h4>
              <ul>
                <li>Contact Form</li>
                <li>Our Offices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={`${styles.footer__wrap} ${styles.footer__wrap_bottom}`}>
        <div className={styles.footer__bottom}>
          <span>©2026 OakLine Properties. All Rights Reserved.</span>
          <span>Terms & Conditions</span>

          <div className={styles.footer__socials}>
            <span>f</span>
            <span>in</span>
            <span>t</span>
            <span>▶</span>
          </div>
        </div>
      </div>
    </footer>
  );
}