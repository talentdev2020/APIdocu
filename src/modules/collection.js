import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getData } from '../lib/api';

const SETDATA = 'SETDATA';
const SETDIRECTION = 'SETDIRECTION';
const GETDATA = 'GETDATA';
const SELECTEDMENU = 'SELECTEDMENU';
const LOADING_START = 'LOADING_START';
const LOADING_END = 'LOADING_END';
const GETDATAFAIL = 'GETDATAFAIL';

const initialState = {
  collection: '',
  isError: false,
  isLoading: true,
  selectedmenu: '',
  direction: true,
};

export const getdata = createAction(GETDATA);
export const selectmenu = createAction(SELECTEDMENU, (payload) => payload);
export const setdirection = createAction(
  SETDIRECTION,
  (direction) => direction,
);
function* getDataSaga() {
  yield put({ type: LOADING_START });
  try {
    const collection = yield call(getData);
    yield put({ type: SETDATA, payload: collection });
  } catch (e) {
    yield put({ type: GETDATAFAIL });
  }
  yield put({ type: LOADING_END });
}

export function* collectionSaga() {
  yield takeLatest(GETDATA, getDataSaga);
}
const actions = handleActions(
  {
    [LOADING_START]: (state) => ({ ...state, isLoading: true }),
    [SELECTEDMENU]: (state, action) => ({
      ...state,
      selectedmenu: action.payload,
    }),
    [SETDIRECTION]: (state, action) => ({
      ...state,
      direction: action.payload,
    }),
    [LOADING_END]: (state) => ({ ...state, isLoading: false }),
    [SETDATA]: (state, action) => ({
      ...state,
      collection: action.payload,
      isError: false,
    }),
    [GETDATAFAIL]: (state, action) => ({
      ...state,
      isError: true,
    }),
  },
  initialState,
);
export default actions;
