import React from 'react';
import { PostCard } from './PostCard';
import { SourcesSection } from './SourcesSection';
import { MetricsDisplay } from './MetricsDisplay';
import { ApiResponse } from '../App';

interface PostResultsProps {
  results: ApiResponse;
  metrics?: {
    latency: number;
  } | null;
}

export const PostResults: React.FC<PostResultsProps> = ({ results, metrics }) => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          Generated Posts
          <span className="bg-blue-100 text-blue-700 text-sm font-medium px-2 py-1 rounded-full">
            {results.posts.length}
          </span>
        </h2>
        
        <div className="grid gap-6">
          {results.posts.map((post, index) => (
            <PostCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <SourcesSection sources={results.sources} />
        {metrics && <MetricsDisplay metrics={metrics} />}
      </div>
    </div>
  );
};