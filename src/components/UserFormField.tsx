import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

import { User } from './GridBody';

interface Props {
  name: keyof User;
  value: string;
  label: string;
  placeholder: string;
  onChange: (name: keyof User, value: string) => void;
}
interface State extends Props {
  validationError?: string;
}

class UserFormField extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { ...props };
  };

  validateField = (value: string): void => {
    this.setState({ validationError: value ? '' : 'This field is required' });
  }

  render() {
    const { name, value, label, placeholder, onChange } = this.props;
    const { validationError } = this.state;
    return (
      <Form.Group as={Row} className="mb-2">
        <Form.Label
          column
          sm="2"
          className={validationError ? "text-danger" : ""}
        >
          {label}
        </Form.Label>
        <Col sm="10">
          <Form.Control
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => this.validateField(e.target.value)}
            className={validationError ? "border-danger" : ""}
          />
          <small className="text-danger">{validationError ? validationError : '\xA0'}</small>
        </Col>
      </Form.Group>
    );
  }
}

export default UserFormField;