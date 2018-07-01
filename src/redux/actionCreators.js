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
})

export default Creators