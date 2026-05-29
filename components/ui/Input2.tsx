"use client";
import styles from './Input2.module.scss';

type Props = {
  label: string;
  placeholder?: string;
  type?: string;
};

export default function Input2({ label, placeholder, type = 'text' }: Props) {
  return (
    <div className={styles.field}>
      <label className={styles.field__label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.field__input}
      />
    </div>
  );
}