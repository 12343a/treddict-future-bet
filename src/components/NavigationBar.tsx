
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Wallet } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const NavigationBar = () => {
  const navigate = useNavigate();
  
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <h1 className="glowing-logo typing-effect logo-text">
            Treddict
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full bg-treddict-dark hover:bg-treddict-dark/80 transition-colors duration-200">
            <Search size={16} />
          </button>
          <button 
            className="p-2 rounded-full bg-treddict-dark hover:bg-treddict-dark/80 transition-colors duration-200 relative"
            onClick={() => navigate('/wallet')}
          >
            <Wallet size={16} />
            <span className="absolute -top-1 -right-1 text-xs bg-treddict-blue text-white px-1.5 py-0.5 rounded-full">
              $500
            </span>
          </button>
          <ThemeToggle />
          <div className="flex gap-2 ml-2">
            <Button 
              variant="outline" 
              className="hidden sm:flex border-treddict-blue text-treddict-blue hover:bg-treddict-blue/10 transition-colors duration-200" 
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
            <Button 
              className="hidden sm:flex bg-treddict-blue hover:bg-treddict-blue/90 transition-colors duration-200" 
              onClick={() => navigate('/signup')}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
