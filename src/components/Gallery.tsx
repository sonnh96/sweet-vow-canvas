import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Camera } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1529636798458-92182e662485?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=600&fit=crop',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Camera className="w-8 h-8 mx-auto text-primary mb-4" />
          <h2 className="font-script text-5xl md:text-6xl gold-text mb-4">
            Album Ảnh Cưới
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Những khoảnh khắc đẹp nhất của chúng tôi
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`cursor-pointer group relative overflow-hidden rounded-lg ${
                index === 0 || index === 4 ? 'md:col-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Wedding photo ${index + 1}`}
                className="w-full h-full object-cover aspect-square md:aspect-auto transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Wedding photo"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
