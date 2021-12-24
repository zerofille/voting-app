import { put } from "redux-saga/effects";
import * as API from "../api";
import { createVoteSuccess, createVoteError } from "../app/votesSlice";

export function* createVotesSaga(action) {
  try {
    const response = yield API.postVotes({ voted_number: `${action.payload}` });

    const { data } = response;
    console.log(`Vote for ${data.voted_number} is confirmed `);
    yield put(createVoteSuccess(data.voted_number));
  } catch (error) {
    yield put(createVoteError(error));
  }
}
