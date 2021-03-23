import { all } from "redux-saga/effects";
import { tweetsSaga } from "./ducks/tweets/saga";

export function* rootSaga() {
  yield all([
    tweetsSaga()
  ])
}