"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import AnalysisItem from './AnalysisItem';

const analyses = [
  'Análisis 1', 'Análisis 2', 'Análisis 3', 'Análisis 4', 'Análisis 5',
  'Análisis 6', 'Análisis 7', 'Análisis 8', 'Análisis 9', 'Análisis 10',
  'Análisis 11', 'Análisis 12', 'Análisis 13', 'Análisis 14', 'Análisis 15',
  'Análisis 16', 'Análisis 17', 'Análisis 18', 'Análisis 19', 'Análisis 20'
];

const ClinicalAnalysis = () => {
  const [selectedAnalyses, setSelectedAnalyses] = useState([]);

  const toggleAnalysis = (analysis) => {
    setSelectedAnalyses((prevSelected) =>
      prevSelected.includes(analysis)
        ? prevSelected.filter((item) => item !== analysis)
        : [...prevSelected, analysis]
    );
  };

  return (
    <div className="w-full mx-auto p-4 h-5/6 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Análisis Clínicos</h2>
      <div className="h-5/6 flex flex-col">
        <div className="space-y-4 flex-grow overflow-y-auto scrollbar-hide"> {/* Añade la clase personalizada */}
          <div className="space-y-4">
            {analyses.map((analysis) => (
              <AnalysisItem
                key={analysis}
                analysis={analysis}
                isSelected={selectedAnalyses.includes(analysis)}
                onToggle={() => toggleAnalysis(analysis)}
              />
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <Link href="/personal-page" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-200">
            
              Volver
          
          </Link>
          <Link href={"?section=clinical-result"} className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition-colors duration-200">
            Siguiente
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClinicalAnalysis;