import { combineReducers } from 'redux'

import { userLoginReducer } from './userLoginReducer'
import { userRegisterReducer } from './userRegisterReducer'


const rootReducers = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
})

export default rootReducers