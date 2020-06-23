import React, {Component} from "react";
import { Button } from '@material-ui/core';
import {
  Redirect
} from "react-router-dom";

class QuestionFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      referrer: null,
    }
  }

  handleClick = () => {
      this.setState({referrer: '/questionfourcorrect'});
  }

  wrongAnswer() {
    alert('Are you sure?');
  }

  render() {
    const {referrer} = this.state;
    if (referrer) return <Redirect to={referrer} />;

    return (
      <div>

        <h1>
          Question Four!
        </h1>

        <center>
          <p>
            I love to watch movies too! My favorite series has to be the Marvel Cinematic Universe and my overall favorite movie is It's a Beautiful Day in the Neighborhood.

            <br></br>
            <br></br>
            Question Four: What is my favorite movie series?
          </p>

          <Button
            onClick = {this.handleClick}
            variant = "contained">
            Marvel Cinematic Universe
          </Button>

          <Button
            onClick = {this.wrongAnswer}
            variant = "contained">
            It's a Beautiful Day in the Neighborhood
          </Button>

          <Button
            onClick = {this.wrongAnswer}
            variant = "contained">
            DC Cinematic Universe
          </Button>

          <Button
            onClick = {this.wrongAnswer}
            variant = "contained">
            Interstellar
          </Button>
        </center>
      </div>
    )
  }
}

export default QuestionFour;
