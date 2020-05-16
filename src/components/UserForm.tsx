import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { addUser } from '../actions/userActions';

import { User } from './GridBody';
import UserFormField from './UserFormField';

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
      city: '',
    };
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.props.addUser(this.state);
  }

  updateStateValue = (name: any, value: string) => {
    this.setState({ [name]: value } as Pick<User, keyof User>);
  }

  render() {
    const { name, email, username, city } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <UserFormField
          name={'name'}
          value={name}
          label={'Name'}
          placeholder={'e.g. Bruce Wayne'}
          onChange={this.updateStateValue}
        />
        <UserFormField
          name={'email'}
          value={email}
          label={'Email'}
          placeholder={'e.g. bruce@wayne.co'}
          onChange={this.updateStateValue}
        />
        <UserFormField
          name={'username'}
          value={username}
          label={'Username'}
          placeholder={'e.g. Batman'}
          onChange={this.updateStateValue}
        />
        <UserFormField
          name={'city'}
          value={city}
          label={'City'}
          placeholder={'e.g. Gotham'}
          onChange={this.updateStateValue}
        />
        <Button type="submit" variant="success" className="float-right">Submit</Button>
        <Button variant="outline-danger" className="float-right mr-3">Cancel</Button>
      </Form >
    );
  }
}

export default connect(null, { addUser })(UserForm);