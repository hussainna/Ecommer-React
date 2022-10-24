import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom/cjs/react-router-dom';
import Home from './component/pages/home/Home'
import Master from './component/layouts/Master'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/dashboard' component={Master} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
