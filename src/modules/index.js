import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import collection, { collectionSaga } from './collection';

const rootReducer = combineReducers({
  collection,
});

export function* rootSaga() {
  yield all([collectionSaga()]);
}
export default rootReducer;
