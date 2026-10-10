import React from 'react';
import { motion } from 'framer-motion';
import { Beaker } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-slate-700"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center gap-3">
        <Beaker className="text-blue-400" size={32} />
        <div>
          <h1 className="text-2xl font-bold text-white">MD Tutorial PRO</h1>
          <p className="text-xs text-slate-400">Dinámica Molecular - GROMACS 2025.3</p>
        </div>
      </div>
    </motion.header>
  );
}
