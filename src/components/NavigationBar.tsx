import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Wallet, Download } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
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
            <Search size={16} className="text-white" />
          </button>
          <button 
            className="p-2 rounded-full bg-treddict-dark hover:bg-treddict-dark/80 transition-colors duration-200"
            onClick={() => navigate('/wallet')}
          >
            <Wallet size={16} className="text-white" />
          </button>
          <Button 
            className="hidden sm:flex px-4 py-2 bg-gradient-to-r from-treddict-blue via-treddict-purple to-treddict-red hover:opacity-90 transition-all duration-300 animate-pulse-glow"
            onClick={() => window.open('#', '_blank')}
          >
            <Download className="mr-2" size={16} />
            Download App
          </Button>
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
