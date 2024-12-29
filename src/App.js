import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';
import TaskPage from './pages/TaskPage';
import UpdateTaskPage from './pages/UpdateTaskPage';

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center w-full">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/tasks"
            element={token ? <TaskPage /> : <Navigate to="/login" />}
          />
          <Route
          path="/tasks/update/:id"
          element={token ? <UpdateTaskPage /> : <Navigate to="/login" />}
        />
          <Route path="*" element={<Navigate to={token ? "/tasks" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;