import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route  } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Test from './components/Test';
import { Fragment } from 'react';

const history = createBrowserHistory();

function a(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return(
    <Fragment>
      <Router  history={ history }>
        <Route path="/" component={a} />
        <Route path="/test" component={Test} />
      </Router>
    </Fragment>
  );
}

export default App;
