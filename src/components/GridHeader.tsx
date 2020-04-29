import React from 'react';

export interface Column {
  name: string;
  sortable?: boolean;
}

interface Props {
  columns: Column[];
}

const GridHeader: React.FC<Props> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns && columns.map((col, index) => {
          return (
            <th key={index}>{col.name}</th>
          )
        })}
      </tr>
    </thead>
  );
}

export default GridHeader;