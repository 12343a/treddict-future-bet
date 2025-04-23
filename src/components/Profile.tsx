
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { UserRound, UserCog } from 'lucide-react';

interface ProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const Profile: React.FC<ProfileProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-treddict-dark border-treddict-purple/20 max-w-md">
        <div className="space-y-6">
          {/* Profile Header */}
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full bg-treddict-purple/20 flex items-center justify-center">
              <UserRound className="w-12 h-12 text-treddict-purple" />
            </div>
            <div>
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-sm text-gray-400">Member since April 2025</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="glass-card p-3 text-center">
              <div className="text-2xl font-bold text-treddict-purple">47</div>
              <div className="text-xs text-gray-400">Predictions</div>
            </div>
            <div className="glass-card p-3 text-center">
              <div className="text-2xl font-bold text-treddict-blue">72%</div>
              <div className="text-xs text-gray-400">Accuracy</div>
            </div>
            <div className="glass-card p-3 text-center">
              <div className="text-2xl font-bold text-treddict-red">$2.4K</div>
              <div className="text-xs text-gray-400">Portfolio</div>
            </div>
          </div>

          {/* Profile Actions */}
          <div className="space-y-2">
            <button className="w-full glass-card p-3 flex items-center justify-between hover:bg-white/5">
              <span className="flex items-center gap-2">
                <UserCog className="w-5 h-5" />
                <span>Settings</span>
              </span>
              <span className="text-gray-400">→</span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Profile;
