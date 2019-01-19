import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import title from './title'

export default combineReducers({
  todos,
  visibilityFilter,
  title
})
