import React from "react";
import { Card, CardBody, Col, Container, Row, Button } from "reactstrap";

const AwardCard = props => (
  <Card body inverse color="info">
    <CardBody>
      <h2> <img alt="award image" src="http://www.goldstarinspection.com/images/goldstar2.png" width="55px" /> {props.title} </h2>
      <img alt="avatar" src="https://www.iranketab.ir/Images/user.jpg" width="100px" />
      <h4> Congrats {props.receiver}! </h4>
      <h6> from: {props.sender} </h6>
      <p> {props.comment} </p>

    </CardBody>
  </Card>
)

export default AwardCard;