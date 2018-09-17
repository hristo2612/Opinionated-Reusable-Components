import React from "react";

import "tabler-react/dist/Tabler.css";

import { Card, Button } from "tabler-react";

class CardPaper extends React.Component {
  render() {
    return (
      <Card>
        <Card.Header>
          <Card.Title>Card Paper</Card.Title>
        </Card.Header>
        <Card.Body>
          <Button color="primary">A Nice button</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default CardPaper;