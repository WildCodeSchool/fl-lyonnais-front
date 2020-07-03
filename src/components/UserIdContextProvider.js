import React from 'react';
import UserIdContext from './UserIdContext'

class UserIdContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId : null,
      
    };
  }
  render() {
    return (
      <UserIdContext.provider value={this.state}>
          {this.props.children}
      </UserIdContext.provider>
    );
  };
}

export default UserIdContextProvider;