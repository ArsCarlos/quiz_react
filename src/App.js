import React from 'react';
import './App.css';
import Quiz from './Quiz';
import Welcome from './Welcome';
import Results from './Results';
import { Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Welcome} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/results" component={Results} />
      </BrowserRouter>
    </div>
  );
}

export default App;
