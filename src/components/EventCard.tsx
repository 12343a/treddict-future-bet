
import React from 'react';
import { Clock, TrendingUp, Users } from 'lucide-react';
import { cn } from "@/lib/utils";

export interface EventData {
  id: string;
  title: string;
  description: string;
  category: string;
  endTime: string;
  yesPercentage: number;
  noPercentage: number;
  tradersCount: number;
  liquidity: string;
  isHot?: boolean;
  imageUrl?: string;
}

interface EventCardProps {
  event: EventData;
  onClick: (eventId: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  const formattedLiquidity = event.liquidity;
  const timeRemaining = event.endTime;
  
  // Calculate progress bar widths
  const yesWidth = `${event.yesPercentage}%`;
  const noWidth = `${event.noPercentage}%`;

  return (
    <div 
      className="glass-card card-hover rounded-xl p-4 relative overflow-hidden"
      onClick={() => onClick(event.id)}
    >
      {/* Hot marker */}
      {event.isHot && (
        <div className="absolute top-0 right-0 bg-treddict-red text-white text-xs font-semibold px-2 py-1 rounded-bl-lg">
          HOT 🔥
        </div>
      )}

      {/* Card content */}
      <div className="space-y-3">
        {/* Title and image */}
        <div className="flex items-center gap-3">
          {event.imageUrl && (
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-treddict-dark flex-shrink-0">
              <img 
                src={event.imageUrl} 
                alt={event.title} 
                className="w-full h-full object-cover" 
              />
            </div>
          )}
          <h3 className="font-bold text-white text-lg leading-tight">
            {event.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300">
          {event.description}
        </p>
        
        {/* Stats row */}
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{timeRemaining}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{event.tradersCount} traders</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp size={14} />
            <span>{formattedLiquidity}</span>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden w-full flex">
          <div 
            className="bg-treddict-blue h-full shimmer"
            style={{ width: yesWidth }}
          />
          <div 
            className="bg-treddict-red h-full shimmer"
            style={{ width: noWidth }} 
          />
        </div>
        
        {/* Yes/No buttons */}
        <div className="flex gap-2 pt-2">
          <button 
            className={cn(
              "yes-btn flex-1 py-2 transition-all",
              "hover:shadow-[0_0_15px_rgba(30,174,219,0.5)]"
            )}
          >
            YES ({event.yesPercentage}%)
          </button>
          <button 
            className={cn(
              "no-btn flex-1 py-2 transition-all",
              "hover:shadow-[0_0_15px_rgba(234,56,76,0.5)]"
            )}
          >
            NO ({event.noPercentage}%)
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
