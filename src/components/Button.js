import React, { Component } from 'react';

class Button extends Component {
  state = {
    message: ''
  };

  render() {
    return (
      <div className="reloadContainer">
        <button className="reload"
          onClick={() => {
            this.props.reloadPopsicles();
          }}
        >
          Reset Popsicles
        </button>
      </div>
    );
  }
}

export default Button;
