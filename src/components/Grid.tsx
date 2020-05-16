import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import { getUsers } from '../actions/userActions';
import GridHeader, { Column } from './GridHeader';
import GridBody, { User } from './GridBody';
import Loader from './Loader';

interface Props {
  users: User[];
  isLoading: boolean;
  getUsers: () => void;
}

const mapStateToProps = (state: any) => ({
  users: state.users.items,
  isLoading: state.users.isLoading,
});


const Grid: React.FC<Props> = ({ users, isLoading, getUsers }) => {
  const columns: Column[] = [
    { name: 'Id' },
    { name: 'Name' },
    { name: 'Username' },
    { name: 'Email' },
    { name: 'City' },
    { name: 'Edit' },
    { name: 'Delete' },
  ];

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isLoading) {
    return <Loader />
  }
  if (!users || !users.length) {
    return <div className="text-center">The are no users to show.</div>
  }
  return (
    <Table hover>
      <GridHeader columns={columns} />
      <GridBody />
    </Table>
  );
}

export default connect(mapStateToProps, { getUsers })(Grid);