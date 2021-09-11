import { all, call, put, takeLatest } from 'redux-saga/effects';

import PostActionTypes from './post.types';
import { fetchPostsSucess, fetchPostsFailure } from './post.actions';

import { fetchPosts } from '../../api/api';

export function* fetchAllPosts() {
  try {
    const posts = yield call(fetchPosts);
    yield put(fetchPostsSucess(posts.data));
  } catch (err) {
    yield put(fetchPostsFailure(err));
  }
}

export function* onFetchPostsStart() {
  yield takeLatest(PostActionTypes.FETCH_POSTS_START, fetchAllPosts);
}

export function* postSagas() {
  yield all([call(onFetchPostsStart)]);
}
