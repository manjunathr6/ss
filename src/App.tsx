import React, {useState} from 'react';
import './App.css';

// Component imports
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

type Props = {
  isLoggedIn: boolean,
}

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard /> : <Login setLoggedIn={setLoggedIn} />}
    </div>
  );
}

export default App;
