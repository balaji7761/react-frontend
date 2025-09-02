import React, { useState } from 'react';
import { Copy, Check, MessageSquare, Megaphone, Hash } from 'lucide-react';
import { GeneratedPost } from '../App';

interface PostCardProps {
  post: GeneratedPost;
  index: number;
}

export const PostCard: React.FC<PostCardProps> = ({ post, index }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const fullPost = `${post.post}\n\n${post.cta}\n\n${post.hashtags.map(tag => `#${tag}`).join(' ')}`;
    
    try {
      await navigator.clipboard.writeText(fullPost);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-blue-300">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-slate-800">LinkedIn Post {index + 1}</h3>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </button>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-4 h-4 text-blue-600" />
            <h4 className="font-medium text-slate-800 text-sm uppercase tracking-wide">Post Content</h4>
          </div>
          <p className="text-slate-700 leading-relaxed whitespace-pre-wrap text-base">
            {post.post}
          </p>
        </div>
        
        {post.cta && (
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4 border-l-4 border-orange-500">
            <div className="flex items-center gap-2 mb-2">
              <Megaphone className="w-4 h-4 text-orange-600" />
              <h4 className="font-medium text-slate-800 text-sm uppercase tracking-wide">Call to Action</h4>
            </div>
            <p className="text-orange-800 font-medium">
              {post.cta}
            </p>
          </div>
        )}
        
        {post.hashtags && post.hashtags.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Hash className="w-4 h-4 text-purple-600" />
              <h4 className="font-medium text-slate-800 text-sm uppercase tracking-wide">Hashtags</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.hashtags.map((hashtag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200 text-purple-800 text-sm font-medium rounded-full transition-all duration-200 cursor-default border border-purple-200 hover:border-purple-300 shadow-sm hover:shadow-md"
                >
                  #{hashtag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};