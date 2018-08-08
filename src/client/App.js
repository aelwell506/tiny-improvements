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
            <h1> <img alt="tinder logo" src="data:image/png;base64,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" /> </h1>
            <h2>Dating Reviews</h2>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="3">
            <p> Show some love by giving a review! </p>
            <Card>
              <CardBody className="mx-auto">
                <Button color="danger" onClick={this.toggle}>Give Review</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Give Review</ModalHeader>
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
            <img alt="imagetinder" src="http://globaldatinginsights.com/wp-content/uploads/2015/12/Screen-Shot-2015-12-02-at-15.26.00.png" width="275px" />
            <br />
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
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