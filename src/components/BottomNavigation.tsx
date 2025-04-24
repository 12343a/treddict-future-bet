
import React from 'react';
import { Home, Search, Zap, LineChart, User } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useNavigate } from 'react-router-dom';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ 
  activeTab, 
  onTabChange 
}) => {
  const navigate = useNavigate();
  
  const tabs = [
    { id: 'home', label: 'Home', icon: Home, route: '/' },
    { id: 'explore', label: 'Explore', icon: Search, route: '/explore' },
    { id: 'predict', label: 'Predict', icon: Zap, route: '/predict' },
    { id: 'portfolio', label: 'Portfolio', icon: LineChart, route: '/portfolio' },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const handleTabClick = (tab: { id: string; route?: string }) => {
    onTabChange(tab.id);
    if (tab.route) {
      navigate(tab.route);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-treddict-darker/80 backdrop-blur-lg border-t border-white/10 pb-safe">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full transition-all", 
                isActive ? "text-treddict-purple" : "text-gray-400"
              )}
              onClick={() => handleTabClick(tab)}
            >
              <div className={cn(
                "flex items-center justify-center", 
                isActive ? "pulse-glow" : ""
              )}>
                <Icon size={isActive ? 22 : 20} />
              </div>
              <span className={cn(
                "text-xs mt-1 font-medium", 
                isActive ? "opacity-100" : "opacity-80"
              )}>
                {tab.label}
              </span>
              {isActive && (
                <div className="absolute -top-1 w-1 h-1 rounded-full bg-treddict-purple" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
