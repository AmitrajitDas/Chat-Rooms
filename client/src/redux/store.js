import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from './reducers/indexReducer'

const middleware = [thunk]

const userDataFromStorage = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null

const initialState = {
    userLogin: { userData: userDataFromStorage },
}


const store = createStore(
    rootReducers, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store