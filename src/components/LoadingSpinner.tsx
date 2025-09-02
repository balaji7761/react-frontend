import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-12 animate-in fade-in duration-500">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="relative">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
          <div className="absolute inset-0 w-12 h-12 border-4 border-blue-200 rounded-full animate-pulse" />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-800 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI is Working Its Magic
          </h3>
          <p className="text-slate-600 text-base">
            Crafting engaging LinkedIn content tailored to your audience...
          </p>
        </div>
        <div className="w-full max-w-sm bg-slate-200 rounded-full h-3 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 h-3 rounded-full animate-pulse shadow-lg" 
               style={{ width: '75%' }} />
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    </div>
  );
};