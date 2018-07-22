import React, { Component } from "react";
import { Col, Container, Row, Card, CardBody, Button, Form, FormGroup, Input, Label } from "reactstrap";
import AwardCard from './AwardCard'
import KudosForm from "./Components/KudosForm"


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
          comment: "Thanks for always looking out for us.",
          sender: "Fabian",
          receiver: "Leon",
        },
        {
          id: 2,
          title: "Longest Commute Award!",
          comment: "I can't believe Laura makes it to work as often as she does.",
          sender: "Archit",
          receiver: "Laura"
        },
        {
          id: 3,
          title: "Most likely to nap at work!",
          comment: "Maybe you need more coffee.",
          sender: "Gobi",
          receiver: "Owen"
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
            {this.state.awards.map(e => <AwardCard title={e.title} comment={e.comment} receiver={e.receiver} />)}
          </Col>
        </Row>
        <hr />
        <KudosForm />
        <hr />

        <hr />
        {this.state.students.map(e => <p>{e.name}</p>)}
        <hr />


      </Container>
    );
  }
}

export default App;