
import { createStore, combineReducers } from 'redux'
import toggleFilter from './Reducers/filterReducer';
import toggleFilterMap from './Reducers/filterMapReducers';
import toggleUsers from './Reducers/filterUsers';
import toggleList from './Reducers/filterMeetupReducer';

// combining two reducers into a single reducer
const reducer = combineReducers({
    toggleFilter,
    toggleFilterMap,
    toggleUsers,
    toggleList,
})
const store = createStore(reducer)

export default store