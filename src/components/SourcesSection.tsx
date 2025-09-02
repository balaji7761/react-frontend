import React from 'react';
import { ExternalLink, Link } from 'lucide-react';

interface Source {
  title: string;
  url: string;
}

interface SourcesSectionProps {
  sources: Source[];
}

export const SourcesSection: React.FC<SourcesSectionProps> = ({ sources }) => {
  if (!sources || sources.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <Link className="w-5 h-5 text-green-600" />
          <h3 className="font-semibold text-slate-800">Sources & References</h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-3">
          {sources.map((source, index) => (
            <a
              key={index}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-slate-50 to-green-50 hover:from-green-100 hover:to-emerald-100 rounded-lg transition-all duration-200 group border border-slate-100 hover:border-green-200 shadow-sm hover:shadow-md"
            >
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-green-600 transition-colors duration-200 flex-shrink-0" />
              <span className="text-slate-700 group-hover:text-green-700 transition-colors duration-200 truncate font-medium">
                {source.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};