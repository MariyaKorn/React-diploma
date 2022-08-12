import { all, takeLatest, put, call } from "redux-saga/effects";
import { getAllPostsApi } from "../../api";
import { getPosts,  setPosts, setLoadingPosts } from '../../reducers/posts';

function* getPostsSaga(action: any) {
    yield put(setLoadingPosts(true));
    const { data, status, problem } = yield call(getAllPostsApi, action.payload);

    if(status === 200 && data) {
        yield put(setPosts(data))
    } else {
        console.log('ERROR FETCHING POSTS', problem)
    }
    yield put(setLoadingPosts(false));
}

export default function* postsWatcher() {
    yield all([takeLatest(getPosts, getPostsSaga)]);
};