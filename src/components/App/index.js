import React, { Component }from 'react';
import { Route, Switch } from 'react-router-dom';

import TravelForm from '../../containers/TravelForm';
import WeatherResults from '../WeatherResults';
import PathError from '../PathError';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route 
            exact path='/' 
            component={ TravelForm } />
          <Route 
            path='/results'
            component={ WeatherResults } />
          <Route 
            component={ PathError } />
        </Switch>
      </div>
    );
  }
}

export default App;