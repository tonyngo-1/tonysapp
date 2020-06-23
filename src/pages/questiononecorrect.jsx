import React, {Component} from "react";
import { Button } from '@material-ui/core';
import { Redirect } from "react-router-dom";
import correctOnePic from '../pictures/picOne.jpeg';

class QuestionOneCorrect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      referrer: null,
    }
  }

  handleClick = () => {
      this.setState({referrer: '/QuestionTwo'});
  }

  render() {
    const {referrer} = this.state;
    if (referrer) return <Redirect to={referrer} />;

    return(
      <div>
        <center>
          <h1>
            You got it right!
          </h1>

          <p>
            I currently reside in Buford, Georgia, but I was born in Des Moines, Iowa.
          </p>

          <img src = {correctOnePic}
          width = "300"
          height = "400"
          alt ="Me in the snow"/>

          <br></br>

          <Button
            onClick = {this.handleClick}
            variant = "contained">
            Continue
          </Button>

        </center>
      </div>
    )
  }
}

export default QuestionOneCorrect
