import React    from 'react';
import { Link } from 'react-router';

export default React.createClass({

  render() {
    return (
      <header classname="app-header">
         app header
         <Link to="/login">Log In</Link>
       </header>
    );
  }
});
