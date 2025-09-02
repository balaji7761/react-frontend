import React from 'react';
import { AlertCircle, X } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onDismiss: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onDismiss,
}) => {
  return (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 animate-in slide-in-from-top-2 duration-300 shadow-lg">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="text-red-800 font-semibold mb-1">
            Something went wrong
          </h3>
          <p className="text-red-700">
            {message}
          </p>
          <p className="text-red-600 text-sm mt-2">
            💡 Try refreshing the page or checking your internet connection
          </p>
        </div>
        <button
          onClick={onDismiss}
          className="text-red-600 hover:text-red-800 hover:bg-red-100 rounded-full p-1 transition-all duration-200"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};