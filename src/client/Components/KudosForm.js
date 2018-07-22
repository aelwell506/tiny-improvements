import React from "react";
import { Col, Container, Row, Card, CardBody, Button, Form, FormGroup, Input, Label } from "reactstrap";

const KudosForm = props => (
    <Form>
        <FormGroup>
            <Label>Give Kudos to</Label>
            <Input type="select" name="select" id="exampleSelect" >
                <p>  </p>
            </Input>
        </FormGroup>
        <Form>
            <FormGroup>
                <Input type="text" placeholder="Kudos Title" />
            </FormGroup>
        </Form>
        <Form>
            <FormGroup>
                <Input type="textarea" placeholder="Kudos text" />
            </FormGroup>
        </Form>
    </Form>

)

export default KudosForm;








