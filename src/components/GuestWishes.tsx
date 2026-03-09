import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircleHeart, Quote } from 'lucide-react';

const wishes = [
  {
    name: 'Nguyễn Văn Minh',
    message: 'Chúc hai bạn trăm năm hạnh phúc, sớm có tin vui nhé! Hạnh phúc mãi bên nhau.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Trần Thị Hương',
    message: 'Tình yêu của hai bạn thật đẹp! Chúc cô dâu chú rể luôn yêu thương nhau như ngày đầu.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Lê Hoàng Anh',
    message: 'Chúc mừng hạnh phúc! Cầu mong cuộc sống vợ chồng của hai bạn sẽ ngập tràn tiếng cười.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Phạm Thanh Tùng',
    message: 'Hạnh phúc là điều quý giá nhất. Chúc hai bạn mãi mãi bên nhau, vượt qua mọi khó khăn trong cuộc sống.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  },
];

const GuestWishes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="wishes" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <MessageCircleHeart className="w-8 h-8 mx-auto text-primary mb-4" />
          <h2 className="font-script text-5xl md:text-6xl gold-text mb-4">
            Lời Chúc Phúc
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Những lời chúc ý nghĩa từ bạn bè và người thân
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="luxury-card rounded-2xl p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/30" />
              <div className="flex items-start gap-4">
                <img
                  src={wish.avatar}
                  alt={wish.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                />
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-2">
                    {wish.name}
                  </h4>
                  <p className="font-body text-muted-foreground italic leading-relaxed">
                    "{wish.message}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestWishes;
