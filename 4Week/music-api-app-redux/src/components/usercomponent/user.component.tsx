import React, { Component } from 'react';
import { User } from '../../assets/models/user'

interface IUserComponentState {
  users: User[]
}

export class UserComponent extends Component<any, IUserComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        Text
      </div>
    )
  }
}