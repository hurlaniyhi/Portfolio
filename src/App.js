import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Portfolio from './portfolio'
import Apk from "./screen2"

var App = () => {
   
    return(
      <Router>
        <div>
          <Switch>
          <Route path="/" exact component={Portfolio}></Route>
          <Route path="/apk" exact component={Apk}></Route>
          </Switch>
        </div>
      </Router>
    )
  }


export default App;
