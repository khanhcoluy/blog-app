import { all, call, put, takeLatest } from 'redux-saga/effects';

import PostActionTypes from './post.types';
import {
  fetchPostsSucess,
  fetchPostsFailure,
  createPostSuccess,
  createPostFailure
} from './post.actions';

import { fetchPosts, createNewPost } from '../../api/api';

export function* fetchAllPosts() {
  try {
    const posts = yield call(fetchPosts);
    yield put(fetchPostsSucess(posts.data));
  } catch (err) {
    yield put(fetchPostsFailure(err));
  }
}

export function* onCreateNewPost(action) {
  try {
    const post = yield call(createNewPost, action.payload);
    yield put(createPostSuccess(post.data));
  } catch (err) {
    yield put(createPostFailure(err));
  }
}

export function* onCreatePostStart() {
  yield takeLatest(PostActionTypes.CREATE_POST_START, onCreateNewPost);
}

export function* onFetchPostsStart() {
  yield takeLatest(PostActionTypes.FETCH_POSTS_START, fetchAllPosts);
}

export function* postSagas() {
  yield all([call(onFetchPostsStart), call(onCreatePostStart)]);
}
