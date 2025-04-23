import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryTabs from '@/components/CategoryTabs';
import BottomNavigation from '@/components/BottomNavigation';
import EventCard, { EventData } from '@/components/EventCard';
import EventDetail from '@/components/EventDetail';
import Profile from '@/components/Profile';
import { Bell, Search, Wallet } from 'lucide-react';

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
    <div className="bg-treddict-darker min-h-screen pb-20">
      <div className="sticky top-0 z-40 bg-treddict-darker/80 backdrop-blur-lg border-b border-white/10">
        <header className="container flex justify-between items-center p-4">
          <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-treddict-blue via-treddict-purple to-treddict-red">
            Treddict
          </h1>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-treddict-dark hover:bg-treddict-dark/80">
              <Search size={16} />
            </button>
            <button 
              className="p-2 rounded-full bg-treddict-dark hover:bg-treddict-dark/80 relative"
              onClick={() => navigate('/wallet')}
            >
              <Wallet size={16} />
              <span className="absolute -top-1 -right-1 text-xs bg-treddict-blue text-white px-1.5 py-0.5 rounded-full">$500</span>
            </button>
            <button className="p-2 rounded-full bg-treddict-dark hover:bg-treddict-dark/80 relative">
              <Bell size={16} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-treddict-red rounded-full"></span>
            </button>
          </div>
        </header>
        
        <div className="container px-4">
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </div>
      
      <main className="container p-4">
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
