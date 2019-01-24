import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//186667235953-j2fte15v0l536qg9f09iqsuaiearrt4o.apps.googleusercontent.com
import Home from './components/Home/Home';
import About from './components/About/About';
import Error from './components/Error/Error';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import FreeCode from './components/FreeCode/FreeCode';
import PageJscript from './components/pages/PageJscript';
import Login from './components/Login/Login';
import Learn from './components/Learn/Learn';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
       <Route path="/" component={Home} exact />
       <Route path="/about" component={About} />
       <Route path="/freecode" component={FreeCode} />
       <Route path="/learn" component={Learn}/>
       <Route path="/login" component={Login}/>
       <Route path="/jscript" component={PageJscript}/>
       <Route path="" component={Error} />
     </Switch>
     </div>
     </BrowserRouter>
     </div>
    );

  }
}
export default App;
