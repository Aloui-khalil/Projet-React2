import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SuprCart from "./Cart";




export default class App extends React.Component {
  render() {
    return (
      
      <BrowserRouter>
        <div className="App">
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Men" component={Men}/>
          <Route path="/Women"  component={Women}/>
          <Route path="/Kids"  component={Kids}/>
          <Route path="/SignIn"  component={SignIn}/>
          <Route path="/SignUp" component={SignUp}/>
          <Route path="/Cart" component={SuprCart}/>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
