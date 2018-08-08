import React from "react";
import { Card, CardBody, Col, Container, Row, Button } from "reactstrap";

const AwardCard = props => (
  <Card outline color="danger">
    <CardBody>
      <h1> <img alt="award image" src="http://www.goldstarinspection.com/images/goldstar2.png" width="70px" /> {props.title} </h1>
      <h4> Congrats {props.receiver}! </h4>
      <h6> from: {props.sender} </h6>
      <p> {props.comment} </p>
      <img alt="avatar" src="https://fit13.si/wp-content/uploads/2017/02/2fb33bdaacb3c805055f4d3a867f69da_red-outline-heart-heart-outline-clipart-png_800-600.png" width="50px" />

    </CardBody>
  </Card>
)

export default AwardCard;