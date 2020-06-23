import React, {Component} from 'react';
import './App.css';

import NotFoundPage from './pages/404';
import MainPage from './pages';
import QuestionOne from './pages/questionone';
import QuestionOneCorrect from './pages/questiononecorrect';
import QuestionTwo from './pages/questiontwo';
import QuestionTwoCorrect from './pages/questiontwocorrect';
import QuestionThree from './pages/questionthree';
import QuestionThreeCorrect from './pages/questionthreecorrect';
import QuestionFour from './pages/questionfour';
import QuestionFourCorrect from './pages/questionfourcorrect';
import complete from "./pages/complete"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path= "/" component = {MainPage} />
          <Route path = "/QuestionOne" component = {QuestionOne} />
          <Route path = "/QuestionOneCorrect" component = {QuestionOneCorrect} />
          <Route path = "/QuestionTwo" component ={QuestionTwo} />
          <Route path = "/QuestionTwoCorrect" component = {QuestionTwoCorrect} />
          <Route path = "/QuestionThree" component = {QuestionThree}/>
          <Route path = "/QuestionThreeCorrect" component = {QuestionThreeCorrect} />
          <Route path = "/QuestionFour" component = {QuestionFour}/>
          <Route path = "/QuestionFourCorrect" component = {QuestionFourCorrect}/>
          <Route path = "/Complete" component = {complete}/>
          <Route path= "/404" component = {NotFoundPage} />
          <Redirect to = "/404"/>
        </Switch>
    </Router>
    );
  }
}

export default App;
