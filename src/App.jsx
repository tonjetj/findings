import React from 'react';
import RegistrationForm from "./components/registration/Registration"
import LoginForm from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return <div className="App">
    <RegistrationForm/>
    <LoginForm/>
    <Dashboard/>
  </div>;
}

export default App;
