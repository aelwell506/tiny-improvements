import React from "react";
import { Button, Col, Row, Form, FormGroup, Label, Input } from "reactstrap";

const FilterForm = props => (
    <Form>
        <FormGroup>
            <Label>Tinder Reviews for</Label>
            <Input type="select" name="name" id="exampleSelect" onChange={props.updateFilter} value={props.filteruserAwards}>
                {props.users.map((e, index) => <option key={index} > {e.name} </option>)}
            </Input>
            <br />
            <Button color="danger" onClick={props.getFilterAwards}>Filter</Button>
        </FormGroup>
    </Form>
)

export default FilterForm;