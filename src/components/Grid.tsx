import React from 'react';
import { Table } from 'react-bootstrap';

import GridHeader, { Column } from './GridHeader';
import GridBody from './GridBody';

interface Props {
  
}

const Grid: React.FC<Props> = () => {
  const columns: Column[] = [
    { name: 'Id' },
    { name: 'Name' },
    { name: 'Username' },
    { name: 'Email' },
    { name: 'City' },
    { name: 'Edit' },
    { name: 'Delete' },
  ];

  return (
    <Table bordered hover>
      <GridHeader columns={columns} />
      <GridBody />
    </Table>
  );
}

export default Grid;