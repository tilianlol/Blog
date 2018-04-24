import { combineReducers } from 'redux';
import postsReducer from './postsReducer.jsx';
import postActive from './postActive.jsx';
import filterReducer from './filterReducer.jsx';

const allReducers = combineReducers({
	posts: postsReducer,
	active: postActive,
	filters: filterReducer,
});

export default allReducers;