import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {SelectorInfo} from './interfaces/appModels';

let selectors: SelectorInfo[] = [
  {
    title: "Find your rhythm.",
    link: "https://medium.com/gen-zzz/triple-time-in-2109-b8e926610344",
    readiness: true
  },
  {
    title: "Write a friend.",
    link: "https://medium.com/series/369ed289e46f",
    readiness: true
  },
  {
    title: "Hunt for neurons.",
    readiness: false
  }
]


ReactDOM.render(
  <React.StrictMode>
    <App selectors={selectors}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
