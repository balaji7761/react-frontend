import React from 'react';
import { Clock, Zap } from 'lucide-react';

interface MetricsDisplayProps {
  metrics: {
    latency: number;
  };
}

export const MetricsDisplay: React.FC<MetricsDisplayProps> = ({ metrics }) => {
  const formatLatency = (ms: number) => {
    if (ms < 1000) {
      return `${ms}ms`;
    }
    return `${(ms / 1000).toFixed(1)}s`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="bg-gradient-to-r from-violet-50 to-purple-50 px-6 py-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-violet-600" />
          <h3 className="font-semibold text-slate-800">Performance Metrics</h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-600">Response Time</p>
            <p className="text-xl font-bold text-blue-700">
              {formatLatency(metrics.latency)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};