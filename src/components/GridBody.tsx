import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { deleteUser } from '../actions/userActions';
import ConfirmDelete from './ConfirmDelete';

export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  city: string;
}

interface Props {
  users: User[];
  deleteUser: (id: number) => void;
}

const mapStateToProps = (state: any) => ({
  users: state.users.items
});

const GridBody: React.FC<Props> = ({ users, deleteUser }) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [userToDelete, setUserRemoval] = useState({ id: -1, name: '' });

  const handleDeleteUser = (payload: { id: number, name: string }): void => {
    setUserRemoval(payload);
    setShowConfirmDelete(true);
  }
  const confirmDeleteUser = (id: number): void => {
    cancelDeleteUser();
    deleteUser(id);
  }
  const cancelDeleteUser = () => setShowConfirmDelete(false);

  return (
    <>
      <ConfirmDelete show={showConfirmDelete} handleConfirm={confirmDeleteUser} handleClose={cancelDeleteUser} payload={userToDelete} />
      <tbody>
        {users && users.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
              <td><Link to={`/edit-user/${user.id}`} className="btn btn-warning btn-sm">Edit</Link></td>
              <td><Button variant="danger" size="sm" onClick={() => !!user.id && handleDeleteUser({ id: user.id, name: user.name })}>Delete</Button></td>
            </tr>
          )
        })}
      </tbody>
    </>
  );
}

export default connect(mapStateToProps, { deleteUser })(GridBody);