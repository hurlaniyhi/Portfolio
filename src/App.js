import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Portfolio from './portfolio'
import Apk from "./screenshot"
import Comment from "./comment"
import Message from './message'
import Article from './articles'



var App = () => {
   
    return(
      <Router>
        <div>
          <Switch>
          <Route path="/" exact component={Portfolio}></Route>
          <Route path="/screenshots" exact component={Apk}></Route>
          <Route path="/comments" exact component={Comment}></Route>
          <Route path="/message" exact component={Message}></Route>
          <Route path="/articles" exact component={Article}></Route>
          </Switch>
        </div>
      </Router>
    )
  }


export default App;
