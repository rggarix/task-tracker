import React from 'react';
import TaskItem from './Taskitem';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  return (
    <ul className="w-full space-y-4 divide-y divide-gray-200">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
