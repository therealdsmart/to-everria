import React from 'react';
import '../stylesheets/App.css';

import SelectorContainer from './SelectorContainer';

import { selectors } from '../data/selectorsData';

/**
 * The top-level container for the app.
 */
function App() {
  return (
    <div className="App">
      <h1>What would you like to do?</h1>
      <SelectorContainer selectors={selectors}/>
    </div>
  );
}

export default App;
