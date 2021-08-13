import { AnyAction } from 'redux'
import { GetUserActionType } from './userActions'
import { User } from '@models/userModel'

export interface UserStateType extends User {}

export const userInitState: UserStateType = {
  name: '',
}

export default function reducer(state: UserStateType = userInitState, action: AnyAction): UserStateType {
  switch (action.type) {
    case GetUserActionType.success:
      return { ...state, name: action.name }
    default:
      return state
  }
}
