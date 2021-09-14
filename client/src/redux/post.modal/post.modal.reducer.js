import PostModalActionType from './post.modal.types';

const INITIAL_STATE = {
  isShow: false,
  isDeleteShow: false,
  currentId: null,
  post: []
};

const postModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostModalActionType.SHOW_POST_MODAL:
      return {
        ...state,
        isShow: true,
        currentId: null,
        post: []
      };
    case PostModalActionType.HIDE_POST_MODAL:
      return {
        ...state,
        isShow: false,
        currentId: null,
        post: []
      };
    case PostModalActionType.EDIT_POST:
      return {
        ...state,
        isShow: true,
        currentId: action.payload._id,
        post: action.payload
      };
    case PostModalActionType.SHOW_DELETE_MODAL:
      return {
        ...state,
        isDeleteShow: true,
        currentId: action.payload,
      };
    case PostModalActionType.HIDE_DELETE_MODAL:
      return {
        ...state,
        isDeleteShow: false,
        currentId: null,
      };
    default:
      return state;
  }
};

export default postModalReducer;
