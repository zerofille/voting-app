import { configureStore } from "@reduxjs/toolkit";
import votesReducer from "./votesSlice";
import logsReducer from "./logsSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    votes: votesReducer,
    logs: logsReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
export default store;
