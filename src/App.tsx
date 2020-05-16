import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

import store from './store';
import Grid from './components/Grid';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container className="App">
          <header className="App-header">
            <h1 className="mt-3 mb-5">Dashboard</h1>
          </header>
          <Route path={['/edit-user/:id', '/add-user']} component={UserDetails} />
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <Card className="mb-4">
                  <Card.Header>
                    <h2 className="float-left h5 mb-0">User list</h2>
                    <Link to="/add-user" className="btn btn-primary btn-sm float-right">Add new</Link>
                  </Card.Header>
                  <Card.Body>
                    <Grid />
                  </Card.Body>
                </Card>
              </React.Fragment>
            )}
          />
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
