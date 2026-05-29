import Image from "next/image";
import styles from "./TestimonialCard.module.scss";

type TestimonialCardProps = {
  title: string;
  content: string;
  name: string;
  location: string;
  avatar: string;
};

export default function TestimonialCard({
  title,
  content,
  name,
  location,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className={styles.card}>
      {/* Stars */}
      <div className={styles.card__stars}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={styles.card__star}>★</span>
        ))}
      </div>

      {/* Content */}
    <h3 className={`${styles.card__title} heading-03`}>{title}</h3>
      <p className={`${styles.card__text} text-body-01`}>{content}</p>

      {/* User */}
      <div className={styles.card__user}>
        <div className={styles.card__avatar}>
          <Image src={avatar} alt={name} fill />
        </div>

        <div>
          <p className={styles.card__name}>{name}</p>
          <p className={styles.card__location}>{location}</p>
        </div>
      </div>
    </div>
  );
}