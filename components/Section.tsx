"use client";

import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({ id, className = "", children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
