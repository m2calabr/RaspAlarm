import React from 'react';

export default class Clock extends React.Component {
  render() {
    return (
      <div className="col-xs-12 clock">
        <h1 className="time">{this.props.time}</h1>
      </div>
    );
  }
}