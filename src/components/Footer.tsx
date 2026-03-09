import { Heart, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-script text-5xl md:text-6xl mb-4">
          Minh Anh & Hoàng Nam
        </h3>
        
        <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Cảm ơn bạn đã trở thành một phần trong ngày trọng đại của chúng tôi.
        </p>

        <div className="flex items-center justify-center gap-2 mb-8">
          <Heart className="w-5 h-5 text-primary animate-pulse" />
          <span className="font-body text-primary-foreground/60">15.06.2025</span>
          <Heart className="w-5 h-5 text-primary animate-pulse" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-primary-foreground/80">
          <a 
            href="mailto:minhanh.hoangnam@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="font-body">minhanh.hoangnam@gmail.com</span>
          </a>
          <a 
            href="tel:+84901234567" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="font-body">0901 234 567</span>
          </a>
        </div>

        <div className="section-divider mb-8 opacity-30" />

        <p className="font-body text-sm text-primary-foreground/50">
          © 2025 Minh Anh & Hoàng Nam Wedding
        </p>
      </div>
    </footer>
  );
};

export default Footer;
