import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';

console.log('Rendering App component');

function App() {
  return (
    <Router>
      <Route exact path="/" component={Block1View} />
    </Router>
  );
};





export default App;