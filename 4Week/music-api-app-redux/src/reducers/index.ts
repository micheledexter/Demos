import { combineReducers } from "redux";
import { User } from "../assets/models/user";
import { loginReducer } from "./login.reducer";

export interface ILoginState {
  currentUser: User;
  errorMessage: string;
}

// This is an interface that represents all of the states that we are keeping track of
// for the entire application
export interface IState {
  login: ILoginState;
}

// This is going to build all of the reducers that modify state into one single
// combined super reducer that will act as the global state object
export const state = combineReducers<IState>({
  login: loginReducer,
});