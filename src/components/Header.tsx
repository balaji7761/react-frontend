import React from 'react';
import { Linkedin, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-blue-600">
            <Linkedin className="w-8 h-8" />
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              LinkedIn Post Generator
            </h1>
            <p className="text-slate-600 text-sm">
              Create engaging LinkedIn content with AI
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};