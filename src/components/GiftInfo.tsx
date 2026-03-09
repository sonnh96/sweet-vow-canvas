import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gift, CreditCard } from 'lucide-react';

const GiftInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="gift" className="py-24 md:py-32 bg-gradient-to-b from-background to-champagne/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Gift className="w-8 h-8 mx-auto text-primary mb-4" />
          <h2 className="font-script text-5xl md:text-6xl gold-text mb-4">
            Quà Cưới
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto italic">
            "Sự hiện diện của bạn là món quà quý giá nhất đối với chúng tôi."
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-lg text-foreground mb-12">
            Nếu bạn muốn gửi quà chúc phúc, bạn có thể tham khảo thông tin dưới đây.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cô Dâu */}
            <div className="luxury-card rounded-2xl p-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blush/50 flex items-center justify-center">
                <span className="font-script text-3xl text-foreground">TT</span>
              </div>
              <h3 className="font-serif text-xl text-foreground mb-4">Cô Dâu</h3>
              <p className="font-body text-foreground font-medium mb-2">ĐỖ THUỶ TIÊN</p>
              
              <div className="my-6 p-4 bg-background rounded-lg">
                <CreditCard className="w-6 h-6 mx-auto text-primary mb-2" />
                <p className="font-body text-sm text-muted-foreground">Vietcombank</p>
                <p className="font-body text-lg text-foreground font-medium">1234 5678 9012</p>
              </div>

              {/* QR Placeholder */}
              <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center">
                <span className="font-body text-sm text-muted-foreground">QR Code</span>
              </div>
            </div>

            {/* Chú Rể */}
            <div className="luxury-card rounded-2xl p-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/30 flex items-center justify-center">
                <span className="font-script text-3xl text-foreground">NN</span>
              </div>
              <h3 className="font-serif text-xl text-foreground mb-4">Chú Rể</h3>
              <p className="font-body text-foreground font-medium mb-2">BẠCH NGỌC NHẬT</p>
              
              <div className="my-6 p-4 bg-background rounded-lg">
                <CreditCard className="w-6 h-6 mx-auto text-primary mb-2" />
                <p className="font-body text-sm text-muted-foreground">Techcombank</p>
                <p className="font-body text-lg text-foreground font-medium">9876 5432 1098</p>
              </div>

              {/* QR Placeholder */}
              <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center">
                <span className="font-body text-sm text-muted-foreground">QR Code</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftInfo;
