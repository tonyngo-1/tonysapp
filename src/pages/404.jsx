import React from "react";
import './404.css';
import errorpic from '../pictures/errorpic.png';

const NotFoundPage = () => {
  return (
    <center>
      <div>
        <h1> 404 Not Found! </h1>
        <img src = {errorpic} alt ="Cute puppo"/>
      </div>
    </center>
  )
}

export default NotFoundPage;
