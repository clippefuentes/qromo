import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useContext, Suspense, lazy } from 'react';
import './App.css';
import AuthContext from './context/AuthProvider';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
function App() {
  const auth = useContext(AuthContext);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/dashboard">Dashboard</Link>
        {!auth?.isAuthenticated ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={auth?.logout}>Logout</button>
        )}
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
