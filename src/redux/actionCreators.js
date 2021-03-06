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

  createRunReset: null, 
  createRunRequest: ["run"],
  createRunSuccess: ["run"],
  createRunFailure: ["error"], 

  removeRunRequest: ["id"],
  removeRunSuccess: ["id"],
  removeRunFailure: ["error"], 

  destroyAuthRequest: null,
  destroyAuthSuccess: null,

  updateProfileReset: null,
  updateProfileRequest: ["user"],
  updateProfileSuccess: ["user"],
  updateProfileFailure: ["error"],

  createProfileReset: null,
  createProfileRequest: ["user"],
  createProfileSuccess: ["user"],
  createProfileFailure: ["error"],
})

export default Creators