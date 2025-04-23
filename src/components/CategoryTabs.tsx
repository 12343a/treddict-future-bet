
import React, { useState, useRef } from 'react';
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (category: string) => {
    onCategoryChange(category);
    
    // Find the tab element and scroll it into view
    const tabElements = scrollRef.current?.querySelectorAll('[data-category]');
    const targetTab = Array.from(tabElements || []).find(
      (el) => el.getAttribute('data-category') === category
    );
    
    if (targetTab) {
      const container = scrollRef.current;
      const tabRect = targetTab.getBoundingClientRect();
      const containerRect = container?.getBoundingClientRect();
      
      if (container && containerRect) {
        const targetScroll = container.scrollLeft + tabRect.left - containerRect.left - (containerRect.width / 2) + (tabRect.width / 2);
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div 
      className="flex overflow-x-auto scrollbar-none py-4 mb-2 gap-2"
      ref={scrollRef}
    >
      {categories.map(category => (
        <button
          key={category}
          data-category={category}
          className={cn(
            "px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 flex-shrink-0",
            activeCategory === category 
              ? "bg-treddict-purple text-white shadow-lg shadow-treddict-purple/30" 
              : "bg-treddict-dark text-gray-300 hover:bg-treddict-dark/80"
          )}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
