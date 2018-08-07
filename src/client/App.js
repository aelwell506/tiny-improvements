import React, { Component } from "react";
import { Col, Container, Row, Card, CardBody, Button, Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AwardCard from './Components/AwardCard';
import KudosForm from "./Components/KudosForm";
import FilterForm from "./Components/FilterForm";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      awards: [],
      comment: "",
      title: "",
      receiver: "",
      sender: "",
      filteruserAwards: "",
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
      Name: this.state.title,
      Comment__c: this.state.comment,
      Receiver__c: this.state.users.find(user => user.name === this.state.receiver).id,
      Sender__c: this.state.users.find(user => user.name === this.state.sender).id
    })
      .then(response => {
        // this.setState({
        //   awards: response.data
        // })
      })
    this.toggle()
  }

  updateFilter = event => {
    this.setState({ filteruserAwards: event.target.value });
  };

  getFilterAwards = () => {
    axios.get("/api/filter/" + this.state.filteruserAwards)
      .then(response => {
        this.setState({
          awards: response.data
        })
      })
  }

  updateKudosText = (event) => {
    this.setState({ comment: event.target.value });
  }

  updateKudosTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  updatereceiver = (event) => {
    this.setState({ receiver: event.target.value });
  }

  updatesender = (event) => {
    this.setState({ sender: event.target.value });
  }

  componentDidMount = () => {
    axios.get("/api/kudos")
      .then(response => {
        this.setState({
          awards: response.data
        })
      })

    axios.get("/api/users")
      .then(response => {
        this.setState({
          users: response.data,
          receiver: response.data[0],
          sender: response.data[0]
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

        <Row>
          <Col md="3">
            <Card>
              <CardBody className="mx-auto">
                <Button color="success" onClick={this.toggle}>Give Kudos</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Give Kudos</ModalHeader>
                  <ModalBody>
                    <KudosForm
                      users={this.state.users}
                      updateKudosText={this.updateKudosText}
                      comment={this.state.comment}
                      title={this.state.title}
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
            <br />
            <Card>
              <CardBody className="mx-auto">
                <FilterForm
                  users={this.state.users}
                  updateFilter={this.updateFilter}
                  getFilterAwards={this.getFilterAwards}
                  filteruserAwards={this.state.filteruserAwards}
                />
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="9">
            {this.state.awards.map((e, index) => <AwardCard key={index}
              title={e.name}
              comment={e.comment__c}
              receiver={e.receiver__r.Name}
              sender={e.sender__r.Name} />)}
          </Col>
        </Row>
      </Container >
    );
  }
}

export default App;