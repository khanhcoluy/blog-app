import PostModalActionType from './post.modal.types';

const INITIAL_STATE = {
  isShow: false
};

const postModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostModalActionType.SHOW_POST_MODAL:
      return {
        isShow: true
      };
    case PostModalActionType.HIDE_POST_MODAL:
      return {
        isShow: false
      };
    default:
      return state;
  }
};

export default postModalReducer;
