import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FinalFormDemo from '../pages/finalform';
const Hello = () => 'hello word!!'

const RouteMap = () => {
  return (
    <Router>
      <Route exact path="/" component={FinalFormDemo} />
    </Router>
  )
}
export default RouteMap;
