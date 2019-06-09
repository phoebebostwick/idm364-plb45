import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './components/App';
import './screen.css';

render(
  <>
  	<Router>
    	<App />
    </Router>
  </>,
  document.getElementById('app')
);
