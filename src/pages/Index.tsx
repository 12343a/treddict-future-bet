import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import CategoryCarousel from '@/components/CategoryCarousel';
import BottomNavigation from '@/components/BottomNavigation';
import EventCard, { EventData } from '@/components/EventCard';
import EventDetail from '@/components/EventDetail';
import Profile from '@/components/Profile';
import TrendingSection from '@/components/TrendingSection';
import Footer from '@/components/Footer';
import { Search, Wallet } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const categories = [
    'Featured', 
    'Cricket',
    'Sports', 
    'Crypto', 
    'Politics', 
    'Entertainment', 
    'Tech', 
    'Finance', 
    'Science'
  ];

  const events: EventData[] = [
    {
      id: '1',
      title: 'India vs Australia World Cup Final',
      description: 'Will India win the Cricket World Cup Final against Australia?',
      category: 'Cricket',
      endTime: '2d 5h left',
      yesPercentage: 65,
      noPercentage: 35,
      tradersCount: 5342,
      liquidity: '$553K',
      isHot: true,
      imageUrl: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800',
    },
    {
      id: '2',
      title: 'Virat Kohli Century',
      description: 'Will Virat Kohli score a century in the next match?',
      category: 'Cricket',
      endTime: '1d 12h left',
      yesPercentage: 72,
      noPercentage: 28,
      tradersCount: 3823,
      liquidity: '$329K',
      isHot: true,
      imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=800',
    },
    {
      id: '3',
      title: "Taylor Swift next album to go platinum in first week",
      description: "Will Taylor Swift next studio album achieve platinum status within the first week of its release?",
      category: 'Entertainment',
      endTime: '45d 3h left',
      yesPercentage: 89,
      noPercentage: 11,
      tradersCount: 2156,
      liquidity: '$315K',
      isHot: true,
      imageUrl: 'https://images.unsplash.com/photo-1618146981287-e9462f5a5817?w=800',
    },
    {
      id: '4',
      title: 'Ethereum to outperform Bitcoin in 2025',
      description: 'Will Ethereum have a higher percentage growth than Bitcoin by the end of 2025?',
      category: 'Crypto',
      endTime: '204d left',
      yesPercentage: 62,
      noPercentage: 38,
      tradersCount: 934,
      liquidity: '$187K',
      imageUrl: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800',
    },
    {
      id: '5',
      title: 'AI Regulation Bill Passage',
      description: 'Will the AI regulation bill pass through Congress by end of 2025?',
      category: 'Politics',
      endTime: '180d left',
      yesPercentage: 45,
      noPercentage: 55,
      tradersCount: 1247,
      liquidity: '$234K',
      isHot: false,
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
    },
    {
      id: '6',
      title: 'SpaceX Mars Landing',
      description: 'Will SpaceX successfully land a spacecraft on Mars by 2026?',
      category: 'Science',
      endTime: '300d left',
      yesPercentage: 78,
      noPercentage: 22,
      tradersCount: 3891,
      liquidity: '$445K',
      isHot: true,
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    },
    {
      id: '7',
      title: 'Apple Mixed Reality Success',
      description: 'Will Apple Vision Pro surpass 5 million units sold in 2025?',
      category: 'Tech',
      endTime: '250d left',
      yesPercentage: 82,
      noPercentage: 18,
      tradersCount: 4521,
      liquidity: '$678K',
      isHot: true,
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800',
    },
    {
      id: '8',
      title: 'Bitcoin $100K',
      description: 'Will Bitcoin reach $100,000 before December 2025?',
      category: 'Crypto',
      endTime: '220d left',
      yesPercentage: 71,
      noPercentage: 29,
      tradersCount: 8934,
      liquidity: '$892K',
      isHot: true,
      imageUrl: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800',
    },
    {
      id: '9',
      title: 'Nvidia Stock Performance',
      description: 'Will NVDA outperform the S&P 500 by 50% in 2025?',
      category: 'Finance',
      endTime: '250d left',
      yesPercentage: 68,
      noPercentage: 32,
      tradersCount: 3245,
      liquidity: '$443K',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    },
    {
      id: '10',
      title: 'UEFA Champions League Winner',
      description: 'Will Manchester City win the Champions League 2025?',
      category: 'Sports',
      endTime: '90d left',
      yesPercentage: 55,
      noPercentage: 45,
      tradersCount: 6723,
      liquidity: '$778K',
      isHot: true,
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800',
    }
  ];

  const filteredEvents = activeCategory === 'Featured' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  const handleEventClick = (eventId: string) => {
    const event = events.find(e => e.id === eventId);
    if (event) {
      setSelectedEvent(event);
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'profile') {
      setIsProfileOpen(true);
    }
  };

  return (
    <div className="bg-background min-h-screen pb-20 flex flex-col">
      <NavigationBar />
      
      <div className="sticky top-[64px] z-30 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container px-4 overflow-hidden">
          <CategoryCarousel
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </div>
      
      <main className="container p-4 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredEvents.map(event => (
            <EventCard 
              key={event.id} 
              event={event}
              onClick={handleEventClick}
            />
          ))}
        </div>
      </main>

      <TrendingSection />
      <Footer />
      
      <BottomNavigation
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      
      {selectedEvent && (
        <EventDetail 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)}
        />
      )}
      <Profile 
        isOpen={isProfileOpen} 
        onClose={() => {
          setIsProfileOpen(false);
          setActiveTab('home');
        }} 
      />
    </div>
  );
};

export default Index;
