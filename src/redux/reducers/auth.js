import { createReducer } from 'reduxsauce'

import { Types } from '../actionCreators'

export const INITIAL_STATE = {
  isAuthing: false,
  isAuth: false,
  isSigningIn: false,
  isSaving: false,
  saved: false,
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
    //error: true, 
    //errorMessage: action.error,
  }
}

export const destroyAuthSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningIn: false,
    isAuth: false,
    user: {},
  }
}

export const updateProfileRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSaving: true,
    error: false,
    errorMessage: '',
    saved: false,
  }
}

export const updateProfileSuccess = (state = INITIAL_STATE, action) => {
  const newUser = {
    ...state.user,
  }
  Object.keys(action.user).forEach(key => {
    newUser[key] = action.user[key]
  })
  return {
    ...state,
    isSaving: false,
    user: newUser,
    saved: true,
  }
}

export const updateProfileFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSaving: false,
    error: true,
    errorMessage: action.error,
    saved: false,
  }
}

export const updateProfileReset = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSaving: false,
    saved: false,
  }
}

export const createProfileRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSaving: true,
    error: false,
    errorMessage: '',
    saved: false,
  }
}

export const createProfileSuccess = (state = INITIAL_STATE, action) => {
  const newUser = {
    ...state.user,
  }
  Object.keys(action.user).forEach(key => {
    newUser[key] = action.user[key]
  })
  return {
    ...state,
    isSaving: false,
    user: newUser,
    saved: true,
  }
}

export const createProfileFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSaving: false,
    error: true,
    errorMessage: action.error,
    saved: false,
  }
}

export const createProfileReset = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSaving: false,
    saved: false,
  }
}

export const HANDLERS = {
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_IN_FAILURE]: signInFailure,
  [Types.AUTH_REQUEST]: authRequest,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAILURE]: authFailure,
  [Types.DESTROY_AUTH_SUCCESS]: destroyAuthSuccess,
  [Types.UPDATE_PROFILE_REQUEST]: updateProfileRequest,
  [Types.UPDATE_PROFILE_SUCCESS]: updateProfileSuccess,
  [Types.UPDATE_PROFILE_FAILURE]: updateProfileFailure,
  [Types.UPDATE_PROFILE_RESET]: updateProfileReset,
  [Types.CREATE_PROFILE_REQUEST]: createProfileRequest,
  [Types.CREATE_PROFILE_SUCCESS]: createProfileSuccess,
  [Types.CREATE_PROFILE_FAILURE]: createProfileFailure,
  [Types.CREATE_PROFILE_RESET]: createProfileReset,
}

export default createReducer(INITIAL_STATE, HANDLERS)