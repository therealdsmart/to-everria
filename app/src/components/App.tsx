import React from 'react';
import '../stylesheets/App.css';
import './HomeSelector.tsx';
import HomeSelector from './HomeSelector';
import { AppProps, SelectorInfo } from '../interfaces/appModels';

function App(props: AppProps) {
  return (
    <div className="App">
      <h1>What would you like to do?</h1>
      <div className="SelectorContainer">
        {props.selectors?.map((selector: SelectorInfo) => <HomeSelector info={selector} />)}
      </div>
    </div>
  );
}

export default App;
