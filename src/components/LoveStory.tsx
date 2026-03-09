import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart } from 'lucide-react';

const stories = [
  {
    date: 'Tháng 3, 2020',
    title: 'Lần Đầu Gặp Gỡ',
    description:
      'Chúng tôi gặp nhau lần đầu tại một buổi hội thảo về công nghệ. Ánh mắt đầu tiên, nụ cười đầu tiên, và từ đó, câu chuyện của chúng tôi bắt đầu.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop',
  },
  {
    date: 'Tháng 8, 2021',
    title: 'Khoảnh Khắc Đặc Biệt',
    description:
      'Chuyến du lịch đầu tiên cùng nhau tại Đà Lạt. Những đêm ngắm sao, những buổi sáng trong sương, và những câu chuyện không bao giờ kết thúc.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
  },
  {
    date: 'Tháng 12, 2024',
    title: 'Lời Cầu Hôn',
    description:
      'Dưới ánh hoàng hôn của Phú Quốc, anh đã quỳ gối và hỏi: "Em có muốn ở bên anh suốt đời không?" Và em đã nói: "Có!"',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=400&fit=crop',
  },
  {
    date: 'Tháng 6, 2025',
    title: 'Ngày Cưới',
    description:
      'Và cuối cùng, chúng tôi sẽ chính thức trở thành vợ chồng, bắt đầu một chương mới của cuộc đời với đầy ắp tình yêu và hạnh phúc.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop',
  },
];

const StoryItem = ({ story, index }: { story: typeof stories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex flex-col md:flex-row items-center gap-8 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="relative">
          <div className="absolute -inset-4 border border-gold/30 rounded-lg" />
          <img
            src={story.image}
            alt={story.title}
            className="w-full aspect-square object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className={`w-full md:w-1/2 text-center ${isEven ? 'md:text-left' : 'md:text-right'}`}>
        <span className="font-body text-sm tracking-widest uppercase text-primary">
          {story.date}
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-foreground mt-2 mb-4">
          {story.title}
        </h3>
        <p className="font-body text-lg text-muted-foreground leading-relaxed">
          {story.description}
        </p>
      </div>
    </motion.div>
  );
};

const LoveStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="story" className="py-24 md:py-32 bg-gradient-to-b from-background to-champagne/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <Heart className="w-8 h-8 mx-auto text-primary mb-4" />
          <h2 className="font-script text-5xl md:text-6xl gold-text mb-4">
            Chuyện Tình Yêu
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Hành trình từ hai người xa lạ đến khi trở thành một nửa của nhau
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        <div className="space-y-16 md:space-y-24 max-w-5xl mx-auto">
          {stories.map((story, index) => (
            <StoryItem key={story.title} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
