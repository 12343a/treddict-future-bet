
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from 'lucide-react';

const TrendingSection = () => {
  const trendingItems = [
    {
      title: "Bitcoin Rally",
      description: "BTC surges past previous resistance levels",
      change: "+12.5%"
    },
    {
      title: "Tech Stocks",
      description: "AI-driven companies lead market gains",
      change: "+8.3%"
    },
    {
      title: "Market Sentiment",
      description: "Bullish indicators suggest strong uptrend",
      change: "+5.7%"
    }
  ];

  return (
    <section className="container py-12">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="text-treddict-purple" size={24} />
        <h2 className="text-2xl font-bold text-gradient-primary">Trending Now</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trendingItems.map((item, index) => (
          <Card key={index} className="glass-card card-hover">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {item.title}
                <span className="text-treddict-blue text-sm">{item.change}</span>
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-1 bg-gradient-to-r from-treddict-blue to-treddict-purple rounded-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
