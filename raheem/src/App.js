import React from 'react';

/* route */
import { Route } from 'react-router-dom';

/* components */
import QR from './components/QR';
import Landing from './components/Landing';
import StopDetails from './components/StopDetails';
import Story from './components/Story';
import Demographics from './components/Demographics';
import Subscribe from './components/Subscribe';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <div>
      {/* routes using react-router-dom */}
      <Route exact path="/">
        <h1>Raheem</h1>
      </Route>

      <Route path="/QR">
        < QR/>
      </Route>

      <Route path="/about">
        <Landing />
      </Route>

      <Route path="/details">
        <StopDetails />
      </Route>

      <Route path="/report">
        <Story />
      </Route>

      <Route path="/demographics">
        <Demographics />
      </Route>

      <Route path="/subscribe">
        <Subscribe />
      </Route>

      <Route path="/thank-you">
        <ThankYou />
      </Route>
    </div>
  );
}

export default App;
