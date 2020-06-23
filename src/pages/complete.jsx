import React, { Component } from "react";
import { Button } from '@material-ui/core';
import { Redirect } from "react-router-dom";

class complete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      referrer: null,
    }
  }

  handleClick = () => {
      this.setState({referrer: '/'});
  }

  render() {
    const {referrer} = this.state;
    if (referrer) return <Redirect to={referrer} />;

    return (

      <div>
        <center>
          <h1>Thanks for playing!</h1>

          <p>Hope to see you soon!</p>

          <Button
            onClick = {this.handleClick}
            variant = "contained">
            Return to Main Page
          </Button>
        </center>
      </div>
    )
  }
}

export default complete;
