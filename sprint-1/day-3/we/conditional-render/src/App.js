import './App.css';
import LoginForm from './components/LoginForm';
import {useState} from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      {isAuth ? "" : (<LoginForm setIsAuth={setIsAuth}/>)}
      <Dashboard isAuth={isAuth} />
    </div>
  );
}

export default App;
