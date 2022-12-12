import {call, takeEvery} from 'redux-saga/effects';
import {PLPEndPoint} from '../../services/api-end-points';
import {fetchPLP} from '../slices/plp';
import Axios, {AxiosResponse} from 'axios';

function* fetchPLPWorker(action: any) {
  try {
    let options = {
      method: 'GET',
      url: PLPEndPoint,
    };
    let response: AxiosResponse<any> = yield call(Axios, options);
    console.log(response.data);
  } catch (e: any) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeEvery(fetchPLP.type, fetchPLPWorker);
}
