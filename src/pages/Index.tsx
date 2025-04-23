
import React, { useState } from 'react';
import CategoryTabs from '@/components/CategoryTabs';
import BottomNavigation from '@/components/BottomNavigation';
import EventCard, { EventData } from '@/components/EventCard';
import EventDetail from '@/components/EventDetail';
import { Bell, Search } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  // Mock data for categories
  const categories = [
    'Featured', 
    'Sports', 
    'Crypto', 
    'Politics', 
    'Entertainment', 
    'Tech', 
    'Finance', 
    'Science'
  ];

  // Mock data for events
  const events: EventData[] = [
    {
      id: '1',
      title: 'Bitcoin to reach $100k before 2026',
      description: 'Will Bitcoin break through the $100,000 barrier before January 1st, 2026?',
      category: 'Crypto',
      endTime: '12d 5h left',
      yesPercentage: 72,
      noPercentage: 28,
      tradersCount: 1342,
      liquidity: '$253K',
      isHot: true,
      imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800',
    },
    {
      id: '2',
      title: 'Lakers to win NBA Championship',
      description: 'Will the LA Lakers win the NBA Championship this season?',
      category: 'Sports',
      endTime: '94d 12h left',
      yesPercentage: 45,
      noPercentage: 55,
      tradersCount: 823,
      liquidity: '$129K',
      imageUrl: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800',
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

  // Filter events based on active category
  const filteredEvents = activeCategory === 'Featured' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  // Handle event card click
  const handleEventClick = (eventId: string) => {
    const event = events.find(e => e.id === eventId);
    if (event) {
      setSelectedEvent(event);
    }
  };

  return (
    <div className="bg-treddict-darker min-h-screen pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-treddict-darker/80 backdrop-blur-lg border-b border-white/10">
        <header className="container flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-treddict-blue via-treddict-purple to-treddict-red">
            Treddict
          </h1>
          <div className="flex gap-3">
            <button className="p-2.5 rounded-full bg-treddict-dark hover:bg-treddict-dark/80">
              <Search size={20} />
            </button>
            <button className="p-2.5 rounded-full bg-treddict-dark hover:bg-treddict-dark/80 relative">
              <Bell size={20} />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-treddict-red rounded-full"></span>
            </button>
          </div>
        </header>
        
        {/* Categories */}
        <div className="container px-4">
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </div>
      
      {/* Main content */}
      <main className="container p-4">
        <div className="grid grid-cols-1 gap-4">
          {filteredEvents.map(event => (
            <EventCard 
              key={event.id} 
              event={event}
              onClick={handleEventClick}
            />
          ))}
        </div>
      </main>
      
      {/* Bottom navigation */}
      <BottomNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      {/* Event detail modal */}
      {selectedEvent && (
        <EventDetail 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default Index;
