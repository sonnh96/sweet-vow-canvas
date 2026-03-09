import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const weddingDate = new Date('2025-06-15T10:00:00');
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-champagne/50 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold">
          <path
            d="M100 0C100 0 120 40 160 60C200 80 200 100 200 100C200 100 200 120 160 140C120 160 100 200 100 200C100 200 80 160 40 140C0 120 0 100 0 100C0 100 0 80 40 60C80 40 100 0 100 0Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold">
          <path
            d="M100 0C100 0 120 40 160 60C200 80 200 100 200 100C200 100 200 120 160 140C120 160 100 200 100 200C100 200 80 160 40 140C0 120 0 100 0 100C0 100 0 80 40 60C80 40 100 0 100 0Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-body text-lg md:text-xl tracking-widest uppercase text-muted-foreground mb-4"
        >
          Save the Date
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl gold-text mb-4">
            Thuỷ Tiên
          </h1>
          <p className="font-serif text-3xl md:text-4xl text-foreground/60 my-4">&</p>
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl gold-text">
            Ngọc Nhật
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <p className="font-body text-xl md:text-2xl text-foreground/80 italic mb-8">
            Trân trọng kính mời bạn đến tham dự lễ cưới của chúng tôi
          </p>

          <div className="flex flex-col items-center gap-2 mb-12">
            <p className="font-serif text-2xl md:text-3xl text-foreground">
              15 Tháng 6, 2025
            </p>
            <p className="font-body text-lg text-muted-foreground">
              Grand Palace Convention Center, Hà Nội
            </p>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-4 gap-4 md:gap-8 max-w-lg mx-auto"
        >
          {[
            { value: countdown.days, label: 'Ngày' },
            { value: countdown.hours, label: 'Giờ' },
            { value: countdown.minutes, label: 'Phút' },
            { value: countdown.seconds, label: 'Giây' },
          ].map((item) => (
            <div
              key={item.label}
              className="luxury-card rounded-lg p-4 md:p-6"
            >
              <span className="block font-serif text-3xl md:text-5xl gold-text">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="block font-body text-sm md:text-base text-muted-foreground mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <a
            href="#rsvp"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#rsvp')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-luxury rounded-full inline-block"
          >
            Xác Nhận Tham Dự
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
