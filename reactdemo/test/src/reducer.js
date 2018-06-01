//合并所有的reducer 并且返回

import {combineReducers} from 'redux'
import {count} from './index.redux'
import {auth} from './auth.redux'

export default combineReducers({count,auth})