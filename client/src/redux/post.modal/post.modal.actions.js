import PostModalActionType from './post.modal.types';

export const showPostModal = () => ({
  type: PostModalActionType.SHOW_POST_MODAL
});

export const hidePostModal = () => ({
  type: PostModalActionType.HIDE_POST_MODAL
});

export const editPost = (post) => ({
  type: PostModalActionType.EDIT_POST,
  payload: post
})

export const showDeleteModal = (id) => ({
  type: PostModalActionType.SHOW_DELETE_MODAL,
  payload: id
});

export const hideDeleteModal = () => ({
  type: PostModalActionType.HIDE_DELETE_MODAL
});