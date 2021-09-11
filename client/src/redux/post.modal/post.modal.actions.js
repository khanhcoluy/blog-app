import PostModalActionType from './post.modal.types';

export const showPostModal = () => ({
  type: PostModalActionType.SHOW_POST_MODAL
});

export const hidePostModal = () => ({
  type: PostModalActionType.HIDE_POST_MODAL
});
