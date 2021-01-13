import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

console.time('Render Time:')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

console.timeEnd('Render Time:')