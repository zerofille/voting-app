import { takeLatest } from "redux-saga/effects";
import { createVoteRequest, getVoteRequest } from "../app/votesSlice";
import { getLogsRequest } from "../app/logsSlice";
import { createVotesSaga } from "./createVotesSaga";
import { getVotesByDateSaga } from "./getVotesByDateSaga";
import { getLogsSaga } from "./getLogsSaga";

function* rootSaga() {
  yield takeLatest(createVoteRequest.toString(), createVotesSaga);
  yield takeLatest(getVoteRequest.toString(), getVotesByDateSaga);
  yield takeLatest(getLogsRequest.toString(), getLogsSaga);
}

export default rootSaga;
