// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/css/bootstrap.css";
import './global.css';
import App from './components/App';
//const jsx = <h1>Hello, Platzi Badges!</h1>;


const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App/>,container);
