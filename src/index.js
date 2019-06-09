import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './components/App';
import './screen.css';

ReactDOM.render(
  <>
  	<Router basename={process.env.PUBLIC_URL}>
    	<App />
    </Router>
  </>,
  document.getElementById('app')
);
