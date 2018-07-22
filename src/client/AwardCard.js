import React from "react";
import { Card, CardBody } from "reactstrap";

const AwardCard = props => (
  <Card>
    <CardBody className="mx-auto">
      <img alt="award" src="http://www.pngmart.com/files/3/Award-PNG-Photos.png" width="50px" />
      <p>Badge Name</p>
      <img alt="avatar" src="https://www.iranketab.ir/Images/user.jpg" width="100px" />
      <h6> {props.receiver} </h6>
      <h2> {props.title} </h2>
      <p> {props.comment} </p>
      <p>Conversion stealth influencer business-to-business entrepreneur hypotheses investor customer deployment metrics learning curve direct mailing long tail mass market. Pitch iteration stock android business-to-consumer bandwidth seed round user experience paradigm shift channels equity pivot. Metrics partner network validation responsive web design first mover advantage backing research & development market mass market innovator sales infrastructure.</p>
    </CardBody>
  </Card>
)

export default AwardCard;