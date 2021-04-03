import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let text = [
  {text: 'Content'},
  {text: 'Lalalalalal'},
  {text: 'Shakalaka'},
]

let dialogs = [
  {id: 1, name: 'Alexander Vetrov'},
  {id: 2, name: 'Sveta Vetrova'},
  {id: 3, name: 'Pasha Vetrov'}
]

let messages = [
  {message: 'Lalala'},
  {message: 'Papapa'}
]

ReactDOM.render(
  <React.StrictMode>
    <App text={text} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
