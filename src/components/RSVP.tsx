import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, Check, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const RSVP = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    attending: 'yes',
    guests: '1',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: 'Cảm ơn bạn!',
      description: 'Chúng tôi đã nhận được xác nhận của bạn.',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="rsvp" className="py-24 md:py-32 bg-gradient-to-b from-champagne/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Send className="w-8 h-8 mx-auto text-primary mb-4" />
          <h2 className="font-script text-5xl md:text-6xl gold-text mb-4">
            Xác Nhận Tham Dự
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Vui lòng xác nhận sự tham dự của bạn trước ngày 01/06/2025
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          {isSubmitted ? (
            <div className="luxury-card rounded-2xl p-10 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center">
                <Check className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                Cảm ơn bạn đã xác nhận!
              </h3>
              <p className="font-body text-muted-foreground">
                Chúng tôi rất vui và mong được gặp bạn trong ngày cưới.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="luxury-card rounded-2xl p-8 md:p-10 space-y-6">
              {/* Name */}
              <div>
                <label className="block font-body text-sm text-foreground mb-2">
                  Họ và Tên <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Nguyễn Văn A"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-body text-sm text-foreground mb-2">
                  Số Điện Thoại <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="0901 234 567"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-body text-sm text-foreground mb-2">
                  Email (tùy chọn)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="email@example.com"
                />
              </div>

              {/* Attending */}
              <div>
                <label className="block font-body text-sm text-foreground mb-2">
                  Bạn sẽ tham dự? <span className="text-destructive">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={formData.attending === 'yes'}
                      onChange={handleChange}
                      className="w-4 h-4 accent-primary"
                    />
                    <span className="font-body text-foreground">Có, tôi sẽ tham dự</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formData.attending === 'no'}
                      onChange={handleChange}
                      className="w-4 h-4 accent-primary"
                    />
                    <span className="font-body text-foreground">Xin lỗi, tôi không thể</span>
                  </label>
                </div>
              </div>

              {/* Number of guests */}
              {formData.attending === 'yes' && (
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">
                    Số người đi cùng
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  >
                    <option value="1">1 người</option>
                    <option value="2">2 người</option>
                    <option value="3">3 người</option>
                    <option value="4">4 người</option>
                    <option value="5">5 người</option>
                  </select>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block font-body text-sm text-foreground mb-2">
                  Lời chúc gửi cô dâu chú rể
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Viết lời chúc của bạn..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-luxury rounded-lg flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  <>
                    <Heart className="w-5 h-5" />
                    Gửi Xác Nhận
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
