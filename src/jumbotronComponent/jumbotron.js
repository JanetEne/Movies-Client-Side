import React from "react";
import { Button } from "react-bootstrap";
import {StyledJumbotron } from './style'

const JumbotronComponent = () => {
  return (
    <StyledJumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </StyledJumbotron>
  );
};

export default JumbotronComponent;
