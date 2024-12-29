import React, { useState } from 'react';

const TaskForm = ({ onSubmit, initialTask }) => {
  const [title, setTitle] = useState(initialTask?.title || '');
  const [completed, setCompleted] = useState(initialTask?.completed || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, completed });
    setTitle('');
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="flex flex-col">
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          placeholder="Enter task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transition duration-200 cursor-pointer"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
        <label className="text-gray-700 font-medium cursor-pointer select-none">
          Completed
        </label>
      </div>
      <button 
        type="submit" 
        className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
      >
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;