import PostActionTypes from './post.types';

const INITIAL_STATE = {
  isLoading: false,
  posts: [],
  error: null
};

const postReducer = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS_START:
      return {
        ...state,
        isLoading: true
      };
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
        error: null
      };
    case PostActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    // case PostActionTypes.CREATE_POST_START:
    //   return state;
    case PostActionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [ ...state.posts, action.payload ],
        error: null
      };
    case PostActionTypes.CREATE_POST_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};

export default postReducer;