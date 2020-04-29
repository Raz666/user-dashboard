import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Provider } from 'react-redux';
import { Card, Button, Container } from 'react-bootstrap';

import store from './store';
import Grid from './components/Grid';
import UserForm from './components/UserForm';

function App() {
  return (
    <Provider store={store}>
      <Container className="App">
        <header className="App-header">
          <h1 className="mt-3 mb-5">Dashboard</h1>
        </header>
        <Card className="mb-4">
          <Card.Header>
            <h2 className="h5 mb-0">Form</h2>
          </Card.Header>
          <Card.Body>
            <UserForm />
          </Card.Body>
        </Card>
        <Card className="mb-4">
          <Card.Header>
            <h2 className="float-left h5 mb-0">User list</h2>
            <Button className="float-right">Add new</Button>
          </Card.Header>
          <Card.Body>
            <Grid />
          </Card.Body>
        </Card>
      </Container>
    </Provider>
  );
}

export default App;
