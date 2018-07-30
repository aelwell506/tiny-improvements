import React from "react";
import { Col, Container, Row, Card, CardBody, Button, Form, FormGroup, Input, Label } from "reactstrap";

const KudosForm = props => (
    <Form>
        <FormGroup>
            <Label>Give Kudos to</Label>
            <Input type="select" name="name" id="exampleSelect" onChange={props.updatereceiver} value={props.receiver}>
                {props.users.map((e, index) => <option key={index} > {e.name} </option>)}
            </Input>
        </FormGroup>
        <FormGroup>
            <Label>Kudos Sender</Label>
            <Input type="select" name="name" id="exampleSelect" onChange={props.updatesender} value={props.sender}>
                {props.users.map((e, index) => <option key={index} > {e.name} </option>)}
            </Input>
        </FormGroup>
        <FormGroup>
            <Input type="text" placeholder="Kudos Title" onChange={props.updateKudosTitle} value-={props.kudosTitle} />
        </FormGroup>
        <FormGroup>
            <Input type="textarea" placeholder="Kudos text" onChange={props.updateKudosText} value={props.kudosText} />
        </FormGroup>
    </Form>
)

export default KudosForm;








