import PostActionTypes from './post.types';

export const fetchPostsStart = () => ({
  type: PostActionTypes.FETCH_POSTS_START
});

export const fetchPostsSucess = (posts) => ({
  type: PostActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts
});

export const fetchPostsFailure = (error) => ({
  type: PostActionTypes.FETCH_POSTS_FAILURE,
  payload: error
});

export const createPostStart = (post) => ({
  type: PostActionTypes.CREATE_POST_START,
  payload: post
});

export const createPostSuccess = (post) => ({
  type: PostActionTypes.CREATE_POST_SUCCESS,
  payload: post
});

export const createPostFailure = (error) => ({
  type: PostActionTypes.CREATE_POST_FAILURE,
  payload: error
});

export const updatePostStart = (post) => ({
  type: PostActionTypes.UPDATE_POST_START,
  payload: post
});

export const updatePostSuccess = (post) => ({
  type: PostActionTypes.UPDATE_POST_SUCCESS,
  payload: post
});

export const updatePostFailure = (error) => ({
  type: PostActionTypes.UPDATE_POST_FAILURE,
  payload: error
})