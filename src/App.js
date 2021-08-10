import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Village from './components/Village'
import Map from './components/Map'
import Jobs from './components/Jobs'
import Housing from './components/Housing'
import Commissions from './components/Commissions'
import Rules from './components/Rules'
import Creation from './components/Creation'
import Events from './components/Events'
import Residents from './components/Residents'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/web/" exact component={Index}/>
        <Route path="/web/home" component={Home}/>
        <Route path="/web/village" exact component={Village}/>
        {/* nested routes under village */}
        <Route path="/web/village/map" component={Map}/>
        <Route path="/web/village/jobs" component={Jobs}/>
        <Route path="/web/village/housing" component={Housing}/>
        <Route path="/web/village/commissions" component={Commissions}/>
        <Route path="/web/rules" component={Rules}/>
        <Route path="/web/creation" component={Creation}/>
        <Route path="/web/events" component={Events}/>
        <Route path="/web/residents" component={Residents}/>
      </Switch>
    </Router>
  );
}

const Index = () => (
  <div className="landing">
    <Link to="/home">
      <img className="img" src="./logo_with_circle.png"/>
      <span>Enter Village</span>
    </Link>
  </div>
);

export default App;
