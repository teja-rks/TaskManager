import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return <div className="no-tasks">No tasks yet. Click "Add New Task" to get started!</div>;
  }
  
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task._id}
          task={task}
          onEdit={() => onEdit(task)}
          onDelete={() => onDelete(task._id)}
        />
      ))}
    </div>
  );
};

export default TaskList;