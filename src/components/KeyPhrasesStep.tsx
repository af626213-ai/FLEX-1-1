import React from 'react';
import { KeyPhrase } from '../data/episodes';
import { BookOpen } from 'lucide-react';

interface KeyPhrasesStepProps {
  phrases: KeyPhrase[];
  onNext: () => void;
}

export const KeyPhrasesStep: React.FC<KeyPhrasesStepProps> = ({ phrases, onNext }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-slate-100">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Step 3: Key Phrases</h2>
        <p className="text-slate-500">Learn important expressions from the story.</p>
      </div>

      <div className="w-full space-y-6 mb-8">
        {phrases.map((phrase, index) => (
          <div key={index} className="p-6 bg-indigo-50/50 rounded-xl border border-indigo-100">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg mt-1">
                <BookOpen size={20} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-800">{phrase.phrase}</h3>
                <p className="text-indigo-600 font-medium">{phrase.explanation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onNext}
        className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
      >
        Next Step
      </button>
    </div>
  );
};
