import React from 'react';
import { useNavigate } from 'react-router-dom';
const TaskItem = ({ task, onUpdate, onDelete }) => {
  const navigate = useNavigate();
  const handleToggle = () => {
    onUpdate({ ...task, completed: !task.completed });
  };
  const handleEdit = () => {
    navigate(`/tasks/update/${task.id}`);
  };
  return (
    <li className="py-4 px-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 first:border-t border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transition duration-200 cursor-pointer"
          checked={task.completed}
          onChange={handleToggle}
        />
        <span className={`text-gray-700 font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
          {task.title}
        </span>
      </div>
      <div className="flex justify-end">
        <button
          className="px-3 py-1.5 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mr-2"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="px-3 py-1.5 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
