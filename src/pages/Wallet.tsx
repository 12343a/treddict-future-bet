
import React from 'react';

const Wallet = () => {
  return (
    <div className="min-h-screen bg-treddict-darker p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Your Wallet</h1>
        
        <div className="glass-card p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Available Balance</span>
          </div>
          <div className="text-4xl font-bold mb-6">$500</div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-treddict-dark/50 rounded-lg">
              <span>Total Earnings</span>
              <span className="font-semibold text-treddict-blue">$750</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-treddict-dark/50 rounded-lg">
              <span>Current Bets</span>
              <span className="font-semibold text-treddict-purple">$250</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
