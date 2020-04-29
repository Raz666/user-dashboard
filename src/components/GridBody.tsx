import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { getUsers } from '../actions/userActions';

export interface Address {
  city: string;
}

export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

interface Props {
  users: User[];
  getUsers: () => void;
}

const mapStateToProps = (state: any) => ({
  users: state.users.items
});

class GridBody extends React.Component<Props> {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <tbody>
        {this.props.users && this.props.users.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td><Button variant="warning">Edit</Button></td>
              <td><Button variant="danger">Delete</Button></td>
            </tr>
          )
        })}
      </tbody>
    );
  }
}

export default connect(mapStateToProps, { getUsers })(GridBody);