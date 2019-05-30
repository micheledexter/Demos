import React from 'react';

interface IIncrementerProps {
  label: string;
  increment: () => void;
}

export class ClickerIncrementerComponent extends React.PureComponent<IIncrementerProps> {
  render() {
    return (
      <button className='btn btn-primary' onClick={this.props.increment}>
        {this.props.label}
      </button>
    )
  }
}