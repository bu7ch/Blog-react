import React    from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <header classname="app-header">
         <Link to="/"><h1></h1></Link>
         <section ClassName="account-ctrl">
           <Link to="/users/create">Join</Link>
         <Link to="/login">Log In</Link>
         </section>
       </header>
    );
  }
});
