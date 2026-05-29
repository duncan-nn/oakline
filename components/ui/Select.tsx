'use client';

import { useEffect, useState } from 'react';
import styles from './Select.module.scss';
import { ChevronDown, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  placeholder: string;
  options: SelectOption[];
  onChange?: (value: string | null) => void;
};

export default function Select({ placeholder, options, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SelectOption | null>(null);

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);


  const handleSelect = (option: SelectOption) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option.value);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected(null);
    onChange?.(null);
  };

  return (
    <div 
    className={styles.select}
    onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className={styles.select__trigger}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className={styles.select__label}>
          {selected ? selected.label : placeholder}
        </span>

        {selected ? (
          <X
            size={16}
            className={styles.select__icon}
            onClick={handleReset}
          />
        ) : (
          // <ChevronDown size={16} className={styles.select__icon} />
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className={styles.select__icon}
          >
            <ChevronDown size={16} />
          </motion.span>
        )}
      </button>

      {/* {isOpen && (
        <div className={styles.select__dropdown}>
          {options.map((opt) => (
            <button
              key={opt.value}
              className={styles.select__item}
              onClick={() => handleSelect(opt)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )} */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.select__dropdown}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {options.map((opt, index) => (
              <motion.button
                key={opt.value}
                className={styles.select__item}
                onClick={() => handleSelect(opt)}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.03, // 👈 stagger effect
                }}
              >
                {opt.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}