import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home.jsx'
import HeaderBar from './components/HeaderBar/HeaderBar';
import Landing from './components/Landing/Landing'

function App() {
  return (
    <div className="App">
      <Route path='/' component={HeaderBar} />
      <Route exact path='/' component={Landing} />
      <Route exact path='/:location' render={({ match }) => < Home location={match.params.location} />}/>
    </div>
  );
}

export default App;
