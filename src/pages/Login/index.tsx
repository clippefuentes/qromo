import { useContext } from 'react';
import AuthContext from '../../context/AuthProvider';

const Login: React.FC = () => {
  const auth = useContext(AuthContext);

  const handleLogin = () => {
    auth?.login();
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
