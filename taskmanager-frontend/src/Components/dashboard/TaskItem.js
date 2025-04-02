import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onEdit, onDelete }) => {
  const { title, description, completed, createdAt } = task;
  
  // Format date
  const formattedDate = new Date(createdAt).toLocaleDateString();
  
  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <div className="task-content">
        <h3 className="task-title">{title}</h3>
        {description && <p className="task-description">{description}</p>}
        <div className="task-meta">
          <span className="task-date">Created: {formattedDate}</span>
          <span className="task-status">
            Status: {completed ? 'Completed' : 'Pending'}
          </span>
        </div>
      </div>
      <div className="task-actions">
        <button className="btn btn-edit" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-delete" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;