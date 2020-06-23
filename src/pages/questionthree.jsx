import React, {Component} from "react";
import { Button } from '@material-ui/core';
import {
  Redirect
} from "react-router-dom";

class QuestionThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      referrer: null,
    }
  }

  handleClick = () => {
    this.setState({referrer: '/QuestionThreeCorrect'});
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
            Question Three!
          </h1>

          <p>
            Another thing I like to do is go out to eat. My favorite food would definitely be korean barbecue.
            <br></br><br></br>
            What is my favorite food?
          </p>

          <Button
            onClick = {this.wrongAnswer}
            variant = "contained">
            Pizza
          </Button>

          <Button
            onClick = {this.wrongAnswer}
            variant = "contained">
            Wings
          </Button>

          <Button
            onClick = {this.handleClick}
            variant = "contained">
            Korean Barbecue
          </Button>

          <Button
            onClick = {this.wrongAnswer}
            variant = "contained">
            Lasagna
          </Button>
        </center>
      </div>
    )
  }
}

export default QuestionThree;
