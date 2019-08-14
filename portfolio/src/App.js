import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
    </div>
  );
}

export default App;
