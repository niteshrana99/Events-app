import React, { useReducer } from 'react';
import { IAction, IAppContext } from '../types/utils.types';
import { adminReducer } from './reducers/admin.reducer';
import {
    combineReducers
  } from 'redux-immutable';

export const AppCtx  = React.createContext<IAppContext | null>(null);

const globalState = {
    isError: false,
    isSuccess: false,
    isLoading: false
}


const reducer = (state: any, action: IAction) => {
    switch(action.type) {
        case 'SET_SUCCESS_STATE':
            return {
                ...state,
                isSuccess: false
            }
        case 'SET_ERROR_STATE':
            return {
                ...state,
                isError: false
            }
        case 'SET_LOADING_STATE':
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export const ContextProvider = (props: React.PropsWithChildren<{}>)  => {
    const rootReducer = combineReducers({
        app:reducer,
        admin: adminReducer,
    })
    const [state, dispatch] = useReducer(rootReducer, {
        app: {
            ...globalState
        },
        admin: null
    });

    return <AppCtx.Provider value={{state, dispatch}}> {props.children} </AppCtx.Provider>
}