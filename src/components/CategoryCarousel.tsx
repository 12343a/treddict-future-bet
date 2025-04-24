
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

interface CategoryCarouselProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
  categories,
  activeCategory,
  onCategoryChange
}) => {
  const autoplayPlugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true
    })
  );

  return (
    <Carousel 
      className="w-full max-w-5xl mx-auto"
      opts={{
        align: "start",
        loop: true
      }}
      plugins={[autoplayPlugin.current]}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {categories.map((category) => (
          <CarouselItem key={category} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5">
            <button
              className={cn(
                "w-full px-4 py-2.5 rounded-full whitespace-nowrap transition-all duration-300",
                activeCategory === category 
                  ? "bg-treddict-purple text-white shadow-lg shadow-treddict-purple/30" 
                  : "bg-treddict-dark text-gray-300 hover:bg-treddict-dark/80"
              )}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
  );
};

export default CategoryCarousel;
