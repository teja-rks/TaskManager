import React, { useState, useEffect } from 'react';
import './TaskForm.css';

const TaskForm = ({ currentTask, addTask, updateTask, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    completed: false
  });
  
  useEffect(() => {
    if (currentTask) {
      setFormData({
        title: currentTask.title,
        description: currentTask.description || '',
        completed: currentTask.completed
      });
    }
  }, [currentTask]);
  
  const { title, description, completed } = formData;
  
  const onChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  
  const onSubmit = e => {
    e.preventDefault();
    
    if (currentTask) {
      updateTask(currentTask._id, formData);
    } else {
      addTask(formData);
    }
  };
  
  return (
    <div className="task-form-overlay">
      <div className="task-form">
        <div className="form-header">
          <h3>{currentTask ? 'Edit Task' : 'Add New Task'}</h3>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={onChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={onChange}
              rows="3"
            ></textarea>
          </div>
          
          <div className="form-group checkbox-group">
            <label htmlFor="completed">
              <input
                type="checkbox"
                id="completed"
                name="completed"
                checked={completed}
                onChange={onChange}
              />
              Mark as completed
            </label>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              {currentTask ? 'Update Task' : 'Add Task'}
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;