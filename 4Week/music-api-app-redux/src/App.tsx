import React from 'react';
// import logo from './logo.svg';
import './include/bootstrap';
import './App.css';
// import { FirstComponent } from './components/firstcomomponent/first.component';
import { SecondComponent } from './components/secondcomponent/second.component';
import { SignInComponent } from './components/signin/signin.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavComponent } from './components/nav/nav.component';
import { ArtistComponent } from './components/artistcomponent/artist.component';
import { FirstComponent } from './components/firstcomomponent/first.component';
import { ClickerComponent } from './components/clicker/clicker.component';
import { ChuckNorrisComponent } from './components/chucknorris/chucknorris.component';
import { Movies } from './components/movies/movies.component';
import { UserComponent } from './components/usercomponent/user.component';
import { store } from './Store';
import { Provider } from 'react-redux';

// We can make components in two ways
// We can make function components that return some jsx/tsx
// or we can make class components that have a render function that returns some jsx/tsx
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <NavComponent />
          <Switch>
            <Route path='/login' component={SignInComponent} />
            <Route path='/sc' component={SecondComponent} />
            <Route path='/artists' component={ArtistComponent} />
            <Route path='/first' component={FirstComponent} />
            <Route path='/second' component={SecondComponent} />
            <Route path='/clicker' component={ClickerComponent} />
            <Route path='/chuck-norris' component={ChuckNorrisComponent} />
            <Route path='/movies' component={Movies} />
            <Route path='/users' component={UserComponent} />
            {/* <Route path='/tic-tac-toe' component={TicTacToe} />
            <Route path='/pokemon' component={Pokemon} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
