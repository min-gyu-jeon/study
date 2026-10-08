import { BrowserRouter, Routes, Route, Navigate, NavLink } from 'react-router-dom';
import User from './pages/User';
import Post from './pages/Post';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="app-header">
          <div className="logo-container">
            <span className="logo-icon">🌐</span>
            <span className="logo-text">Dashboard FX</span>
          </div>
          <nav className="nav-menu">
            <NavLink 
              to="/users" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              👥 Users
            </NavLink>
            <NavLink 
              to="/posts" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              📝 Posts
            </NavLink>
          </nav>
        </header>

        <main className="app-content">
          <Routes>
            <Route path="/users" element={<User />} />
            <Route path="/posts" element={<Post />} />
            {/* Redirect root to users */}
            <Route path="/" element={<Navigate to="/users" replace />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/users" replace />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>© 2026 Dashboard FX. Built with React & react-router-dom.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
