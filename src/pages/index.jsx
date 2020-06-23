import React, { Component } from "react";
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import "./formatting.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      referrer: null,
    }
  }

  handleClick = () => {
      this.setState({referrer: '/QuestionOne'});
  }

  render() {
    const {referrer} = this.state;
    if (referrer) return <Redirect to={referrer} />;

    return (
      <div>
        <center>
          <h1>
              Welcome to Tony's "About Me" Game!
          </h1>

          <Button
            onClick = {this.handleClick}
            variant ="contained"
            >
            Play Now!
          </Button>
        </center>
    </div>
    )
  }
}

export default MainPage;
