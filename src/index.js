import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
const server = require('./server.js');
const database = require('./database.js');
const dbConfig = require('./config/databaseConfig.js');


async function startConnection() {
    console.log('Starting...');
    try {
        console.log('Initializing web server');
        await database.initialize();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

startConnection();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();