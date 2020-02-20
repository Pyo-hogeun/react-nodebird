import { all } from 'redux-saga/effects';
import { LOG_IN, LOGIN_IN_SUCCESS, LOGIN_IN_FAILURE } from '../reducers/user';

function loginAPI(){

}

function* login(){
    try{
        yield call(loginAPI);
        yield put({
            type: LOGIN_IN_SUCCESS
        })
    } catch (e){
        console.error(e);
        yield put({
            type: LOGIN_IN_FAILURE
        })
    }
}
function* watchLogin(){
    yield takeLatest(LOG_IN, login)
}
export default function* userSaga(){
    yield all([
        fork(watchLogin),
    ]);
}