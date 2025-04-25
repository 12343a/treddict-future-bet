import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UserRound, Settings, LogOut, Edit, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BackToHomeButton from '@/components/BackToHomeButton';

interface ProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const Profile: React.FC<ProfileProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logout logic will be added after Supabase integration
    onClose();
    navigate('/login');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-treddict-dark border-treddict-purple/20 max-w-2xl">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Profile</h2>
            <BackToHomeButton />
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-treddict-purple/20 flex items-center justify-center">
                <UserRound className="w-16 h-16 text-treddict-purple" />
              </div>
              <button className="absolute bottom-0 right-0 p-1.5 bg-treddict-purple rounded-full">
                <Edit size={14} className="text-white" />
              </button>
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-sm text-gray-400">@johndoe</p>
              <p className="text-sm text-gray-400">Member since April 2025</p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" onClick={() => navigate('/login')}>
                  <User className="w-4 h-4 mr-1" />
                  Login
                </Button>
                <Button variant="outline" size="sm" onClick={() => navigate('/signup')}>
                  <UserRound className="w-4 h-4 mr-1" />
                  Sign Up
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-treddict-purple">47</div>
              <div className="text-xs text-gray-400">Predictions</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-treddict-blue">72%</div>
              <div className="text-xs text-gray-400">Accuracy</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-treddict-red">$2.4K</div>
              <div className="text-xs text-gray-400">Portfolio</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-treddict-purple">12</div>
              <div className="text-xs text-gray-400">Following</div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Recent Activity</h3>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card p-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-treddict-purple/10 flex items-center justify-center">
                      <UserRound className="w-5 h-5 text-treddict-purple" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Predicted Bitcoin price</p>
                      <p className="text-xs text-gray-400">2 hours ago</p>
                    </div>
                  </div>
                  <span className="text-treddict-blue">+$500</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <button className="w-full glass-card p-3 flex items-center justify-between hover:bg-white/5">
              <span className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </span>
              <span className="text-gray-400">→</span>
            </button>
            <button 
              onClick={handleLogout}
              className="w-full glass-card p-3 flex items-center justify-between hover:bg-white/5 text-treddict-red"
            >
              <span className="flex items-center gap-2">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
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
