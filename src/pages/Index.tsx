import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LoveStory from '@/components/LoveStory';
import WeddingInfo from '@/components/WeddingInfo';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import RSVP from '@/components/RSVP';
import GuestWishes from '@/components/GuestWishes';
import GiftInfo from '@/components/GiftInfo';
import Footer from '@/components/Footer';
import FloatingPetals from '@/components/FloatingPetals';
import MusicPlayer from '@/components/MusicPlayer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className={isLoading ? 'invisible' : 'visible'}>
        <FloatingPetals />
        <MusicPlayer />
        <Navigation />
        
        <main>
          <HeroSection />
          <LoveStory />
          <WeddingInfo />
          <Timeline />
          <Gallery />
          <RSVP />
          <GuestWishes />
          <GiftInfo />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
