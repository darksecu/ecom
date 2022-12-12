import {call, takeEvery, put} from 'redux-saga/effects';
import {PLPEndPoint} from '../../services/api-end-points';
import {fetchPLP, fetchPLPSuccess, fetchPLPFailed} from '../slices/plp';
import Axios, {AxiosResponse} from 'axios';

function* fetchPLPWorker(action: any) {
  try {
    let options = {
      method: 'GET',
      url: PLPEndPoint,
    };
    let response: AxiosResponse<any> = yield call(Axios, options);
    yield put(fetchPLPSuccess(response.data));
  } catch (e: any) {
    yield put(fetchPLPFailed());
  }
}

export default function* rootSaga() {
  yield takeEvery(fetchPLP.type, fetchPLPWorker);
}
