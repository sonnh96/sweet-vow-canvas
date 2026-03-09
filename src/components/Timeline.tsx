import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Users, Heart, Cake, Music, Sparkles } from 'lucide-react';

const timelineEvents = [
  {
    time: '17:30',
    title: 'Đón Khách',
    description: 'Chào đón quý khách tại sảnh Grand Ballroom',
    icon: Users,
  },
  {
    time: '18:00',
    title: 'Lễ Thành Hôn',
    description: 'Nghi thức lễ cưới chính thức',
    icon: Heart,
  },
  {
    time: '18:30',
    title: 'Khai Tiệc',
    description: 'Thưởng thức tiệc cưới và chương trình văn nghệ',
    icon: Sparkles,
  },
  {
    time: '19:30',
    title: 'Cắt Bánh Cưới',
    description: 'Nghi thức cắt bánh cưới và champagne',
    icon: Cake,
  },
  {
    time: '20:00',
    title: 'Khiêu Vũ',
    description: 'Điệu waltz đầu tiên và tiệc nhảy',
    icon: Music,
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="timeline" className="py-24 md:py-32 bg-gradient-to-b from-background to-champagne/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Clock className="w-8 h-8 mx-auto text-primary mb-4" />
          <h2 className="font-script text-5xl md:text-6xl gold-text mb-4">
            Lịch Trình Ngày Cưới
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Chương trình tiệc cưới tại Grand Palace Convention Center
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 luxury-card rounded-2xl p-6 text-center ${
                      isEven ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <span className="font-serif text-3xl gold-text">{event.time}</span>
                    <h3 className="font-serif text-xl text-foreground mt-2 mb-2">
                      {event.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {event.description}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center z-10 shrink-0">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
