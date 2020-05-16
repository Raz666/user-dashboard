import React from 'react';
import { Button, Modal } from 'react-bootstrap';

interface Props {
  show: boolean;
  payload: { id: number; name: string; }
  handleConfirm: (id: number) => void;
  handleClose: () => void;
}

const ConfirmDelete: React.FC<Props> = ({ show, payload, handleConfirm, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="h5">Delete user</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you certain you want to remove <strong>{payload.name}</strong>?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="sm" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" size="sm" onClick={() => handleConfirm(payload.id)}>
          Delete user
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmDelete;