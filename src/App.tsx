import React, { useState } from 'react';
import { PostGeneratorForm } from './components/PostGeneratorForm';
import { PostResults } from './components/PostResults';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { Header } from './components/Header';

export interface GeneratedPost {
  post: string;
  cta: string;
  hashtags: string[];
}

export interface ApiResponse {
  posts: GeneratedPost[];
  outline: {
    [key: string]: string[];
  };
  sources: Array<{
    title: string;
    url: string;
  }>;
  metadata?: {
    latency_ms: number;
    total_tokens: number;
  };
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<ApiResponse | null>(null);
  const [requestMetrics, setRequestMetrics] = useState<{
    latency: number;
    tokens: number;
  } | null>(null);

  const handleGenerate = async (formData: {
    query: string;
    num_posts: number;
    post_length: string;
    tone: string;
  }) => {
    setIsLoading(true);
    setError(null);
    setResults(null);
    setRequestMetrics(null);

    const startTime = performance.now();

    try {
      const response = await fetch(
        'https://balaji7761-linkedin-post-generator.hf.space/generate',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        let errorMessage = `API request failed with status ${response.status}`;
        
        if (response.status === 500) {
          errorMessage = 'The AI service is temporarily unavailable. Please try again in a few moments.';
        } else if (response.status === 429) {
          errorMessage = 'Too many requests. Please wait a moment before trying again.';
        } else if (response.status === 400) {
          errorMessage = 'Invalid request. Please check your input and try again.';
        }
        
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const endTime = performance.now();
      const clientLatency = Math.round(endTime - startTime);
      
      // Debug: Log the full response to see what's available
      console.log('API Response:', data);
      
      // Extract server latency from various possible locations
      const serverLatency = data.metadata?.latency_ms || data.latency_ms || data.response_time || clientLatency;
      
      setRequestMetrics({
        latency: serverLatency
      });
      
      setResults(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred. Please check your internet connection and try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          <PostGeneratorForm onGenerate={handleGenerate} isLoading={isLoading} />
          
          {isLoading && <LoadingSpinner />}
          
          {error && <ErrorMessage message={error} onDismiss={() => setError(null)} />}
          
          {results && <PostResults results={results} metrics={requestMetrics} />}
        </div>
      </main>
    </div>
  );
}

export default App;