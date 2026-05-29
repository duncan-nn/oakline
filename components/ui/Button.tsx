"use client";

import Link from 'next/link';
import styles from './Button.module.scss';

type Props = {
  children: React.ReactNode;
  href?: string; // optional link
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
}: Props) {
  const className = `${styles.button} ${styles[variant]}`;

  // 👉 If href exists → render as link
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  // 👉 Otherwise → normal button
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}