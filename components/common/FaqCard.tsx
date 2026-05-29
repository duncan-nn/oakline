import Button from "../ui/Button";
import styles from "./FaqCard.module.scss";

type FaqCardProps = {
  question: string;
  answer: string;
};

export default function FaqCard({ question, answer }: FaqCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={`${styles.card__question} heading-03`}>{question}</h3>
      <p className={`${styles.card__answer} text-body-01`}>{answer}</p>

      <div className={styles.card__cta}>
        <Button href="/" variant="secondary">Read More</Button>
      </div>
    </div>
  );
}