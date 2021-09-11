import { combineReducers } from 'redux';
import postReducer from './post/post.reducer';
import postModalReducer from './post.modal/post.modal.reducer';

const rootReducer = combineReducers({
  post: postReducer,  
  postModal: postModalReducer
});

export default rootReducer;