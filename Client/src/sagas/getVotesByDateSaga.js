import { put } from "redux-saga/effects";
import * as API from "../api";
import { getVoteByDateSuccess, getVoteError } from "../app/votesSlice";

export function* getVotesByDateSaga(action) {
  try {
    const response = yield API.getVotesByDate({ date: action.payload });
    const { data } = response;

    yield put(getVoteByDateSuccess(data));
  } catch (error) {
    yield put(getVoteError(error));
  }
}
