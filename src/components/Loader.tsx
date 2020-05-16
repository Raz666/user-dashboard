import React from 'react';
import { Spinner } from 'react-bootstrap';

interface Props {
}

const Loader: React.FC<Props> = () => {
  return (
    <div className="text-center">
      <Spinner animation="border" variant="primary" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;