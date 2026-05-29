"use client";

import styles from "./Input.module.scss";

type InputProps = {
  placeholder?: string;
};

export default function Input({ placeholder }: InputProps) {
  return (
    <div className={styles.input}>
      <input
        type="email"
        placeholder={placeholder}
        className={styles.input__field}
      />
      <button className={styles.input__button}>➤</button>
    </div>
  );
}