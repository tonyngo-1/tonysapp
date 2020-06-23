import React, {Component} from "react";
import { Button } from '@material-ui/core';
import { Redirect } from "react-router-dom";
import correctThreePic from '../pictures/picThree.jpg';

class QuestionThreeCorrect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      referrer: null,
    }
  }

  handleClick = () => {
      this.setState({referrer: '/QuestionFour'});
  }

  render() {
    const {referrer} = this.state;
    if (referrer) return <Redirect to={referrer} />;

    return(
      <div>
        <center>
          <h1>
            Ding ding ding!
          </h1>

          <p>
            What ever could go wrong with some Korean Barbecue?
          </p>

          <img src = {correctThreePic}
          width = "300"
          height = "400"
          alt ="Korean BBQ Factory"/>

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

export default QuestionThreeCorrect;
