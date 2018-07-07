import { takeLatest, all, put } from 'redux-saga/effects'

import ActionCreators, { Types } from '../actionCreators'
import { getRuns, createRun } from './runs'
import { login, auth, destroyAuth, updateProfile, createProfile } from './auth'

export default function* rootSaga () {
  yield all([
    takeLatest(Types.SIGN_IN_REQUEST, login),
    takeLatest(Types.AUTH_REQUEST, auth),
    takeLatest(Types.GET_RUNS_REQUEST, getRuns),
    takeLatest(Types.CREATE_RUN_REQUEST, createRun),
    takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth),
    takeLatest(Types.UPDATE_PROFILE_REQUEST, updateProfile),
    takeLatest(Types.CREATE_PROFILE_REQUEST, createProfile),
    put(ActionCreators.authRequest()),
  ])
}