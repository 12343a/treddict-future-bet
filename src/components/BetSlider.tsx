
import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';

interface BetSliderProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
}

const BetSlider: React.FC<BetSliderProps> = ({
  value,
  onChange,
  min,
  max,
  step = 1
}) => {
  const handleValueChange = (newValues: number[]) => {
    onChange(newValues[0]);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  // Predefined quick set values
  const quickValues = [5, 10, 25, 50, 100];

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <SliderPrimitive.Root
          className="relative flex items-center w-full h-6 touch-none"
          defaultValue={[value]}
          value={[value]}
          onValueChange={handleValueChange}
          min={min}
          max={max}
          step={step}
        >
          <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-treddict-dark">
            <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-treddict-blue to-treddict-purple rounded-full" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb 
            className="block h-5 w-5 rounded-full border border-primary/50 bg-treddict-purple shadow-[0_0_10px_rgba(139,92,246,0.5)] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" 
          />
        </SliderPrimitive.Root>
        <span className="bg-treddict-dark px-3 py-1 rounded-lg min-w-16 text-center font-medium">
          {value}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2 justify-between">
        {quickValues.map((quickValue) => (
          <button
            key={quickValue}
            className={cn(
              'py-1 px-3 text-sm rounded-md transition-all',
              value === quickValue 
                ? 'bg-treddict-purple text-white' 
                : 'bg-treddict-dark text-gray-300 hover:bg-treddict-dark/80'
            )}
            onClick={() => onChange(quickValue)}
          >
            {quickValue}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BetSlider;
