import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './pages/css/scss_compilado.css';
import '../node_modules/materialize-css/dist/js/materialize';
import '../node_modules/jquery/dist/jquery';

// import '../node_modules/materialize-css/dist/css/materialize.css';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
