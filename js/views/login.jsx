import React from 'react';
import { History } from 'react-router';

export default React.createClass({
  mixins: [History ],
  logIn(e) {
    this.history.pushState('', '/');
  },
  render() {
    return (
      <form classname="login-form" onSubmit={this.logIn}>
        <button type="submit">Log In</button>
      </form>
    );
  }

});
