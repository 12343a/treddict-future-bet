
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
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-slate-950 pb-20">
      <div className="sticky top-0 z-40 backdrop-blur-lg border-b border-white/10 bg-indigo-950/80">
        <header className="container p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search predictions..."
              className="w-full bg-slate-900/50 border border-indigo-500/20 rounded-xl px-4 py-3 pl-11 text-white placeholder:text-gray-400 focus:border-indigo-400 transition-colors"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" size={18} />
          </div>
        </header>
      </div>

      <main className="container p-4 space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Trending Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trendingTopics.map((topic) => (
              <Card key={topic.id} className="bg-slate-900/50 hover:bg-slate-900/70 border-indigo-500/20 hover:border-indigo-400/30 transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10">
                      <Trophy className="text-indigo-400" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{topic.name}</h3>
                      <p className="text-sm text-indigo-200/70 mt-1">{topic.description}</p>
                      <p className="text-xs text-indigo-400 mt-2">{topic.searchCount.toLocaleString()} searches</p>
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
                className="bg-slate-900/50 hover:bg-slate-900/70 border border-indigo-500/20 hover:border-indigo-400/30 p-4 rounded-xl transition-all duration-300 text-left group"
              >
                <span className="text-white font-medium group-hover:text-indigo-400 transition-colors">{sport}</span>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Explore;
