import React from "react";
import { Card, CardBody } from "reactstrap";

const PetCard = (props) =>
    (
        <CardBody>
            <Card>
                <h1> Hello, my name is {props.name} </h1>
                <p> My age is {props.age} </p>
            </Card>
        </CardBody>
    )

export default PetCard;