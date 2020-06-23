import React, {Component} from "react";
import { Button } from '@material-ui/core';
import { Redirect } from "react-router-dom";
import "./formatting.css"

class QuestionOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      referrer: null,
    }
  }

  handleClick = () => {
      this.setState({referrer: '/QuestionOneCorrect'});
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
            Question One!
          </h1>

          <p>
            Hi, my name is Tony Ngo. I would like to introduce you to my game where you answer questions about... me!

            I was born in Des Moines, Iowa where there is lots of corn.
          </p>

          <p>
            Question One: Where am I from?
          </p>

          <Button
            onClick = {this.wrongAnswer}
            variant ="contained">
            Buford, Georgia
          </Button>


          <Button
            onClick = {this.handleClick}
            variant = "contained">
            Des Moines, Iowa
          </Button>

          <Button
            onClick = {this.wrongAnswer}
            variant = "contained">
            Atlanta, Georgia
          </Button>

          <Button
            onClick = {this.wrongAnswer}
            variant = "contained">
            S. Pole, Antartica
          </Button>
        </center>
      </div>
    )
  }
}

export default QuestionOne;
