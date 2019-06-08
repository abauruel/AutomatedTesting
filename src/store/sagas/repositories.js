import { call, put } from "redux-saga/effects";

import { Creators as RepositoriesActions } from "../ducks/repositories";
import api from "../../services/api";

export function* getRepositories() {
  try {
    const response = yield call(api.get, "users/abauruel/repos");

    yield put(RepositoriesActions.getSuccess(response.data));
  } catch (err) {
    console.log(err);
    yield put(RepositoriesActions.getFailure());
  }
}
