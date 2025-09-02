import React, { useState } from 'react';
import { Send, Settings } from 'lucide-react';

interface FormData {
  query: string;
  num_posts: number;
  post_length: string;
  tone: string;
}

interface PostGeneratorFormProps {
  onGenerate: (data: FormData) => Promise<void>;
  isLoading: boolean;
}

export const PostGeneratorForm: React.FC<PostGeneratorFormProps> = ({
  onGenerate,
  isLoading,
}) => {
  const [formData, setFormData] = useState<FormData>({
    query: '',
    num_posts: 3,
    post_length: 'medium',
    tone: 'professional',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.query.trim()) {
      onGenerate(formData);
    }
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | number
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-4">
        <div className="flex items-center gap-2 text-white">
          <Settings className="w-5 h-5" />
          <h2 className="text-lg font-semibold">AI Post Generator</h2>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="space-y-2">
          <label htmlFor="query" className="block text-sm font-medium text-slate-700">
            What would you like to write about? *
          </label>
          <textarea
            id="query"
            value={formData.query}
            onChange={(e) => handleInputChange('query', e.target.value)}
            placeholder="Enter your topic, idea, or question here..."
            rows={3}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none shadow-sm hover:shadow-md bg-gradient-to-r from-white to-slate-50"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label htmlFor="num_posts" className="block text-sm font-medium text-slate-700">
              Number of Posts
            </label>
            <input
              type="number"
              id="num_posts"
              min="1"
              max="10"
              value={formData.num_posts}
              onChange={(e) => handleInputChange('num_posts', parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-md bg-gradient-to-r from-white to-slate-50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="post_length" className="block text-sm font-medium text-slate-700">
              Post Length
            </label>
            <select
              id="post_length"
              value={formData.post_length}
              onChange={(e) => handleInputChange('post_length', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gradient-to-r from-white to-slate-50 shadow-sm hover:shadow-md"
            >
              <option value="small">Short & Punchy</option>
              <option value="medium">Medium Length</option>
              <option value="long">Detailed & Long</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="tone" className="block text-sm font-medium text-slate-700">
              Tone & Style
            </label>
            <select
              id="tone"
              value={formData.tone}
              onChange={(e) => handleInputChange('tone', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gradient-to-r from-white to-slate-50 shadow-sm hover:shadow-md"
            >
              <option value="professional">Professional</option>
              <option value="engaging">Engaging & Fun</option>
              <option value="casual">Casual & Friendly</option>
              <option value="thought-leadership">Thought Leadership</option>
              <option value="inspirational">Inspirational</option>
              <option value="educational">Educational</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading || !formData.query.trim()}
          className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Generating Amazing Content...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Generate Posts</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};