import React from "react";

export interface ISignUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
}

export interface globalState {
  app: {
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
  };
  admin: any
}

export interface IAppContext {
  state: globalState;
  dispatch: React.Dispatch<any>;
}

export interface IAction {
  type: string;
  payload?:any;
}