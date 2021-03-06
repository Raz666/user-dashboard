import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import { getUser } from '../actions/userActions';
import { User } from './GridBody';
import UserForm from './UserForm';
import Loader from './Loader';

type TParams = {
  id: string,
};

interface Props extends RouteComponentProps<TParams> {
  user: User;
  isLoading: boolean;
  getUser: (id: number) => void;
}

const mapStateToProps = (state: any) => ({
  user: state.users.item,
  isLoading: state.users.isLoading,
});

const UserDetails: React.FC<Props> = ({ match, user, isLoading, getUser }) => {
  useEffect(() => {
    if (match.params.id) { getUser(parseInt(match.params.id)); }
  }, [getUser, match]);

  return (
    <React.Fragment>
      <Card className="mb-4">
        <Card.Header>
          <h2 className="h5 mb-0">Form</h2>
        </Card.Header>
        <Card.Body>
          {match.params.id
            ? isLoading
              ? <Loader />
              : <UserForm user={user} />
            : <UserForm />}

        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default connect(mapStateToProps, { getUser })(UserDetails);