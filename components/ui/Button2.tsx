"use client";
import Link from "next/link";
import styles from "./Button2.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
};

export default function Button2({
  children,
  variant = "primary",
  href,
  onClick,
}: ButtonProps) {
  const className = `${styles.button} ${styles[`button--${variant}`]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}