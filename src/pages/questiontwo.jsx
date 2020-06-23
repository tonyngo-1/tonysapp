import React, {Component} from "react";
import { Button } from '@material-ui/core';
import {
  Redirect
} from "react-router-dom";

class QuestionTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      referrer: null,
    }
  }

  handleClick = () => {
      this.setState({referrer: '/QuestionTwoCorrect'});
  }

  wrongAnswer() {
    alert('Are you sure?');
  }

  render() {
    const {referrer} = this.state;
    if (referrer) return <Redirect to={referrer} />;

    return (
      <div>
        <center>

          <h1>
            Question Two!
          </h1>

          <p>
            One of my favorite things to do is watch football (Go Dawgs!) and baseball (Chop on!)
          </p>

          <p>
            Question Two: What is my favorite Baseball team?
          </p>

          <Button
            onClick = {this.handleClick}
            variant ="contained">
            Atlanta Braves
          </Button>


          <Button
            onClick = {this.wrongAnswer}
            variant = "contained">
            Georgia Bulldogs
          </Button>

          <Button
            onClick = {this.wrongAnswer}
            variant = "contained">
            Kansas City Royals
          </Button>

          <Button
            onClick = {this.wrongAnswer}
            variant = "contained">
            Washington Nationals
          </Button>
        </center>
      </div>
    )
  }
}

export default QuestionTwo;
