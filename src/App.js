import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Portfolio from './portfolio'
import Apk from "./screenshot"
import Comment from "./comment"



var App = () => {
   
    return(
      <Router>
        <div>
          <Switch>
          <Route path="/" exact component={Portfolio}></Route>
          <Route path="/screenshots" exact component={Apk}></Route>
          <Route path="/comments" exact component={Comment}></Route>
         
          </Switch>
        </div>
      </Router>
    )
  }


export default App;
