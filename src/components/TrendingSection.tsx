
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
    },
    {
      title: "IPL Finals",
      description: "Match predictions trending upward",
      change: "+15.2%"
    },
    {
      title: "Crypto Market",
      description: "Overall market sentiment positive",
      change: "+9.1%"
    }
  ];

  return (
    <section className="container py-8">
      <div className="flex items-start gap-6">
        <div className="flex-none w-48">
          <div className="sticky top-24 flex items-center gap-2">
            <TrendingUp className="text-treddict-purple" size={24} />
            <h2 className="text-2xl font-bold text-gradient-primary">Trending</h2>
          </div>
        </div>
        
        <div className="flex-grow overflow-hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {trendingItems.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                  <Card className="glass-card card-hover h-full">
                    <CardHeader className="p-4">
                      <CardTitle className="flex justify-between items-center text-base">
                        {item.title}
                        <span className="text-treddict-blue text-sm">{item.change}</span>
                      </CardTitle>
                      <CardDescription className="text-sm">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="h-1 bg-gradient-to-r from-treddict-blue to-treddict-purple rounded-full" />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
