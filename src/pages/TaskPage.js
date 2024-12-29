import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask, updateTask, deleteTask } from '../redux/taskSlice';
import TaskForm from '../components/Taskform';
import TaskList from '../components/Tasklist';
import Filter from '../components/Filter';
import Header from '../components/Header';
const TaskPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filteredTasks = tasks.filter((task) => {
    if (filterStatus === 'all') return true;
    return filterStatus === 'completed' ? task.completed : !task.completed;
  });

  const handleAddTask = (task) => {
    dispatch(addTask({ ...task, id: Date.now() }));
  };

  const handleUpdateTask = (task) => {
    dispatch(updateTask(task));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex justify-center items-center w-full">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col items-center w-full">
        <Header />
        <div className="space-y-6 w-full">
          <div className="bg-white p-6 rounded-lg shadow-sm w-full border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <TaskForm onSubmit={handleAddTask} />
          </div>
          <div className="flex justify-center">
            <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
          </div>
          <div className="mt-4">
            <TaskList
              tasks={filteredTasks}
              onUpdate={handleUpdateTask}
              onDelete={handleDeleteTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;