"use client";

import styles from "./TextArea.module.scss";

type Props = {
  label: string;
  placeholder?: string;
};

export default function TextArea({ label, placeholder }: Props) {
  return (
    <div className={styles.field}>
      <label className={styles.field__label}>{label}</label>
      <textarea
        placeholder={placeholder}
        className={styles.field__textarea}
        rows={5}
      />
    </div>
  );
}