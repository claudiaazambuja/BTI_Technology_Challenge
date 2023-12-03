import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

// import Block1View from './Block1View'; // Importe suas views
// import Block2View from './Block2View';
// import Block3View from './Block3View';
import ErrorPage from './pages/ErrorPage.jsx'; // Crie uma página de erro


const VITE_API_URL = import.meta.env.VITE_API_URL;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;


console.log('Rendering App component');

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Block1View} />
        <Route path="/block2" component={Block2View} />
        <Route path="/block3" component={Block3View} />
        {/* Redireciona qualquer outra rota para a página de erro */}
        <Redirect from="*" to="/error" component={ErrorPage} />
      </Switch>
    </Router>
  );
};





export default App;