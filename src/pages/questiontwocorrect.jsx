import React, {Component} from "react";
import { Button } from '@material-ui/core';
import { Redirect } from "react-router-dom";
import correctTwoPic from '../pictures/picTwo.jpeg';

class QuestionTwoCorrect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      referrer: null,
    }
  }

  handleClick = () => {
      this.setState({referrer: '/QuestionThree'});
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
            I am very much a big Braves fan. Here is a picture of me with my favorite player!
          </p>

          <img src = {correctTwoPic}
          width = "300"
          height = "400"
          alt ="Me with Ronald Acuna Jr."/>

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

export default QuestionTwoCorrect;
