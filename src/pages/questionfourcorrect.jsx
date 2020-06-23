import React, {Component} from "react";
import { Button } from '@material-ui/core';
import { Redirect } from "react-router-dom";
import correctFourPic from '../pictures/picFour.jpg';

class QuestionFourCorrect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      referrer: null,
    }
  }

  handleClick = () => {
      this.setState({referrer: '/complete'});
  }

  render() {
    const {referrer} = this.state;
    if (referrer) return <Redirect to={referrer} />;

    return(
      <div>
        <center>
          <h1>
            Woohoo!
          </h1>

          <p>
            I think the Marvel Cinematic Universe is the best just for the amount of effort put into each movie... sorry DC
          </p>

          <img src = {correctFourPic}
          width = "300"
          height = "200"
          alt ="Thor Doggy"/>
        <br></br>
        <cite>https://www.instagram.com/p/BMO9amwg3_z/</cite>
          <br></br>
          <br></br>

          <Button
            onClick = {this.handleClick}
            variant = "contained">
            You're done!
          </Button>

        </center>
      </div>
    )
  }
}

export default QuestionFourCorrect;
