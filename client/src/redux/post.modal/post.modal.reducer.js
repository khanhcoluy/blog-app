import PostModalActionType from './post.modal.types';

const INITIAL_STATE = {
  isShow: false,
  currentId: null,
  post: []
};

const postModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostModalActionType.SHOW_POST_MODAL:
      return {
        isShow: true,
        currentId: null,
        post: []
      };
    case PostModalActionType.HIDE_POST_MODAL:
      return {
        isShow: false,
        currentId: null,
        post: []
      };
    case PostModalActionType.EDIT_POST:
      return {
        isShow: true,
        currentId: action.payload._id,
        post: action.payload
      }
    default:
      return state;
  }
};

export default postModalReducer;
