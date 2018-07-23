import { combineReducers } from "redux";
import { signInReducer } from "./sign-in.reducer";
import { CognitoUser } from "amazon-cognito-identity-js";
import { cognitoUserReducer } from "./cognito-user-reducer";
import { dashboardReducer } from "./userDashboard.reducer";

export interface ICognitoUser { 
  user: CognitoUser | null
}

export interface IDashboard {
  displayGroups: string[];
}

export interface IRegister {
  username: string,
  password: string, 
  errorMessage: string
}

export interface ISignIn {
  firstSignIn: {
    isFirstSignIn: boolean,
    password: string,
    passwordConfirmation: string
  },
  username: string,
  password: string,
  errorMessage: string
}

export interface IState {
  cognitoUser: ICognitoUser,
  dashboard: IDashboard,
  register: IRegister,
  signIn: ISignIn
};

export const state = combineReducers<IState>({
  cognitoUser: cognitoUserReducer,
  dashboard: dashboardReducer,
  signIn: signInReducer
});