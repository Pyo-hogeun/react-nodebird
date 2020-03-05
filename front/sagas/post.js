import { all, put, delay, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import {
    ADD_POST_REQUEST,    
    ADD_POST_SUCCESS,    
    ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST,    
} from '../reducers/post';

function addPostAPI(){

}

function* addPost(){
    try{
        // yield addPostAPI();
        yield delay(2000);
        yield put({
            type: ADD_POST_SUCCESS,
        })
    } catch(e){
        console.error(e);
        yield put({
            type: ADD_POST_FAILURE,
            error: e,
        })
    }
}

function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost),
    ]);
}