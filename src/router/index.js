import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
const Hello = () => 'hello word!!'
const RouteMap = () => {
  return (
    <Router>
      <Route exact path="/" component={Hello} />
    </Router>
  )
}
export default RouteMap;
