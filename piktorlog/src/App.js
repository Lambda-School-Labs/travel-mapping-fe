import React from 'react';
import * as Sentry from '@sentry/browser';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './views/Landing';
import Main from './views/Main';

// Initialize Sentry.io for exception monitoring.
Sentry.init({dsn: "https://2ec319603fba4c4aa4d8bc7f56b40e33@sentry.io/1811913"});

const environment = process.env.NODE_ENV || 'development';

function App() {
  return (
    <Router>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/main' component={Main} />
      { 
        /* Used to verify Sentry integration (development only) */
        environment === 'development' && <button onClick={() => new Error('Sentry Error') }>Break the world</button>
      }
    </Router>
  );
}

export default App;
