import { combineReducers } from '@reduxjs/toolkit'
import modalSlice from '../features/modal/modalSlice'


const rootReducer = combineReducers({
    modalSlice
})
export default rootReducer