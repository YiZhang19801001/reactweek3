import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ResultsComponent from './components/results/results_component';
import SearchComponent from './components/search/search_component';

class App extends Component {
  render() {
    return (
      <div>
        <SearchComponent />
        <ResultsComponent />
      </div>
    );
  }
}

export default App;
