import React     from 'react';
import update    from 'react-addons-update';
import ClassNames from 'classnames';

let Types = React.PropTypes;

export default React.createClass({
  PropTypes: {
    helpText: Types.string;
    error:    Types.string;
  },
  render() {
    return (
      <div className={ClassNames({'basic-input': true, 'error': this.props.console.error})} {...this.props}>
        <input
          className={this.props.error ? 'error' : ''}
          {...update(this.props, {children: {$set: null}})} />
        {this.props.children}
        <aside>
          {this.props.helpText || this.props.error || ' '}
        </aside>

      </div>
    );
  }
});
