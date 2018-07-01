import { takeLatest, all, put } from 'redux-saga/effects'
import ActionCreators, { Types } from '../actionCreators'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

function* login (action) {

  let token = localStorage.getItem('token')

  const login = yield axios.post('http://localhost:3001/users/login', {
    email: action.email,
    passwd: action.passwd,
  })

  if (login.data.token) {

    token = login.data.token
    localStorage.setItem('token', token)

    const user = jwtDecode(token)
    localStorage.setItem('user', user)

    yield put(ActionCreators.signInSuccess(user))
  } else {
    yield put(ActionCreators.signInFailure(login.data.message))
  }
}

function* auth () {

  const token = localStorage.getItem("token")

  if (token) {
    try {
      const user = jwtDecode(token)
      yield put(ActionCreators.authSuccess(user))
    } catch (err) {
      yield put(ActionCreators.authFailure("Invalid token"))
    }
  } else {
    yield put(ActionCreators.authFailure("No token"))
  }
}

export default function* rootSaga () {
  yield all([
    takeLatest(Types.SIGN_IN_REQUEST, login),
    takeLatest(Types.AUTH_REQUEST, auth),
    put(ActionCreators.authRequest()),
  ])
}