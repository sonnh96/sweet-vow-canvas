import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Heart className="w-16 h-16 mx-auto text-primary mb-6 animate-pulse" />
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-script text-4xl md:text-5xl gold-text mb-4"
        >
          Thuỷ Tiên & Ngọc Nhật
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-body text-lg text-muted-foreground"
        >
          15.06.2025
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="w-48 h-1 mx-auto mt-8 gold-gradient rounded-full origin-left"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
