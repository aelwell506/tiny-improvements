import React, { Component } from "react";
import { Col, Container, Row, Card, CardBody, Button, Form, FormGroup, Input, Label } from "reactstrap";
import AwardCard from './AwardCard'

class App extends Component {

  constructor() {
    super();
    this.state = {
      students: [
        {
          name: "Alia",
          userId: 10457,
          position: "Solution Engineer"
        },
        {
          name: "Cody",
          userId: 10850,
          position: "Senior Functional Consultant"
        },
        {
          name: "Ana",
          UserId: 10222,
          position: "Lead Solution Engineer"
        }
      ],
      restaurants: [
        {
          name: 'Maialino',
          genre: 'Italian',
          score: 4.4
        },
        {
          name: 'Beyond Sushi',
          genre: 'Vegan',
          score: 4.7
        },
        {
          name: 'Abyssinia',
          genre: 'Ethiopian',
          score: 4.5
        },
        {
          name: 'La Roja de Todos',
          genre: 'Chilean',
          score: 4.5
        }
      ],
      awards: [
        {
          id: 1,
          title: "Best Boss Award!",
          comment: "Thanks for always looking out for us."
        },
        {
          id: 2,
          title: "Longest Commute Award!",
          comment: "I can't believe Leslie makes it to work as often as she does."
        },
        {
          id: 3,
          title: "Most likely to nap at work!",
          comment: "Maybe you need more coffee."
        }

      ]
    }
  }


  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <h1>Tiny Progress</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12" lg="3">
            <Card>
              <CardBody className="mx-auto">
                <Button color="success">Give Kudos</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="9">
            {this.state.awards.map(e => <AwardCard title={e.title} comment={e.comment} />)}

          </Col>
        </Row>

        <hr />
        {this.state.students.map(e => <p>{e.name}</p>)}
        <hr />

        <Form>
          <FormGroup>
            <Label>Give Kudos to</Label>
            <Input type="select" name="select" id="exampleSelect" >
              {this.state.students.map(e => <option>{e.name}</option>)}
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


        <hr />
        {this.state.restaurants.map(e => <p>{e.name}</p>)}





      </Container>
    );
  }
}

export default App;