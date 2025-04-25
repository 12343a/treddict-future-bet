
import React from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackToHomeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-200"
    >
      <X className="h-5 w-5 text-white" />
    </button>
  );
};

export default BackToHomeButton;
