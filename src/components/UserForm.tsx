import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { addUser, editUser } from '../actions/userActions';

import { User } from './GridBody';
import UserFormField from './UserFormField';

interface Props {
  user?: User;
  addUser: (user: User) => void;
  editUser: (user: User) => void;
  redirect?: string;
}

interface State extends User {
  redirect: string;
  message?: string;
}

class UserForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = props.user
      ? { ...props.user, redirect: '', message: '' }
      : {
        name: '',
        username: '',
        email: '',
        city: '',
        redirect: '',
        message: '',
      };
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (this.validateForm()) {
      this.setState({ redirect: '/' });
      this.state.id ? this.props.editUser(this.state) : this.props.addUser(this.state);
    } else {
      this.setState({ message: 'Fill all the fields, please!' });
    }
  }

  updateStateValue = (name: any, value: string): void => {
    this.setState({ message: '' });
    this.setState({ [name]: value } as Pick<User, keyof User>);
  }

  validateForm = (): boolean => {
    for (let i of Object.entries(this.state)) {
      if (i[0] === 'redirect') continue;
      if (i[0] === 'message') continue;
      if (i[1] === '') return false;
    }
    return true;
  }

  render() {
    const { name, email, username, city, redirect, message } = this.state;

    if (redirect) {
      return <Redirect to={redirect} />
    }
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
        <div className="clearfix">
          <Button type="submit" variant="success" className="float-right">Submit</Button>
          <Button variant="outline-danger" onClick={() => this.setState({ redirect: '/' })} className="float-right mr-3">Cancel</Button>
        </div>
        {message
          ? <Alert variant="danger" className="float-right mt-3 py-2">{message}</Alert>
          : ''}
      </Form >
    );
  }
}

export default connect(null, { addUser, editUser })(UserForm);