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
    <Router basname="/web/">
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/home" component={Home}/>
        <Route path="/village" exact component={Village}/>
        {/* nested routes under village */}
        <Route path="/village/map" component={Map}/>
        <Route path="/village/jobs" component={Jobs}/>
        <Route path="/village/housing" component={Housing}/>
        <Route path="/village/commissions" component={Commissions}/>
        <Route path="/rules" component={Rules}/>
        <Route path="/creation" component={Creation}/>
        <Route path="/events" component={Events}/>
        <Route path="/residents" component={Residents}/>
      </Switch>
    </Router>
  );
}

const Index = () => (
  <div className="landing">
    <Link to="/home">
      <img className="img" src="./web/logo_with_circle.png"/>
      <span>Enter Village</span>
    </Link>
  </div>
);

export default App;
