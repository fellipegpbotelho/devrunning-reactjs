import { createReducer } from 'reduxsauce'

import { Types } from '../actionCreators'

export const INITIAL_STATE = {
  isAuthing: false,
  isAuth: false,
  isSigningIn: false,
  user: {},
  error: false,
  errorMessage: ''
}

export const signInRequest = (state = INITIAL_STATE, action) => {
  return { 
    ...state, 
    isSigningIn: true, 
    error: false, 
    errorMessage: '',
  }
}

export const signInSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningIn: false,
    isAuth: true,
    user: action.user,
  }
}

export const signInFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningIn: false,
    error: true, 
    errorMessage: action.error,
  }
}

export const authRequest = (state = INITIAL_STATE, action) => {
  return { 
    ...state, 
    isSigningIn: true, 
    isAuth: false,
    error: false, 
    errorMessage: '',
  }
}

export const authSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningIn: false,
    isAuth: true,
    user: action.user,
  }
}

export const authFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningIn: false,
    error: true, 
    errorMessage: action.error,
  }
}

export const HANDLERS = {
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_IN_FAILURE]: signInFailure,
  [Types.AUTH_REQUEST]: authRequest,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAILURE]: authFailure,
}

export default createReducer(INITIAL_STATE, HANDLERS)