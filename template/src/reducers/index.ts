import { combineReducers } from 'redux'

import userReducer, { UserStateType, userInitState } from './user/userReducer'

export interface StoreState {
  user: UserStateType
}

export const initState: StoreState = {
  user: userInitState,
}

export default combineReducers<StoreState>({
  user: userReducer,
})
