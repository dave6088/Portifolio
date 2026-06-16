import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-slate-950 text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
        >
          <motion.div
            className="flex items-center gap-3 text-lg font-black"
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-400 text-slate-950">DS</span>
            <span>Preparing portfolio</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
