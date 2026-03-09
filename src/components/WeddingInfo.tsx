import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Calendar, Church, Utensils } from 'lucide-react';

const WeddingInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="info" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <MapPin className="w-8 h-8 mx-auto text-primary mb-4" />
          <h2 className="font-script text-5xl md:text-6xl gold-text mb-4">
            Thông Tin Lễ Cưới
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi rất hạnh phúc được đón bạn trong ngày trọng đại
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Lễ Thành Hôn */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="luxury-card rounded-2xl p-8 md:p-10 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center">
              <Church className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Lễ Thành Hôn
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-body text-lg text-foreground">
                  Chủ Nhật, 15 Tháng 6, 2025
                </span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-body text-lg text-foreground">
                  10:00 SA
                </span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-body text-lg text-foreground">
                  Nhà Thờ Lớn Hà Nội
                </span>
              </div>
            </div>
            
            <p className="font-body text-muted-foreground mt-6">
              40 Nhà Chung, Hoàn Kiếm, Hà Nội
            </p>
          </motion.div>

          {/* Tiệc Cưới */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="luxury-card rounded-2xl p-8 md:p-10 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center">
              <Utensils className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Tiệc Cưới
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-body text-lg text-foreground">
                  Chủ Nhật, 15 Tháng 6, 2025
                </span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-body text-lg text-foreground">
                  18:00 CH
                </span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-body text-lg text-foreground">
                  Grand Palace Convention Center
                </span>
              </div>
            </div>
            
            <p className="font-body text-muted-foreground mt-6">
              Sảnh Grand Ballroom, 36 Lê Đại Hành, Hai Bà Trưng, Hà Nội
            </p>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="luxury-card rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096903372!2d105.8488!3d21.0285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab953357c995%3A0x1babf6bb4f9a20e!2sHanoi%2C%20Vietnam!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Location"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingInfo;
