
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const TrendingSection = () => {
  const trendingItems = [
    {
      title: "MI vs SRH",
      description: "Mumbai's batting lineup favored",
      change: "+8.2%"
    },
    {
      title: "IND vs PAK",
      description: "Asia Cup Final predictions",
      change: "+15.5%"
    },
    {
      title: "RCB vs CSK",
      description: "Chennai's bowling strength key factor",
      change: "+6.3%"
    },
    {
      title: "KKR vs LSG",
      description: "Close contest expected",
      change: "+4.8%"
    },
    {
      title: "GT vs DC",
      description: "Gujarat's winning streak",
      change: "+10.2%"
    },
    {
      title: "RR vs PBKS",
      description: "Batting pitch advantage",
      change: "+7.9%"
    }
  ];

  const autoplayOptions = {
    delay: 4000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
    direction: 'reverse' as const,
  };

  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      direction: 'rtl'
    },
    [Autoplay(autoplayOptions)]
  );

  return (
    <section className="container py-6">
      <div className="flex items-start gap-6">
        <div className="flex-none w-48">
          <div className="sticky top-24 flex items-center gap-2">
            <TrendingUp className="text-treddict-purple" size={24} />
            <h2 className="text-2xl font-bold text-gradient-primary">Trending</h2>
          </div>
        </div>
        
        <div className="flex-grow overflow-hidden" ref={emblaRef}>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {trendingItems.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <Card className="bg-black h-24 rounded-lg glass-card card-hover">
                    <CardHeader className="p-2">
                      <CardTitle className="flex justify-between items-center text-sm text-white">
                        {item.title}
                        <span className="text-treddict-blue text-xs">{item.change}</span>
                      </CardTitle>
                      <CardDescription className="text-xs text-gray-300">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-2 pt-0">
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
