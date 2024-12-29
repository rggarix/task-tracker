import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../redux/taskSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';

const UpdateTaskPage = () => {
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks.tasks);
  const taskToEdit = tasks.find((task) => task.id === parseInt(id));
  const [title, setTitle] = useState(taskToEdit?.title || '');
  const [completed, setCompleted] = useState(taskToEdit?.completed || false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTask({ id: parseInt(id), title, completed }));
    navigate('/tasks');
  };

  return (
    <div className="max-h-screen bg-gray-100 flex flex-col items-center justify-center w-full">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8 w-full">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Update Task</h2>
          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="flex flex-col">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Task Title
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
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
              Update Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTaskPage;