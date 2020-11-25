import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Assignment from './pages/Assignment';
import Intro from './pages/Intro';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Intro } />
        <Route path="/assignment" component={ Assignment } />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
