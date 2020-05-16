import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import { getUsers } from '../actions/userActions';
import GridHeader, { Column } from './GridHeader';
import GridBody, { User } from './GridBody';

interface Props {
  users: User[];
  getUsers: () => void;
}

const mapStateToProps = (state: any) => ({
  users: state.users.items
});


const Grid: React.FC<Props> = ({ users, getUsers }) => {
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

  if(!users || !users.length){
    return <div>The are no users to show.</div>
  }
  return (
    <Table hover>
      <GridHeader columns={columns} />
      <GridBody />
    </Table>
  );
}

export default connect(mapStateToProps, { getUsers })(Grid);