import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="bg-white shadow rounded-lg p-4 h-full">
      <nav className="space-y-1">
        <Link
          to="/"
          className={`block px-3 py-2 rounded-md text-sm font-medium ${
            isActive('/')
              ? 'bg-indigo-100 text-indigo-700'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="/profile"
          className={`block px-3 py-2 rounded-md text-sm font-medium ${
            isActive('/profile')
              ? 'bg-indigo-100 text-indigo-700'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Profile
        </Link>
        <div className="pt-2 mt-2 border-t border-gray-200">
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Task Views
          </h3>
          <div className="mt-1 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/')
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Tasks
            </Link>
            <Link
              to="/active-tasks"
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/active-tasks')
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Active Tasks
            </Link>
            <Link
              to="/completed-tasks"
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/completed-tasks')
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Completed Tasks
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;