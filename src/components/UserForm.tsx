import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { addUser } from '../actions/userActions';

import { User } from './GridBody';

interface Props {
  user?: User;
  addUser: (user: User) => void;
}

class UserForm extends React.Component<Props, User> {
  constructor(props: Props) {
    super(props);
    this.state = props.user || {
      name: '',
      username: '',
      email: '',
      address: { city: '' },
    };
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      address: { city: this.state.address.city },
    };

    this.props.addUser(post);
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="name"
              placeholder="e.g. Bruce Wayne"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="email"
              placeholder="e.g. bruce@wayne.co"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Username
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="username"
              placeholder="e.g. Batman"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            City
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="city"
              placeholder="e.g. Gotham"
              value={this.state.address.city}
              onChange={(e) => this.setState({ address: { city: e.target.value } })}
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="success" className="float-right">Submit</Button>
        <Button variant="outline-danger" className="float-right mr-3">Cancel</Button>
      </Form >
    );
  }
}

export default connect(null, { addUser })(UserForm);