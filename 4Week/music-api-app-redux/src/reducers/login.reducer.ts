import { ILoginState } from ".";
import { User } from "../assets/models/user";


const initialState: ILoginState = {
  currentUser: new User(undefined, undefined,null,-1),
  errorMessage: ''
}

export const loginReducer = (state = initialState, action: any) => {
  // switch (key) {
  //   case value:
      
  //     break;
  
  //   default:
  //     break;
  // }

  return state;
}