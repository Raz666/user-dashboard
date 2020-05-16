import React from 'react';
import { Form, Button } from 'react-bootstrap';
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
}

class UserForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = props.user
      ? { ...props.user, redirect: '' }
      : {
        name: '',
        username: '',
        email: '',
        city: '',
        redirect: '',
      };
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    this.setState({ redirect: '/' });
    this.state.id ? this.props.editUser(this.state) : this.props.addUser(this.state);
  }

  updateStateValue = (name: any, value: string): void => {
    this.setState({ [name]: value } as Pick<User, keyof User>);
  }

  render() {
    const { name, email, username, city, redirect } = this.state;

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
        <Button type="submit" variant="success" className="float-right">Submit</Button>
        <Button variant="outline-danger" onClick={() => this.setState({ redirect: '/' })} className="float-right mr-3">Cancel</Button>
      </Form >
    );
  }
}

export default connect(null, { addUser, editUser })(UserForm);