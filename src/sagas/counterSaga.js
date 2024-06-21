import { takeEvery, put, delay } from 'redux-saga/effects';
import { INCREMENT_ASYNC, increment } from '../actions'; 


function* incrementAsync() {
  yield delay(1000); 
  yield put(increment()); 


  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}
