import React from 'react';

const Filter = ({ filterStatus, setFilterStatus }) => {
  return (
    <div className="flex space-x-4">
      <button
        className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
          filterStatus === 'all'
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
        }`}
        onClick={() => setFilterStatus('all')}
      >
        All
      </button>
      <button
        className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
          filterStatus === 'completed'
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
        }`}
        onClick={() => setFilterStatus('completed')}
      >
        Completed
      </button>
      <button
        className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
          filterStatus === 'pending'
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
        }`}
        onClick={() => setFilterStatus('pending')}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;