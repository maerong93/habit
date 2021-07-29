import React from 'react';
import ReactDOM from 'react-dom';
//import App from './app';
import SimpleHabit from './components/simpleHabit';
import './app.css';
import '@fortawesome/fontawesome-free/js/all.js';
ReactDOM.render(

    <React.StrictMode>
        <SimpleHabit/>
    </React.StrictMode>,

  document.getElementById('root')
);
