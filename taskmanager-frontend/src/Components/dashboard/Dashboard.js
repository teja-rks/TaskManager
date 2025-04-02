import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './Dashboard.css';

const Dashboard = ({ user }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  // Set up axios auth header
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
    }
    
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/api/tasks');
      setTasks(res.data);
      setError('');
    } catch (err) {
      setError('Failed to load tasks. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskData) => {
    try {
      const res = await axios.post('/api/tasks', taskData);
      setTasks([...tasks, res.data]);
      setShowForm(false);
      setError('');
    } catch (err) {
      setError('Failed to add task. Please try again.');
      console.error(err);
    }
  };

  const updateTask = async (id, taskData) => {
    try {
      const res = await axios.put(`/api/tasks/${id}`, taskData);
      setTasks(tasks.map(task => task._id === id ? res.data : task));
      setShowForm(false);
      setCurrentTask(null);
      setError('');
    } catch (err) {
      setError('Failed to update task. Please try again.');
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
      setError('');
    } catch (err) {
      setError('Failed to delete task. Please try again.');
      console.error(err);
    }
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setCurrentTask(null);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome, {user?.name}</h2>
        <button 
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
        >
          Add New Task
        </button>
      </div>
      
      {error && <div className="alert-error">{error}</div>}
      
      {showForm && (
        <TaskForm 
          currentTask={currentTask}
          addTask={addTask}
          updateTask={updateTask} 
          onClose={handleFormClose}
        />
      )}
      
      {loading ? (
        <div className="loading">Loading tasks...</div>
      ) : (
        <TaskList 
          tasks={tasks} 
          onEdit={handleEdit} 
          onDelete={deleteTask} 
        />
      )}
    </div>
  );
};

export default Dashboard;