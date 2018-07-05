import { createActions } from 'reduxsauce'

export const {
  Types, 
  Creators,
} = createActions({
  signInRequest: ["email", "passwd"],
  signInSuccess: ["user"],
  signInFailure: ["error"],

  authRequest: null,
  authSuccess: ["user"],
  authFailure: null,

  getRunsRequest: null,
  getRunsSuccess: ["runs"],
  getRunsFailure: null,

  createRunRequest: ["run"],
  createRunSuccess: ["run"],
  createRunFailure: ["error"], 

  destroyAuthRequest: null,
  destroyAuthSuccess: null,

  updateProfileReset: null,
  updateProfileRequest: ["user"],
  updateProfileSuccess: ["user"],
  updateProfileFailure: ["error"],
})

export default Creators