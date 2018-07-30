import React, { Component } from "react";
import { Col, Container, Row, Card, CardBody, Button, Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AwardCard from './Components/AwardCard';
import KudosForm from "./Components/KudosForm";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      awards: [],
      kudosText: "",
      kudosTitle: "",
      receiver: "",
      sender: "",
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  postKudo = () => {
    axios.post("/api/kudos", {
      id: 4,
      title: this.state.kudosTitle,
      comment: this.state.kudosText,
      receiver: this.state.receiver,
      sender: this.state.sender
    })
      .then(response => {
        this.setState({
          awards: response.data
        })
      })
  }

  updateKudosText = (event) => {
    this.setState({ kudosText: event.target.value });
  }

  updateKudosTitle = (event) => {
    this.setState({ kudosTitle: event.target.value });
  }

  updatereceiver = (event) => {
    this.setState({ receiver: event.target.value });
  }

  updatesender = (event) => {
    this.setState({ sender: event.target.value });
  }

  componentDidMount = () => {
    axios.get("/api/awards")
      .then(response => {
        this.setState({
          awards: response.data
        })
      })

    axios.get("/api/users")
      .then(response => {
        this.setState({
          users: response.data
        })
      })
    axios.get("/api/kudos")
      .then(response => {
        this.setState({
          awards: response.data
        })
      })
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
                <Button color="success" onClick={this.toggle}>Give Kudos</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Give Kudos</ModalHeader>
                  <ModalBody>
                    <KudosForm
                      users={this.state.users}
                      updateKudosText={this.updateKudosText}
                      kudosText={this.state.kudosText}
                      kudosTitle={this.state.kudosTitle}
                      updateKudosTitle={this.updateKudosTitle}
                      updatereceiver={this.updatereceiver}
                      receiver={this.state.receiver}
                      updatesender={this.updatesender}
                      sender={this.state.sender}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onClick={this.postKudo}>Submit</Button>{' '}
                    <Button color="danger" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>


              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="9">
            {this.state.awards.map((e, index) => <AwardCard key={index} title={e.title} comment={e.comment} receiver={e.receiver} sender={e.sender} />)}
          </Col>
        </Row>
        <Row>
          <Col md="12">

          </Col>
        </Row>
      </Container >
    );
  }
}

export default App;