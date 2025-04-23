
import React from 'react';
import { Search, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TrendingTopic {
  id: string;
  name: string;
  description: string;
  searchCount: number;
}

const trendingTopics: TrendingTopic[] = [
  {
    id: '1',
    name: 'IPL 2025',
    description: 'Indian Premier League predictions and outcomes',
    searchCount: 25430,
  },
  {
    id: '2',
    name: 'World Cup',
    description: 'Cricket World Cup matches and results',
    searchCount: 18920,
  },
  {
    id: '3',
    name: 'T20 Series',
    description: 'International T20 cricket series',
    searchCount: 12450,
  },
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-treddict-darker pb-20">
      <div className="sticky top-0 z-40 bg-treddict-darker/80 backdrop-blur-lg border-b border-white/10">
        <header className="container p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search predictions..."
              className="w-full bg-treddict-dark border border-white/10 rounded-xl px-4 py-3 pl-11 text-white placeholder:text-gray-400"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </header>
      </div>

      <main className="container p-4 space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Trending Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trendingTopics.map((topic) => (
              <Card key={topic.id} className="glass-card hover:border-treddict-purple/20 transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-treddict-purple/10">
                      <Trophy className="text-treddict-purple" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{topic.name}</h3>
                      <p className="text-sm text-gray-400 mt-1">{topic.description}</p>
                      <p className="text-xs text-treddict-purple mt-2">{topic.searchCount.toLocaleString()} searches</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Cricket', 'Football', 'Tennis', 'Basketball', 'Baseball', 'Hockey', 'Rugby', 'Formula 1'].map((sport) => (
              <button
                key={sport}
                className="glass-card p-4 rounded-xl hover:border-treddict-purple/20 transition-all text-left"
              >
                <span className="text-white font-medium">{sport}</span>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Explore;
