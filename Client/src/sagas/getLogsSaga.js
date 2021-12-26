import { put } from "redux-saga/effects";
import * as API from "../api";
import { getLogsSuccess, getLogsError } from "../app/logsSlice";

export function* getLogsSaga(action) {
  try {
    const response = yield API.getLogs();
    console.log(response)
    const { data } = response;

    yield put(getLogsSuccess(data));
  } catch (error) {
    yield put(getLogsError(error));
  }
}
