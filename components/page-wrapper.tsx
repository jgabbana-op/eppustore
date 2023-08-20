'use client';

import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const PageWrapper = ({ children, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
