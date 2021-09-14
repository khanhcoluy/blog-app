import { all, call, put, takeLatest } from 'redux-saga/effects';

import PostActionTypes from './post.types';
import {
  fetchPostsSucess,
  fetchPostsFailure,
  createPostSuccess,
  createPostFailure,
  updatePostSuccess,
  updatePostFailure,
  deletePostSuccess,
  deletePostFailure
} from './post.actions';

import {
  fetchPosts,
  createNewPost,
  updatePost,
  deletePost
} from '../../api/api';

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

export function* updatePostRequest(action) {
  try {
    const post = yield call(updatePost, action.payload._id, action.payload);
    yield put(updatePostSuccess(post.data));
  } catch (err) {
    yield put(updatePostFailure(err));
  }
}

export function* deletePostRequest(action) {
  try {
    yield call(deletePost, action.payload);
    yield put(deletePostSuccess(action.payload));
  } catch (err) {
    yield put(deletePostFailure(err));
  }
}

export function* onDeletePostStart() {
  yield takeLatest(PostActionTypes.DELETE_POST_START, deletePostRequest);
}

export function* onUpdatePostStart() {
  yield takeLatest(PostActionTypes.UPDATE_POST_START, updatePostRequest);
}

export function* onCreatePostStart() {
  yield takeLatest(PostActionTypes.CREATE_POST_START, onCreateNewPost);
}

export function* onFetchPostsStart() {
  yield takeLatest(PostActionTypes.FETCH_POSTS_START, fetchAllPosts);
}

export function* postSagas() {
  yield all([
    call(onFetchPostsStart),
    call(onCreatePostStart),
    call(onUpdatePostStart),
    call(onDeletePostStart)
  ]);
}
