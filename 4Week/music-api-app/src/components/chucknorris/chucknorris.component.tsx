import React, { Component } from 'react';

export class ChuckNorrisComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
    }
  }

  getChuckNorrisJokes = async () => {
    const response = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]');
    console.log(response);

    const resBody = await response.json();
    this.setState({
      joke: resBody.value.joke
    });
  }

  componentDidMount() {
    this.getChuckNorrisJokes();
  }

  render() {
    const {joke} = this.state;
    return (
      <div>
        <p>{joke || 'Waiting on a joke, what a joke'}</p>
        <button className='btn btn-danger' onClick={this.getChuckNorrisJokes}>Get Joke</button>
      </div>
    )
  }
}