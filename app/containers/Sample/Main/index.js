import React from 'react';

export default class Main extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
       This is Main component. Please write your code for children of this component.
       {this.props.children}
      </div>
    );
  }
}
