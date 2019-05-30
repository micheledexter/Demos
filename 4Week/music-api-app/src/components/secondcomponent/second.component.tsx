import React from 'react';
import { FirstComponent } from '../firstcomomponent/first.component';
import { Link } from 'react-router-dom';

export class SecondComponent extends React.Component {
  // render is one of the lifecycle methods of react
  // render will be called anytime a react component or any data in it changes
  render() {
    return (
      <>{/*this is a fragment
        When this gets rendered, the fragment will disappear
        It has no value */}
        <h3>
          This is the second component
        </h3>
        <FirstComponent />
        <Link to='/login'>Login</Link>
      </>
    )
  }
}