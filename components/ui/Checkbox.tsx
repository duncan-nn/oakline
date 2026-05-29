"use client";
import styles from './Checkbox.module.scss';

type Props = {
  label: string;
};

export default function Checkbox({ label }: Props) {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" />
      <span>{label}</span>
    </label>
  );
}