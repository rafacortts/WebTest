"use client"

import React from 'react';
import { cn } from "@/lib/utils"; 
import { motion } from 'framer-motion'; 

interface Props {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  reverse?: boolean;
}

const Container: React.FC<Props> = ({ children, className, delay = 0.2, reverse = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: reverse ? -20 : 20 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay, duration: 0.4, ease: "easeInOut" }} 
      className={cn("container", className)}
      
    >
     
      {children}
    </motion.div>
  );
};

export default Container;
