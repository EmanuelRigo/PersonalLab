import React from 'react';

const AnalysisItem = ({ analysis, isSelected, onToggle }) => {
  return (
    <div
      className={`p-4 border rounded cursor-pointer flex justify-between items-center ${
        isSelected ? 'bg-green-200' : 'bg-white'
      }`}
      onClick={onToggle}
    >
      <span>{analysis}</span>
      <button className="bg-sky-600 text-white px-2 py-1 rounded hover:bg-sky-700 transition-colors duration-200">
        INFO
      </button>
    </div>
  );
};

export default AnalysisItem;