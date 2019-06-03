import React from 'react';
import { User } from '../../assets/models/user';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { History } from 'history';

interface iSignInState {
  username: string;
  password: string;
  errorMessage: string
}

interface ISignInProps extends RouteComponentProps{
  currentUser: User,
  errorMessage: string,
  login: (username: string, password: string)=>void
}

export class SignInComponent extends React.Component<ISignInProps, iSignInState> { // first is props, second is state
  constructor(props: ISignInProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    }
  }

  updateInput = (property: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [property]: event.target.value
    });
  }

  // updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   this.setState({
  //     username: event.target.value
  //   });
  // }

  // updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   this.setState({
  //     password: event.target.value
  //   });
  // }

  signIn = async (event: React.MouseEvent) => {
    event.preventDefault();
    let reqBody = {
      username: this.state.username,
      password: this.state.password
    }
    let response: Response = await fetch('http://localhost:5000/users/login', {
      method: 'POST',
      body: JSON.stringify(reqBody)
    });
    let history: History = this.props.history
    console.log(response);
  }

  render() {
    return (
      <form className="form-signin">
        <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputUsername" className="sr-only">Email address</label>
        <input type="text" id="inputUsername" className="form-control" value={this.state.username} onChange={this.updateInput('username')} placeholder="Username" required autoFocus />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" value={this.state.password} onChange={this.updateInput('password')} placeholder="Password" required />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <p>{this.state.errorMessage}</p>
        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.signIn}>Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
      </form>
    )
  }
}

// this is the state that this component will care about and have access to
const mapStateToProps = (state: IState) => {
  return {
    currentUser: state.login.currentUser,
    errorMessage: state.login.errorMessage
  }
}

// This is the action object that will be available to the component
const mapDispatchToProps = {
  login: login
}

// this will make a higher order component
export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);