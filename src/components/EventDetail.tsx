
import React, { useState } from 'react';
import { ArrowLeft, Clock, Users, TrendingUp, AlertCircle } from 'lucide-react';
import { EventData } from './EventCard';
import BetSlider from './BetSlider';

interface EventDetailProps {
  event: EventData;
  onClose: () => void;
}

const EventDetail: React.FC<EventDetailProps> = ({ event, onClose }) => {
  const [betAmount, setBetAmount] = useState<number>(10);
  const [selectedOption, setSelectedOption] = useState<'yes' | 'no' | null>(null);
  const [showBetForm, setShowBetForm] = useState<boolean>(false);
  
  // Calculate payout based on current odds
  const calculatePayout = () => {
    if (!selectedOption || !betAmount) return 0;
    
    const odds = selectedOption === 'yes' ? 
      (100 / event.yesPercentage) : 
      (100 / event.noPercentage);
    
    return (betAmount * odds).toFixed(2);
  };
  
  const handleOptionSelect = (option: 'yes' | 'no') => {
    setSelectedOption(option);
    setShowBetForm(true);
  };
  
  const handlePlaceBet = () => {
    // Place bet logic would go here
    console.log(`Placed ${betAmount} on ${selectedOption} for event ${event.id}`);
    // Show animation or feedback
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-treddict-darker/95 overflow-y-auto">
      <div className="container max-w-md mx-auto py-6 px-4">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-treddict-dark hover:bg-treddict-dark/80 mr-3"
          >
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-xl font-bold flex-1">Event Details</h2>
        </div>
        
        {/* Event content */}
        <div className="glass-card rounded-xl p-4 mb-4">
          {event.imageUrl && (
            <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-treddict-dark">
              <img 
                src={event.imageUrl} 
                alt={event.title} 
                className="w-full h-full object-cover" 
              />
            </div>
          )}
          
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-gray-300 mb-4">{event.description}</p>
          
          {/* Stats */}
          <div className="flex justify-between text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{event.endTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={16} />
              <span>{event.tradersCount} traders</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp size={16} />
              <span>{event.liquidity}</span>
            </div>
          </div>
          
          {/* Probability graph */}
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Current Probability</span>
              <span className="text-sm font-medium">{event.yesPercentage}% Yes / {event.noPercentage}% No</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden w-full flex">
              <div 
                className="bg-treddict-blue h-full shimmer"
                style={{ width: `${event.yesPercentage}%` }}
              />
              <div 
                className="bg-treddict-red h-full shimmer"
                style={{ width: `${event.noPercentage}%` }} 
              />
            </div>
          </div>
          
          {/* Bet buttons */}
          {!showBetForm && (
            <div className="flex gap-3">
              <button 
                onClick={() => handleOptionSelect('yes')} 
                className="yes-btn flex-1 py-3 text-lg font-semibold transition-all hover:shadow-[0_0_15px_rgba(30,174,219,0.5)]"
              >
                YES
              </button>
              <button 
                onClick={() => handleOptionSelect('no')} 
                className="no-btn flex-1 py-3 text-lg font-semibold transition-all hover:shadow-[0_0_15px_rgba(234,56,76,0.5)]"
              >
                NO
              </button>
            </div>
          )}
        </div>
        
        {/* Bet form */}
        {showBetForm && (
          <div className="glass-card rounded-xl p-4 animate-fade-in">
            <div className="text-center mb-4">
              <div className="text-lg font-medium">
                You're betting on 
                <span className={selectedOption === 'yes' ? " text-treddict-blue" : " text-treddict-red"}>
                  {selectedOption === 'yes' ? ' YES' : ' NO'}
                </span>
              </div>
              <div className="text-sm text-gray-300">Current odds: {selectedOption === 'yes' ? event.yesPercentage : event.noPercentage}%</div>
            </div>
            
            <div className="mb-6">
              <label className="text-sm text-gray-400 block mb-1">Bet Amount</label>
              <BetSlider 
                value={betAmount} 
                onChange={setBetAmount} 
                min={1} 
                max={100} 
              />
            </div>
            
            <div className="bg-treddict-dark p-4 rounded-lg mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-gray-400">You're betting:</span>
                <span className="font-medium">{betAmount} credits</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Potential payout:</span>
                <span className="font-medium text-treddict-purple">{calculatePayout()} credits</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setShowBetForm(false)}
                className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full"
              >
                Cancel
              </button>
              <button 
                onClick={handlePlaceBet}
                className={`flex-1 py-3 font-medium text-white rounded-full ${
                  selectedOption === 'yes' ? 'bg-treddict-blue hover:bg-treddict-blue/90' : 'bg-treddict-red hover:bg-treddict-red/90'
                }`}
              >
                Place Bet
              </button>
            </div>
            
            <div className="flex items-center gap-2 mt-4 text-xs text-gray-400 justify-center">
              <AlertCircle size={12} />
              <span>Bets are final once placed and cannot be canceled</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
